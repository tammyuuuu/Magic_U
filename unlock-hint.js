(() => {
  const dialog = document.createElement('dialog');
  dialog.className = 'unlock-hint';
  dialog.setAttribute('aria-labelledby', 'unlockHintTitle');
  dialog.setAttribute('aria-describedby', 'unlockHintText');
  dialog.innerHTML = '<span class="unlock-hint-symbol" aria-hidden="true">✧</span><h2 id="unlockHintTitle"></h2><p id="unlockHintText"></p><div class="unlock-hint-actions"><button type="button">知道了</button><a href="journey.html">继续旅程</a></div>';
  document.body.appendChild(dialog);
  const title = dialog.querySelector('h2');
  const text = dialog.querySelector('p');
  const action = dialog.querySelector('a');
  dialog.querySelector('button').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => {
    if (event.target !== dialog) return;
    const rect = dialog.getBoundingClientRect();
    if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close();
  });
  function show(name, message, url, label) {
    title.textContent = name + ' · 尚未解锁';
    text.textContent = message;
    action.hidden = !url;
    if (url) { action.href = url; action.textContent = label; }
    if (!dialog.open) dialog.showModal();
  }
  const hints = {
    dailyCardTool: () => show('今日一牌', '在塔罗之旅中依次完成愚人、魔术师、女祭司、皇后和皇帝，再通过第一次「黑猫的考验」，即可解锁今日一牌。', 'journey.html', '继续旅程'),
    spreadTool: () => {
      const dailyUnlocked = !!localStorage.getItem('magic_u_boss_black_cat_completed');
      show('牌阵练习', dailyUnlocked ? '完成一次今日一牌，并点击保存记录，即可解锁牌阵练习。' : '先通过塔罗之旅中的第一次「黑猫的考验」，解锁今日一牌；再完成一次今日一牌并保存记录，即可解锁牌阵练习。', dailyUnlocked ? 'daily_card.html' : 'journey.html', dailyUnlocked ? '去抽今日一牌' : '继续旅程');
    }
  };
  Object.entries(hints).forEach(([id, hint]) => {
    const tile = document.getElementById(id);
    if (!tile || !tile.classList.contains('locked')) return;
    tile.setAttribute('role', 'button');
    tile.removeAttribute('aria-disabled');
    tile.setAttribute('aria-haspopup', 'dialog');
    tile.addEventListener('click', hint);
    tile.addEventListener('keydown', event => {
      if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); hint(); }
    });
  });
  const levels = Array.from(document.querySelectorAll('.level-item'));
  levels.forEach((level, index) => level.addEventListener('click', event => {
    if (level.dataset.unlocked === 'true') return;
    event.stopImmediatePropagation();
    const previous = levels[index - 1];
    const name = level.querySelector('strong').textContent;
    const prerequisite = previous.querySelector('strong').textContent;
    const chapter = previous.querySelector('small').textContent;
    show(name, `先完成「${chapter} · ${prerequisite}」，即可解锁这一关。请按旅程顺序完成前面的关卡。`);
  }, true));
})();
