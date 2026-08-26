/** Boss III fixed questions, based only on completed Major Arcana lessons 0-21. */
const BOSS_THREE_QUESTIONS = window.BOSS_THREE_QUESTIONS = [
  {id:'b3-recognize-justice',type:'recognize',host:'最后一段了。先认牌。',prompt:'哪一张是正义？',cards:[8,11,14],answer:'11',hint:'找一手持天秤、一手持剑的人。',basis:'正义身份'},
  {id:'b3-recognize-moon',type:'recognize',host:'这张不会太明亮。',prompt:'哪一张是月亮？',cards:[17,18,19],answer:'18',hint:'找狗、狼与从水中爬出的龙虾。',basis:'月亮身份'},
  {id:'b3-recognize-world',type:'recognize',host:'走到终点，也要认得。',prompt:'哪一张是世界？',cards:[10,20,21],answer:'21',hint:'找被椭圆桂冠环绕的舞者。',basis:'世界身份'},
  {id:'b3-element-hanged-halo',type:'element',host:'倒过来看，也别漏掉细节。',prompt:'倒吊人画面里，什么表现等待可能带来新的理解？',cardId:12,options:[['halo','头部光环'],['rope','脚上的绳子'],['tree','木架'],['tunic','蓝色上衣']],answer:'halo',hint:'看看他的头部周围。',basis:'倒吊人·光环'},
  {id:'b3-element-death-sunrise',type:'element',host:'结束不只一种颜色。',prompt:'死神画面里，什么最直接提示结束之后仍有新阶段？',cardId:13,options:[['sunrise','两塔间的朝阳'],['horse','白马'],['king','倒地国王'],['armor','黑色盔甲']],answer:'sunrise',hint:'看画面最远处。',basis:'死神·朝阳'},
  {id:'b3-element-star-water',type:'element',host:'风暴之后，水还在流。',prompt:'星星画面里，两个水壶同时滋养了哪里？',cardId:17,options:[['both','池塘与土地'],['sky','天空与星星'],['tree','树与鸟'],['mountain','远山与道路']],answer:'both',hint:'看两股水流落下的位置。',basis:'星星·生命之水'},
  {id:'b3-element-judgement-coffins',type:'element',host:'听见号角以后呢？',prompt:'审判画面里，人们从什么地方站起，表现摆脱旧模式？',cardId:20,options:[['coffins','棺材'],['mountains','雪山'],['cloud','云层'],['flag','旗帜']],answer:'coffins',hint:'看人物脚下。',basis:'审判·棺材'},
  {id:'b3-infer-temperance-cups',type:'inference',host:'别急着只选一边。',prompt:'节制让水在两个杯子之间流动，为什么更接近“调和”而不是“舍弃”？',cardId:14,options:[['exchange','两边通过交流找到合适比例'],['empty','两个杯子最终都会倒空'],['victory','其中一边必须获胜'],['stop','水应该完全停止流动']],answer:'exchange',hint:'两个杯子都被保留了。',basis:'节制·调和'},
  {id:'b3-infer-devil-chain',type:'inference',host:'链子没有看起来那么紧。',prompt:'恶魔牌里的链圈很松，这最能说明什么？',cardId:15,options:[['choice','部分束缚来自执迷与“无法离开”的信念'],['sealed','两人永远不可能离开'],['law','他们必须服从正式规则'],['balance','他们正在衡量公平']],answer:'choice',hint:'链子其实可以自行摘下。',basis:'恶魔·宽松锁链'},
  {id:'b3-infer-tower-release',type:'inference',host:'崩塌也可能揭开什么。',prompt:'高塔的旧结构被闪电击破，为什么也可能带来“释放”？',cardId:16,options:[['prison','原本的安全结构也可能是一座牢笼'],['luck','闪电保证带来好运'],['control','人可以完全控制突变'],['return','一切会立刻回到原样']],answer:'prison',hint:'想想塔内空间是否真的自由。',basis:'高塔·崩塌与释放'},
  {id:'b3-infer-world-wreath',type:'inference',host:'完整，也要有边界。',prompt:'世界牌的桂冠既象征成功又围成清楚边界，这更接近哪种理解？',cardId:21,options:[['complete','一个阶段完整完成，人也能在边界中自由行动'],['trap','成功就是永远停在原地'],['loss','完成意味着一切被夺走'],['chance','结果只来自随机命运']],answer:'complete',hint:'舞者仍在桂冠中自由起舞。',basis:'世界·桂冠'},
  {id:'b3-concept-star-sun',type:'concept',host:'都有光，但不是同一种。',prompt:'哪一张更强调风暴之后保持内在信心、希望与宁静？',options:[['17','星星'],['18','月亮'],['19','太阳'],['20','审判']],answer:'17',hint:'它出现在高塔之后，以星光而非强烈日光照亮。',basis:'星星与太阳的区别'},
  {id:'b3-concept-moon-sun',type:'concept',host:'一张看不清，一张很清楚。',prompt:'哪一张更强调未知、隐晦信息与非理性恐惧？',options:[['16','高塔'],['17','星星'],['18','月亮'],['19','太阳']],answer:'18',hint:'哪张牌只有微弱光线照着未知小路？',basis:'月亮与太阳的区别'},
  {id:'b3-concept-death-world',type:'concept',host:'都是结束，感受不同。',prompt:'哪一张更强调一个阶段自然圆满，而不是不得不放下的结束？',options:[['12','倒吊人'],['13','死神'],['20','审判'],['21','世界']],answer:'21',hint:'找旅程完整抵达的那张牌。',basis:'死神与世界的区别'},
  {id:'b3-concept-justice-judgement',type:'concept',host:'两种判断，别混在一起。',prompt:'哪一张更强调在人生关键期回应召唤、离开旧模式并重新开始？',options:[['11','正义'],['14','节制'],['19','太阳'],['20','审判']],answer:'20',hint:'谁在号角声中从棺材站起？',basis:'正义与审判的区别'},
  {id:'b3-scenario-hanged',type:'scenario',host:'有时不动，也是一种选择。',prompt:'一个人暂时停止硬推，愿意换个角度重新理解困局。哪张牌最贴近？',options:[['11','正义'],['12','倒吊人'],['14','节制'],['16','高塔']],answer:'12',hint:'哪张牌以倒置姿态观看世界？',basis:'倒吊人现实应用'},
  {id:'b3-scenario-star',type:'scenario',host:'风暴过去以后。',prompt:'经历剧变后，一个人开始恢复信心，让生活慢慢重新流动。哪张牌最贴近？',options:[['13','死神'],['16','高塔'],['17','星星'],['19','太阳']],answer:'17',hint:'哪张牌代表危机之后的宁静与疗愈？',basis:'星星现实应用'},
  {id:'b3-scenario-moon',type:'scenario',host:'看不清时，先辨认恐惧。',prompt:'前方信息不足，一个人被想象和不安放大了未知风险。哪张牌最贴近？',options:[['15','恶魔'],['17','星星'],['18','月亮'],['20','审判']],answer:'18',hint:'哪张牌只有月光照着未知道路？',basis:'月亮现实应用'},
  {id:'b3-scenario-judgement',type:'scenario',host:'那道声音一直没有消失。',prompt:'一个人来到关键转折，终于决定回应长期存在的内心召唤。哪张牌最贴近？',options:[['11','正义'],['18','月亮'],['20','审判'],['21','世界']],answer:'20',hint:'哪张牌的号角召唤人们进入新阶段？',basis:'审判现实应用'},
  {id:'b3-scenario-world',type:'scenario',host:'最后一步。',prompt:'长期目标自然完成，各部分已经整合，也准备进入下一段。哪张牌最贴近？',options:[['10','命运之轮'],['13','死神'],['19','太阳'],['21','世界']],answer:'21',hint:'哪张牌是愚人旅程的完整终点？',basis:'世界现实应用'}
];
