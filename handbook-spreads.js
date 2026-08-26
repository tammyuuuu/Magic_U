(()=>{
  const key='magic_u_spread_practice_records_v1',$=id=>document.getElementById(id);
  function read(){try{const value=JSON.parse(localStorage.getItem(key)||'[]');return Array.isArray(value)?value:[]}catch{return[]}}
  function dateLabel(value){const d=new Date(value);return Number.isNaN(d.valueOf())?'':d.toLocaleDateString('zh-CN',{year:'numeric',month:'2-digit',day:'2-digit'})}
  const records=read(),count=$('spreadNotesCount'),list=$('spreadArchiveList'),archiveCount=$('spreadArchiveCount');
  if(count)count.textContent=`${records.length} 篇`;
  if(!list)return;
  if(archiveCount)archiveCount.textContent=records.length?`${records.length} 篇`:'';
  if(!records.length){const empty=document.createElement('p');empty.className='archive-empty';empty.innerHTML='完成一次牌阵练习后，<br>你的理解会留在这里。';list.append(empty);return}
  records.forEach(record=>{const article=document.createElement('article');article.className='note-item';const time=document.createElement('time');time.textContent=`${dateLabel(record.createdAt)} · ${record.spreadTitle}`;article.append(time);record.cards.forEach((card,index)=>{const p=document.createElement('p'),strong=document.createElement('strong');strong.textContent=`${card.position} · ${card.nameZh} · ${card.orientation==='upright'?'正位':'逆位'}`;p.append(strong,document.createElement('br'),document.createTextNode(record.answers[index]||''));article.append(p)});list.append(article)});
})();
