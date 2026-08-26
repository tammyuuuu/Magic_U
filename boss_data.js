/** Fixed Boss V1 questions. Answers and hints come from lessons 0-4. */
const BOSS_QUESTIONS = window.BOSS_QUESTIONS = [
  { id:'recognize-magician', type:'recognize', host:'先从简单的开始。', prompt:'哪一张是魔术师？', cards:[0,1,2], answer:'1', hint:'看看谁的面前摆着四件工具。', basis:'魔术师身份与牌面工具' },
  { id:'recognize-empress', type:'recognize', host:'先认认牌。', prompt:'哪一张是皇后？', cards:[2,3,4], answer:'3', hint:'找找成熟麦田与茂密森林。', basis:'皇后身份与自然环境' },
  { id:'element-fool-cliff', type:'element', host:'认得牌不算什么。看看这里。', prompt:'愚人画面里，什么最直接让你留意前方风险？', cardId:0, options:[['cliff','悬崖'],['dog','白色小狗'],['bundle','行囊'],['rose','白玫瑰']], answer:'cliff', hint:'看看他脚步将要靠近哪里。', basis:'愚人·悬崖观察与传统参考' },
  { id:'element-magician-tools', type:'element', host:'看看他已经有什么。', prompt:'魔术师画面里，什么最能表现“开始所需的条件已经在眼前”？', cardId:1, options:[['tools','桌上的工具'],['infinity','头顶符号'],['snake','腰间的蛇'],['flowers','花朵']], answer:'tools', hint:'看看桌面上摆着什么。', basis:'魔术师·四件工具传统参考' },
  { id:'element-priestess-scroll', type:'element', host:'有些东西没有完全显露。', prompt:'女祭司画面里，哪个细节像藏着尚未展开的知识？', cardId:2, options:[['scroll','半遮的卷轴'],['pillars','黑白柱子'],['moon','脚边月亮'],['veil','身后帷幕']], answer:'scroll', hint:'看看她手里拿着什么。', basis:'女祭司·半遮卷轴传统参考' },
  { id:'infer-priestess-pillars', type:'inference', host:'那你知道为什么吗？', prompt:'女祭司坐在黑白双柱之间，最容易让人想到什么？', cardId:2, options:[['balance','在相对的两面之间保持平衡'],['action','立刻采取行动'],['harvest','等待麦田成熟'],['risk','忽略眼前风险']], answer:'balance', hint:'她没有坐在任何一根柱子那边。', basis:'女祭司·黑白双柱传统参考' },
  { id:'infer-empress-wheat', type:'inference', host:'再看看周围。', prompt:'皇后身前成熟的麦田，为什么会让人想到收获？', cardId:3, options:[['nurture','长期滋养已经有了结果'],['hidden','知识仍被隐藏'],['control','规则维持了秩序'],['unknown','她正走向未知']], answer:'nurture', hint:'成熟以前，需要一段生长和照料。', basis:'皇后·成熟麦田传统参考' },
  { id:'infer-emperor-armor', type:'inference', host:'别只看他的王座。', prompt:'皇帝坐着时仍穿着盔甲，这个细节更接近哪种理解？', cardId:4, options:[['discipline','保持纪律，随时准备面对挑战'],['comfort','享受柔软舒适的生活'],['intuition','安静倾听内在声音'],['possibility','不被过去经验束缚']], answer:'discipline', hint:'盔甲不是用来让人放松的。', basis:'皇帝·盔甲传统参考' },
  { id:'concept-fool-magician', type:'concept', host:'这几张，可别混了。', prompt:'哪一张更强调“已有条件，重要的是组织资源并付诸行动”？', options:[['0','愚人'],['1','魔术师'],['2','女祭司'],['3','皇后']], answer:'1', hint:'想想谁的桌上已经放齐了工具。', basis:'魔术师核心理解' },
  { id:'concept-priestess-emperor', type:'concept', host:'一个向内，一个建立秩序。', prompt:'哪一张更强调静下来，倾听尚未说出口的内在声音？', options:[['1','魔术师'],['2','女祭司'],['3','皇后'],['4','皇帝']], answer:'2', hint:'她安静地坐在黑白双柱之间。', basis:'女祭司核心理解' },
  { id:'scenario-magician-action', type:'scenario', host:'让牌走进现实看看。', prompt:'一个人已经具备技能和资源，现在需要把计划付诸行动。哪张牌最贴近？', options:[['0','愚人'],['1','魔术师'],['2','女祭司'],['4','皇帝']], answer:'1', hint:'哪张牌强调运用已有能力？', basis:'魔术师核心理解与最终理解' },
  { id:'scenario-emperor-order', type:'scenario', host:'最后，换个情境。', prompt:'一件事需要明确规则、责任和稳定执行。哪张牌最贴近？', options:[['0','愚人'],['2','女祭司'],['3','皇后'],['4','皇帝']], answer:'4', hint:'哪张牌最强调结构与秩序？', basis:'皇帝核心理解与最终理解' }
];
