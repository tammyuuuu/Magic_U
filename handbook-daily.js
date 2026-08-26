(() => {
  const params=new URLSearchParams(location.search),previewId=params.get('preview');
  const storage=previewId?sessionStorage:localStorage;
  const key=previewId?`magic_u_daily_preview_${previewId}`:'magic_u_daily_records_v1_records';
  const focuses=[['love','感情'],['career','事业'],['finance','财运'],['health','健康']];
  const moods={calm:'平静',happy:'开心',neutral:'一般',uneasy:'忐忑',tired:'疲惫',hopeful:'期待',unknown:'说不上来'};
  const $=id=>document.getElementById(id);
  function noteId(){return globalThis.crypto&&crypto.randomUUID?crypto.randomUUID():`note-${Date.now()}-${Math.random().toString(16).slice(2)}`}
  function normalize(item){if(!item||typeof item!=='object')return item;const next={...item};if(!Array.isArray(next.notes))next.notes=[];if(typeof next.note==='string'&&next.note.trim()&&!next.notes.length)next.notes=[{id:`legacy-${next.date}`,createdAt:next.savedAt||next.updatedAt||next.createdAt||new Date().toISOString(),text:next.note.trim()}];delete next.note;return next}
  function read(){try{const value=JSON.parse(storage.getItem(key)||'{}');if(!value||typeof value!=='object'||Array.isArray(value))return {};return Object.fromEntries(Object.entries(value).map(([date,item])=>[date,normalize(item)]))}catch{return {}}}
  function write(record){const records=read();records[record.date]=normalize(record);storage.setItem(key,JSON.stringify(records))}
  function dateLabel(date){const [year,month,day]=String(date).split('-');return year&&month&&day?`${day}/${month}/${year.slice(-2)}`:date}
  function identity(id){return TAROT_CARDS.find(card=>card.id===Number(id))}
  function snapshot(record){if(record.readingSnapshot)return record.readingSnapshot;const card=globalThis.TAROT_DAILY_CONTENT&&TAROT_DAILY_CONTENT.find(item=>item.id===record.cardId);return card&&card[record.orientation]||null}
  function orientation(record){return record.orientation==='upright'?'正位':'逆位'}
  function deck(){const item=DECKS.find(deck=>deck.name==='维特塔罗')||DECKS[0];return {path:item.path.replace(/\/+$/,''),format:item.format||'png',startAt:Number(item.startAt)||0}}
  function cardPath(id){const item=deck();return `${item.path}/${item.startAt+Number(id)}.${item.format}`}
  function roman(value){if(value===0)return '0';const map=[[10,'X'],[9,'IX'],[5,'V'],[4,'IV'],[1,'I']];let n=value,out='';for(const [amount,symbol] of map)while(n>=amount){out+=symbol;n-=amount}return out}
  function preservePreview(url){return previewId?`${url}${url.includes('?')?'&':'?'}preview=${encodeURIComponent(previewId)}`:url}

  function renderHandbook(){const entry=$('dailyArchiveEntry');if(!entry)return;const count=Object.values(read()).filter(item=>item&&item.saved).length;entry.href=preservePreview('handbook_daily.html');$('archiveCount').textContent=`${count} 篇`}

  function renderList(){
    const list=$('archiveList');if(!list)return;
    if($('handbookBack'))$('handbookBack').href=preservePreview('handbook.html');
    const records=Object.values(read()).filter(item=>item&&item.saved).sort((a,b)=>String(b.date).localeCompare(String(a.date)));
    $('archiveCount').textContent=records.length?`${records.length} 篇`:'';
    if(!records.length){list.innerHTML='<p class="archive-empty">完成每日一牌后，<br>当天的解读会留在这里。</p>';return}
    list.innerHTML=records.map(record=>{const card=identity(record.cardId);if(!card)return '';const href=preservePreview(`daily_archive.html?date=${encodeURIComponent(record.date)}`);return `<a class="archive-entry" href="${href}"><strong>${card.nameZh} · ${dateLabel(record.date)}</strong><p>${orientation(record)} · 抽牌前 ${moods[record.mood]||'未记录'}</p><i>›</i></a>`}).join('');
  }

  function renderDetail(){
    const detail=$('archiveDetail');if(!detail)return;
    const date=params.get('date'),records=read(),record=normalize(records[date]),card=record&&identity(record.cardId),copy=record&&snapshot(record);
    $('archiveBack').href=preservePreview('handbook_daily.html');
    if(!record||!record.saved||!card||!copy){$('archiveMissing').hidden=false;return}
    detail.hidden=false;document.title=`${card.nameZh} · ${dateLabel(record.date)} | Magic_U`;$('archiveCardImage').src=cardPath(record.cardId);$('archiveCard').classList.toggle('reversed',record.orientation==='reversed');$('archiveCardName').textContent=card.nameZh;$('archiveCardNameEn').textContent=card.nameEn;$('archiveOrientation').textContent=orientation(record);$('archiveMood').textContent=`抽牌前 · ${moods[record.mood]||'未记录'}`;$('archiveCore').textContent=copy.core;$('archiveDaily').textContent=copy.daily;
    let active=record.focus&&copy[record.focus]?record.focus:'love';
    const renderFocus=()=>{$('archiveFocusTabs').innerHTML=focuses.map(([name,label])=>`<button type="button" data-focus="${name}" class="${name===active?'selected':''}">${label}</button>`).join('');$('archiveFocusText').textContent=copy[active]};renderFocus();
    $('archiveFocusTabs').addEventListener('click',event=>{const button=event.target.closest('[data-focus]');if(!button)return;active=button.dataset.focus;renderFocus()});
    const renderNotes=()=>{record.notes.sort((a,b)=>String(a.createdAt).localeCompare(String(b.createdAt)));$('notesList').innerHTML=record.notes.length?record.notes.map(note=>`<article class="note-item"><time datetime="${note.createdAt}">${new Date(note.createdAt).toLocaleTimeString([],{hour:'2-digit',minute:'2-digit',hour12:false})}</time><p></p></article>`).join(''):'<p class="notes-empty">这一天还没有留下记录。</p>';[...$('notesList').querySelectorAll('.note-item p')].forEach((node,index)=>node.textContent=record.notes[index].text)};renderNotes();
    $('addNote').addEventListener('click',()=>{$('noteComposer').hidden=!$('noteComposer').hidden;if(!$('noteComposer').hidden)$('archiveNoteInput').focus()});
    $('saveArchiveNote').addEventListener('click',()=>{const text=$('archiveNoteInput').value.trim();if(!text)return;const now=new Date().toISOString();record.notes.push({id:noteId(),createdAt:now,text});record.updatedAt=now;write(record);$('archiveNoteInput').value='';$('noteComposer').hidden=true;renderNotes()});
  }
  renderHandbook();renderList();renderDetail();
})();
