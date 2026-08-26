/** Boss II fixed questions, based only on completed lessons 0-10. */
const BOSS_TWO_QUESTIONS = window.BOSS_TWO_QUESTIONS = [
  {id:'b2-recognize-chariot',type:'recognize',host:'又见面了。先认牌。',prompt:'哪一张是战车？',cards:[6,7,8],answer:'7',hint:'找找由黑白两只兽拉动的车。',basis:'战车身份与黑白两兽'},
  {id:'b2-recognize-hermit',type:'recognize',host:'这张应该见过。',prompt:'哪一张是隐者？',cards:[5,9,10],answer:'9',hint:'谁独自在雪山上举着灯？',basis:'隐者身份与灯'},
  {id:'b2-recognize-wheel',type:'recognize',host:'没有人物的那张。',prompt:'哪一张是命运之轮？',cards:[0,7,10],answer:'10',hint:'找画面中央巨大的轮盘。',basis:'命运之轮身份与轮盘'},
  {id:'b2-element-hierophant-keys',type:'element',host:'看看他面前。',prompt:'教皇画面里，什么被理解为开启智慧之门？',cardId:5,options:[['keys','交叉钥匙'],['crown','三层皇冠'],['followers','两位信众'],['staff','权杖']],answer:'keys',hint:'它们放在教皇脚前。',basis:'教皇·交叉钥匙传统参考'},
  {id:'b2-element-lovers-gaze',type:'element',host:'关系藏在方向里。',prompt:'恋人画面里，什么表现意识、感受与更高理解之间的传导？',cardId:6,options:[['gazes','人物的视线'],['snake','树上的蛇'],['mountain','中间的山'],['trees','两棵树']],answer:'gazes',hint:'看看男人和女人分别望向哪里。',basis:'恋人·视线方向传统参考'},
  {id:'b2-element-hermit-lantern',type:'element',host:'黑暗里，总得看见什么。',prompt:'隐者画面里，什么既照亮自己也能指引别人？',cardId:9,options:[['lantern','举起的灯'],['staff','手杖'],['cloak','灰色斗篷'],['mountain','冰雪山巅']],answer:'lantern',hint:'他把它高高举起。',basis:'隐者·真理之灯传统参考'},
  {id:'b2-element-magician-tools',type:'element',host:'前面的牌也别忘了。',prompt:'魔术师用什么画面说明“条件已经在眼前”？',cardId:1,options:[['tools','桌上四件工具'],['hands','双手姿势'],['snake','腰间的蛇'],['flowers','花朵']],answer:'tools',hint:'看看桌面。',basis:'魔术师·四件工具'},
  {id:'b2-infer-chariot-reins',type:'inference',host:'前进不只靠车。',prompt:'战士没有缰绳却要协调两只兽，这更强调什么？',cardId:7,options:[['will','意志与自我控制'],['chance','等待运气改变'],['tradition','服从传统规则'],['nurture','耐心滋养结果']],answer:'will',hint:'他需要让两个方向朝同一目标。',basis:'战车·无缰绳传统参考'},
  {id:'b2-infer-strength-hands',type:'inference',host:'别把力量只看成蛮力。',prompt:'女人轻触狮口而不是攻击它，为什么会让人想到“以柔克刚”？',cardId:8,options:[['guide','她以耐心引导而非强制压抑'],['escape','她准备逃离狮子'],['rule','她在宣布社会规范'],['luck','她等待好运发生']],answer:'guide',hint:'看她的手，也看看狮子的姿态。',basis:'力量·轻触狮口传统参考'},
  {id:'b2-infer-wheel-motion',type:'inference',host:'轮子两边都看看。',prompt:'蛇下降、另一只动物上升，这组关系最能说明什么？',cardId:10,options:[['cycle','变化同时包含上升与下降'],['victory','只有胜利一个方向'],['stillness','事情应该保持不动'],['choice','两个人正在作出选择']],answer:'cycle',hint:'它们随着同一个轮子向相反方向移动。',basis:'命运之轮·上下运动'},
  {id:'b2-infer-fool-bundle',type:'inference',host:'第一张牌，还记得吧。',prompt:'愚人的小行囊为什么不等于“毫无经验”？',cardId:0,options:[['experience','他带着经验，却没有被过去完全控制'],['empty','行囊里一定什么都没有'],['authority','行囊代表正式权威'],['control','行囊用于控制小狗']],answer:'experience',hint:'东西不多，不代表没有带着过去。',basis:'愚人·行囊传统参考'},
  {id:'b2-concept-lovers-chariot',type:'concept',host:'选择之后呢？',prompt:'哪一张更强调作出选择后，以意志采取实际行动？',options:[['6','恋人'],['7','战车'],['8','力量'],['9','隐者']],answer:'7',hint:'恋人面对选择，下一张牌开始推动它。',basis:'战车与恋人的区别'},
  {id:'b2-concept-emperor-hierophant',type:'concept',host:'两种权威，别混了。',prompt:'哪一张更强调传统教育、道德规范与专业指引？',options:[['4','皇帝'],['5','教皇'],['7','战车'],['9','隐者']],answer:'5',hint:'想想谁面前站着两位信众。',basis:'教皇与皇帝的区别'},
  {id:'b2-concept-priestess-hermit',type:'concept',host:'都安静，但不一样。',prompt:'哪一张更强调暂时离开人群，通过独处内省寻找答案？',options:[['2','女祭司'],['5','教皇'],['8','力量'],['9','隐者']],answer:'9',hint:'谁独自站在冰雪山巅？',basis:'隐者核心理解'},
  {id:'b2-concept-fool-wheel',type:'concept',host:'都可能走向未知。',prompt:'哪一张更强调个人难以控制的循环与转变？',options:[['0','愚人'],['6','恋人'],['7','战车'],['10','命运之轮']],answer:'10',hint:'哪张牌的中心是不停转动的轮子？',basis:'命运之轮核心理解'},
  {id:'b2-scenario-hierophant',type:'scenario',host:'放进现实里看看。',prompt:'面对专业问题，一个人决定向可靠长者或专业人士请教。哪张牌最贴近？',options:[['1','魔术师'],['5','教皇'],['7','战车'],['9','隐者']],answer:'5',hint:'哪张牌强调正式传承与专业建议？',basis:'教皇现实应用'},
  {id:'b2-scenario-lovers',type:'scenario',host:'这次不是只谈爱情。',prompt:'一个选择会长期影响生活，而且必须依据真正重视的价值作决定。哪张牌最贴近？',options:[['0','愚人'],['6','恋人'],['7','战车'],['10','命运之轮']],answer:'6',hint:'哪张牌同时讨论结合、价值与重大选择？',basis:'恋人核心理解'},
  {id:'b2-scenario-strength',type:'scenario',host:'硬碰硬未必有用。',prompt:'面对强烈情绪，一个人需要耐心理解并温和引导，而不是压制。哪张牌最贴近？',options:[['4','皇帝'],['7','战车'],['8','力量'],['9','隐者']],answer:'8',hint:'想想女人如何面对狮子。',basis:'力量核心理解'},
  {id:'b2-scenario-empress',type:'scenario',host:'前面的理解也要带着。',prompt:'一个作品需要持续照料和生长空间，才能等到成熟。哪张牌最贴近？',options:[['1','魔术师'],['3','皇后'],['5','教皇'],['10','命运之轮']],answer:'3',hint:'哪张牌周围有成熟麦田与流水？',basis:'皇后核心理解'}
];
