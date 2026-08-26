(() => {
  const UNLOCK_KEY='magic_u_boss_black_cat_completed';
  const previewId=new URLSearchParams(location.search).get('preview');
  const recordStorage=previewId?sessionStorage:localStorage;
  const RECORDS_KEY=previewId?`magic_u_daily_preview_${previewId}`:'magic_u_daily_records_v1_records';
  const moods=[['calm','😌','平静'],['happy','😊','开心'],['neutral','😶','一般'],['uneasy','😟','忐忑'],['tired','😫','疲惫'],['hopeful','✨','期待'],['unknown','','说不上来']];
  const focuses=[['love','感情'],['career','事业'],['finance','财运'],['health','健康']];
  const stages=[...document.querySelectorAll('.daily-stage')];
  const $=id=>document.getElementById(id);
  let selectedMood='',record=null;

  function localDate(){const d=new Date(),p=n=>String(n).padStart(2,'0');return `${d.getFullYear()}-${p(d.getMonth()+1)}-${p(d.getDate())}`}
  function noteId(){return globalThis.crypto&&crypto.randomUUID?crypto.randomUUID():`note-${Date.now()}-${Math.random().toString(16).slice(2)}`}
  function normalizeRecord(item){
    if(!item||typeof item!=='object')return item;
    const next={...item};
    if(!Array.isArray(next.notes))next.notes=[];
    if(typeof next.note==='string'&&next.note.trim()&&!next.notes.length){next.notes=[{id:`legacy-${next.date}`,createdAt:next.savedAt||next.updatedAt||next.createdAt||new Date().toISOString(),text:next.note.trim()}]}
    delete next.note;
    return next;
  }
  function readRecords(){try{const value=JSON.parse(recordStorage.getItem(RECORDS_KEY)||'{}');if(!value||typeof value!=='object'||Array.isArray(value))return {};return Object.fromEntries(Object.entries(value).map(([date,item])=>[date,normalizeRecord(item)]))}catch{return {}}}
  function writeRecord(next){const records=readRecords();records[next.date]=next;recordStorage.setItem(RECORDS_KEY,JSON.stringify(records));record=next}
  function show(stage){stages.forEach(item=>item.hidden=item!==stage)}
  function deck(){const d=DECKS.find(item=>item.name==='维特塔罗')||DECKS[0];return {path:d.path.replace(/\/+$/,''),format:d.format||'png',back:d.back||'png',startAt:Number(d.startAt)||0}}
  function pathFor(id){const d=deck();return `${d.path}/${d.startAt+id}.${d.format}`}
  function backPath(){const d=deck();return `${d.path}/back.${d.back}`}
  function contentFor(id){return TAROT_DAILY_CONTENT.find(item=>item.id===id)}
  function moodLabel(key){const m=moods.find(item=>item[0]===key);return m?m[2]:''}
  function readingSnapshot(){const card=contentFor(record.cardId),copy=card&&card[record.orientation];return copy?{core:copy.core,daily:copy.daily,love:copy.love,career:copy.career,finance:copy.finance,health:copy.health}:null}

  function renderMood(){
    $('moodChoices').innerHTML=moods.map(([key,,label])=>`<button class="mood-choice" type="button" data-mood="${key}">${label}</button>`).join('');
    $('moodChoices').addEventListener('click',e=>{const b=e.target.closest('[data-mood]');if(!b)return;selectedMood=b.dataset.mood;document.querySelectorAll('.mood-choice').forEach(x=>x.classList.toggle('selected',x===b));$('toDraw').disabled=false});
    $('toDraw').addEventListener('click',()=>{if(!selectedMood)return;prepareDraw();show($('drawStage'))});
  }

  function createToday(){
    const id=Math.floor(Math.random()*78),orientation=Math.random()<.5?'upright':'reversed';
    const next={date:localDate(),cardId:id,orientation,mood:selectedMood,focus:'love',notes:[],revealed:false,saved:false,createdAt:new Date().toISOString(),updatedAt:new Date().toISOString()};
    writeRecord(next);return next;
  }

  function prepareDraw(){
    $('drawTitle').textContent='让今天与一张牌相遇';$('moodRecall').textContent=`抽牌前 · ${moodLabel(selectedMood)}`;$('flipPrompt').hidden=false;$('flipPrompt').textContent='点击牌背，亲自翻开';$('revealIdentity').hidden=true;$('drawCard').disabled=false;$('drawCard').classList.remove('is-flipped','is-reversed');$('revealImage').removeAttribute('src');
  }

  function preparePendingReveal(){
    const identity=TAROT_CARDS.find(item=>item.id===record.cardId);
    selectedMood=record.mood;$('drawTitle').textContent='今天的牌，正在等你翻开';$('moodRecall').textContent=`抽牌前 · ${moodLabel(record.mood)}`;$('revealImage').src=pathFor(record.cardId);$('drawCard').classList.toggle('is-reversed',record.orientation==='reversed');$('drawCard').classList.remove('is-flipped');$('drawCard').disabled=false;$('revealIdentity').hidden=true;$('flipPrompt').hidden=false;$('flipPrompt').textContent='点击牌背，亲自翻开';$('revealNumberName').textContent=identity.nameZh;$('revealNameEn').textContent=identity.nameEn;$('revealOrientation').textContent=record.orientation==='upright'?'正位':'逆位';show($('drawStage'));
  }

  function revealToday(){
    if(!record)record=createToday();
    const identity=TAROT_CARDS.find(item=>item.id===record.cardId);
    $('revealImage').src=pathFor(record.cardId);$('drawCard').classList.toggle('is-reversed',record.orientation==='reversed');$('revealNumberName').textContent=identity.nameZh;$('revealNameEn').textContent=identity.nameEn;$('revealOrientation').textContent=record.orientation==='upright'?'正位':'逆位';$('drawCard').disabled=true;$('flipPrompt').textContent='';
    requestAnimationFrame(()=>$('drawCard').classList.add('is-flipped'));
    setTimeout(()=>{record.revealed=true;record.updatedAt=new Date().toISOString();writeRecord(record);$('drawTitle').textContent='';$('moodRecall').hidden=true;$('flipPrompt').hidden=true;$('revealIdentity').hidden=false},720);
  }

  function renderResult(){
    const identity=TAROT_CARDS.find(item=>item.id===record.cardId),card=contentFor(record.cardId),copy=card[record.orientation];
    $('cardImage').src=pathFor(record.cardId);$('resultCard').classList.toggle('reversed',record.orientation==='reversed');
    $('cardNumberName').textContent=identity.nameZh;$('cardNameEn').textContent=identity.nameEn;
    $('orientation').textContent=record.orientation==='upright'?'正位':'逆位';$('coreText').textContent=copy.core;$('dailyText').textContent=copy.daily;$('resultMood').textContent=`抽牌前 · ${moodLabel(record.mood)}`;
    $('savedMark').textContent=record.saved?'已保存':'';
    $('focusTabs').innerHTML=focuses.map(([key,label])=>`<button type="button" data-focus="${key}" class="${record.focus===key?'selected':''}">${label}</button>`).join('');
    $('focusText').textContent=copy[record.focus]||copy.love;
    $('noteInput').value='';$('noteInput').hidden=true;$('noteToggle').textContent='＋ 记录今天的事';
    show($('resultStage'));
  }

  $('drawCard').addEventListener('click',revealToday);
  $('toReading').addEventListener('click',renderResult);
  $('focusTabs').addEventListener('click',e=>{const b=e.target.closest('[data-focus]');if(!b)return;record.focus=b.dataset.focus;record.updatedAt=new Date().toISOString();writeRecord(record);renderResult()});
  $('noteToggle').addEventListener('click',()=>{$('noteInput').hidden=!$('noteInput').hidden;if(!$('noteInput').hidden){$('noteInput').focus();$('noteToggle').textContent='收起当天记录'}else $('noteToggle').textContent='＋ 记录今天的事'});
  $('saveDaily').addEventListener('click',()=>{const now=new Date().toISOString(),text=$('noteInput').value.trim();record=normalizeRecord(record);if(text){record.notes.push({id:noteId(),createdAt:now,text});$('noteInput').value='';$('noteInput').hidden=true;$('noteToggle').textContent='＋ 记录今天的事'}record.readingSnapshot=record.readingSnapshot||readingSnapshot();record.saved=true;record.savedAt=record.savedAt||now;record.updatedAt=now;writeRecord(record);if(!previewId)localStorage.setItem('magic_u_spread_practice_unlocked',now);$('savedMark').textContent='已收入我的手册';$('saveDaily').textContent='今天的牌已经留下来了';setTimeout(()=>$('saveDaily').textContent='保存今日记录',1600)});

  $('backImage').src=backPath();renderMood();
  if(!previewId&&!localStorage.getItem(UNLOCK_KEY)){show($('lockedStage'));return}
  record=readRecords()[localDate()]||null;
  if(record){if(record.revealed===false)preparePendingReveal();else renderResult()}else show($('moodStage'));
})();
