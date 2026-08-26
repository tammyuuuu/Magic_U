(() => {
  const page=location.pathname.split('/').pop()||'index.html';
  const active=page==='journey.html'?'journey':page==='handbook.html'||page==='handbook_daily.html'||page==='daily_archive.html'?'handbook':page==='index.html'?'home':'';
  const nav=document.createElement('nav');nav.className='app-nav';nav.style.gridTemplateColumns='repeat(3,1fr)';nav.setAttribute('aria-label','主要导航');
  nav.innerHTML=[['home','index.html','主页'],['journey','journey.html','旅程'],['handbook','handbook.html','手册']].map(([key,href,label])=>`<a href="${href}"${key===active?' aria-current="page"':''}>${label}</a>`).join('');
  document.body.classList.add('has-app-nav');document.body.appendChild(nav);
})();
