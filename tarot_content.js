/**
 * Magic_U guided-learning content, separate from tarot identity data.
 * Only cardId 0 (The Fool), cardId 1 (The Magician), and cardId 2
 * (The High Priestess), cardId 3 (The Empress), and cardId 4
 * (The Emperor) are implemented.
 * Source basis: confirmed Magic_U research drafts for those cards.
 */
const TAROT_CONTENT = window.TAROT_CONTENT = {
  0: {
    cardId: 0,

    observationPrompt: '第一眼，你注意到了什么？',
    observationHint: '选择 1～3 个真正吸引你的细节',
    observationOptions: [
      { id: 'figure', label: '画面中的人' },
      { id: 'clothes', label: '鲜艳的衣服' },
      { id: 'dog', label: '白色小狗' },
      { id: 'cliff', label: '悬崖' },
      { id: 'gaze', label: '他的视线' },
      { id: 'posture', label: '他的姿态' },
      { id: 'whole', label: '整体画面' },
      { id: 'sun', label: '太阳' },
      { id: 'bundle', label: '行囊' },
      { id: 'wand', label: '权杖' },
      { id: 'mountains', label: '远方的山' },
      { id: 'rose', label: '白玫瑰' },
      { id: 'other', label: '我注意到了别的', allowsText: true },
      { id: 'unsure', label: '我说不上来' }
    ],

    followUps: {
      figure: {
        question: '你觉得画面中的人正处在怎样的状态？',
        options: ['他很放松', '他充满期待', '他没有留意周围']
      },
      clothes: {
        question: '这些颜色让这个人给你什么感觉？',
        options: ['明亮活泼', '轻松自在', '很有生命力', '有点混乱'],
        customLabel: '我有别的感觉'
      },
      dog: {
        question: '你觉得它是在提醒他、陪着他，还是在做别的事？',
        options: ['它在提醒他', '它在陪着他', '它也想一起向前']
      },
      cliff: {
        question: '你觉得他注意到前面的边缘了吗？',
        options: ['他注意到了', '他可能没注意', '他注意到了，但并不害怕']
      },
      rose: {
        question: '他为什么会在出发时拿着这朵花？',
        options: ['它对他很重要', '它让旅程显得轻松', '他只是随手拿着']
      },
      bundle: {
        question: '你觉得这个小小的行囊里会装着什么？',
        options: ['旅程需要的东西', '他的过去', '很少的行李']
      },
      wand: {
        question: '你觉得他为什么这样拿着它？',
        options: ['为了带着行囊', '他拿得很随意', '它让他保持平衡']
      },
      mountains: {
        question: '远方对他来说更像什么？',
        options: ['想去的地方', '还不知道的旅程', '已经走过的路']
      },
      sun: {
        question: '太阳让这个画面发生了什么变化？',
        options: ['画面更明亮', '旅程更温暖', '危险没那么明显']
      },
      gaze: {
        question: '他为什么看向那里，而不是脚下？',
        options: ['他在看远方', '他相信前面的路', '他没有留意脚下']
      },
      posture: {
        question: '如果你模仿他的姿态，你会有什么感觉？',
        options: ['放松', '自信', '没有防备']
      },
      whole: {
        question: '如果这是一段故事，你觉得下一刻会发生什么？',
        options: ['他会继续向前', '小狗会叫住他', '他会停下来看看']
      },
      other: {
        question: '你注意到的那个细节，让你想到了什么？',
        options: ['它吸引了我', '它让我好奇', '它改变了整体感觉']
      },
      unsure: {
        question: '说不上来也没关系。再看一眼，什么最先抓住你的目光？',
        options: ['人物', '小狗', '明亮的天空', '悬崖']
      }
    },

    feelingPrompt: '如果先不考虑牌义，这张牌给你什么感觉？',
    feelingOptions: ['自由', '期待', '冒险', '天真', '危险', '不确定', '无所畏惧'],

    review: {
      title: '刚才，你是这样看这张牌的。',
      note: '这不是答案，只是你此刻真实看见和感受到的。'
    },

    traditionalReference: {
      invitation: '现在，再看看传统是怎样理解它的。',
      core: '传统里，愚人常常与走向未知有关。',
      coreDetail: '他带着经验，却没有被经验束缚。他愿意向前，也可能没有看见眼前的风险。',
      keywords: ['未知', '自由', '可能性'],
      imageConnections: [
        { id: 'number', label: '数字 0', text: '空白、未被限定，也包含尚未展开的可能。', directions: ['尚未限定', '仍有可能'] },
        { id: 'cliff', label: '悬崖', text: '他面向未知，却没有把注意力放在眼前的风险上。', directions: ['愿意向前', '忽略风险'] },
        { id: 'dog', label: '小狗', text: '既可以被理解为提醒，也可以像陪伴他一起前进。', directions: ['提醒', '陪伴'] },
        { id: 'bundle', label: '行囊', text: '他并非没有经验，只是没有让过去完全控制自己的下一步。', directions: ['带着经验', '不被过去束缚'] }
      ],
      framing: '传统通常这样理解。它是一份参考，不是对你刚才观察的纠正。'
    },

    upright: {
      label: '正位',
      text: '面对未知、凭本能与当下感受向前。其中既有自由、开放和潜力，也有结果尚未确定的一面。'
    },
    reversed: {
      label: '逆位',
      text: '逆位不是正位的简单反义。愚人的能量可能表现得过多，也可能表现得不足。'
    },
    reversalExcess: {
      label: '过度',
      title: '走得太快',
      term: '能量过度',
      text: '太敢往前，可能变成鲁莽、粗心或忽略后果。'
    },
    reversalDeficiency: {
      label: '不足',
      title: '不敢迈步',
      term: '能量不足',
      text: '太不敢往前，可能因为害怕风险而错失机会。'
    },
    reversalNote: '逆位不是正位的反义，而是这股能量可能表现得过多或不足。',

    interpretationPrompt: '此刻，你更接近哪种理解？',
    interpretationHint: '选择 1～2 个与你此刻想法接近的句子',
    interpretationOptions: [
      '即使不知道前面会发生什么，也可以先走出去',
      '自由和冒险很吸引人，但也需要留意风险',
      '有时候过去的经验，不一定要决定下一步',
      '出发并不等于毫无准备，也可以带着经验继续向前'
    ],
    finalPrompt: '写下我自己的理解',
    finalPlaceholder: '用一句自己的话，写下你现在的理解……',
    completion: {
      title: '你刚刚已经完成了第一次解牌。',
      text: '你先观察画面，形成自己的感觉，再与传统参考对照。这就是认识塔罗的一种开始。'
    }
  },

  1: {
    cardId: 1,
    observationPrompt: '第一眼，你注意到了什么？',
    observationHint: '选择 1～3 个真正吸引你的细节',
    observationOptions: [
      { id: 'hands', label: '双手的动作' },
      { id: 'tools', label: '桌上的工具' },
      { id: 'clothes', label: '鲜艳的衣服' },
      { id: 'infinity', label: '头顶的符号' },
      { id: 'snake', label: '腰间的蛇' },
      { id: 'flowers', label: '花朵' },
      { id: 'other', label: '我注意到了别的', allowsText: true },
      { id: 'unsure', label: '我说不上来' }
    ],
    followUps: {
      hands: { question: '这个动作让你觉得他正在做什么？', options: ['引导某种力量', '连接两个方向', '像在展示自己正在做的事'], customLabel: '我有自己的想法' },
      tools: { question: '你觉得这些东西为什么都摆在他面前？', options: ['他已经准备好了', '他正在考虑怎样使用它们', '他想展示自己拥有的东西'], customLabel: '我有自己的想法' },
      clothes: { question: '这件鲜艳的衣服让他看起来怎样？', options: ['主动', '热情', '自信', '很引人注意'], customLabel: '我有别的感觉' },
      infinity: { question: '这个符号让你想到什么？', options: ['没有尽头', '有很多可能', '我只是注意到了它'], customLabel: '我有自己的理解' },
      snake: { question: '这条蛇给你的第一感觉是什么？', options: ['智慧', '警觉', '危险', '神秘'], customLabel: '我有自己的理解' },
      flowers: { question: '这些花让整个画面多了什么感觉？', options: ['热情', '纯净', '生机', '装饰感'], customLabel: '我有别的感觉' },
      other: { question: '你注意到的那个细节，让你想到了什么？', options: ['它吸引了我', '它让我好奇', '它改变了整体感觉'] },
      unsure: { question: '说不上来也没关系。再看一眼，什么最先抓住你的目光？', options: ['人物的动作', '桌上的东西', '鲜艳的颜色', '头顶的符号'] }
    },
    feelingPrompt: '如果先不考虑牌义，这张牌给你什么感觉？',
    feelingOptions: ['自信', '专注', '主动', '有力量', '准备充分', '神秘', '有掌控感'],
    review: {
      title: '刚才，你是这样看这张牌的。',
      note: '你不仅看见了细节，也开始注意人物与眼前事物的关系。'
    },
    traditionalReference: {
      invitation: '现在，再看看传统是怎样理解它的。',
      core: '传统里，魔术师常常与运用已有能力、把想法变成现实有关。',
      coreDetail: '他面前的工具已经齐备。真正重要的，是怎样组织、引导并使用它们。',
      keywords: ['沟通', '技能', '创造', '行动'],
      imageConnections: [
        { id: 'hands', label: '双手姿势', text: '一手指天、一手指地，使他成为连接与引导能量的桥梁。' },
        { id: 'tools', label: '四件工具', text: '权杖、圣杯、宝剑与钱币都已齐备，代表开始所需的条件就在眼前。' },
        { id: 'number', label: '数字 1', text: '数字 1 是开始，也表现从抽象想法走向实际行动。' },
        { id: 'infinity', label: '无限符号', text: '头顶的倒 8 符号代表无限。' }
      ],
      framing: '传统是一份对照参考，不是对你刚才观察的纠正。'
    },
    upright: {
      label: '正位',
      text: '拥有可用的能力与条件，并愿意组织资源、表达想法、付诸行动。'
    },
    reversed: {
      label: '逆位',
      text: '能力并没有简单消失，它可能被用错，也可能无法顺利发挥。'
    },
    reversalExcess: {
      label: '误用',
      title: '用错能力',
      term: '能力误用',
      text: '有技巧，却把技巧用在不恰当的地方。误导、欺瞒，或把聪明用错方向。'
    },
    reversalDeficiency: {
      label: '受阻',
      title: '使不出能力',
      term: '难以发挥',
      text: '明明拥有一些资源，却无法组织、行动或发挥。可能缺乏信心或行动力。'
    },
    reversalNote: '能力可能被用错，也可能发挥不出来。',
    interpretationPrompt: '看过这些细节后，你觉得魔术师更像在提醒你什么？',
    interpretationHint: '选择 1～2 个与你此刻想法接近的句子',
    interpretationOptions: [
      '我已经拥有一些可以开始的条件',
      '想法需要通过行动，才能成为现实',
      '能力本身没有方向，重要的是怎样使用',
      '清楚表达，也是一种让事情发生的力量'
    ],
    finalPrompt: '写下我自己的理解',
    finalPlaceholder: '用一句自己的话，写下你现在的理解……',
    completion: {
      title: '你已经完成了第二关。',
      text: '你从画面中看见他如何面对手中的事物，也形成了自己对魔术师的理解。'
    }
  },

  2: {
    cardId: 2,
    observationPrompt: '第一眼，你注意到了什么？',
    observationHint: '选择 1～3 个真正吸引你的细节',
    observationOptions: [
      { id: 'figure', label: '端坐的女人' },
      { id: 'pillars', label: '黑白柱子' },
      { id: 'scroll', label: '手中的卷轴' },
      { id: 'crown', label: '头上的冠饰' },
      { id: 'moon', label: '脚边的月亮' },
      { id: 'veil', label: '身后的帷幕' },
      { id: 'other', label: '我注意到了别的', allowsText: true },
      { id: 'unsure', label: '我说不上来' }
    ],
    followUps: {
      figure: { question: '她安静地坐在那里，给你什么感觉？', options: ['她在等待', '她在思考', '她知道一些事', '她不想表露'], customLabel: '我有别的感觉' },
      pillars: { question: '你觉得她为什么坐在一黑一白之间？', options: ['她在保持平衡', '她在观察两边', '她不偏向任何一边', '只是环境的一部分'], customLabel: '我有自己的想法' },
      scroll: { question: '这份没有完全展开的卷轴，让你想到什么？', options: ['有些内容被藏起来了', '她已经读过它', '需要慢慢理解', '它对她很重要'], customLabel: '我有自己的想法' },
      crown: { question: '这个冠饰让她看起来像怎样的人？', options: ['庄重', '神秘', '很有智慧', '与月亮有关'], customLabel: '我有别的感觉' },
      moon: { question: '脚边的月亮让整个画面多了什么感觉？', options: ['安静', '神秘', '柔和', '像在夜里'], customLabel: '我有别的感觉' },
      veil: { question: '你觉得这道帷幕遮住了什么？', options: ['另一个空间', '她不愿展示的事', '更深的秘密', '只是远处的风景'], customLabel: '我有自己的想法' },
      other: { question: '你注意到的那个细节，让你想到了什么？', options: ['它吸引了我', '它让我好奇', '它让画面更神秘'] },
      unsure: { question: '说不上来也没关系。再看一眼，哪里最先抓住你的目光？', options: ['她的神情', '两根柱子', '手中的卷轴', '脚边的月亮'] }
    },
    feelingPrompt: '如果先不考虑牌义，这张牌给你什么感觉？',
    feelingOptions: ['安静', '神秘', '克制', '有智慧', '疏离', '沉稳', '像藏着秘密'],
    review: {
      title: '刚才，你是这样看这张牌的。',
      note: '你留意到的，也许不是一个行动，而是安静之下尚未说出的东西。'
    },
    traditionalReference: {
      invitation: '现在，再看看传统是怎样理解它的。',
      core: '传统里，女祭司常常与静下来、倾听内在的声音有关。',
      coreDetail: '她外表没有行动，却在向内倾听直觉。并不是所有答案，都要立刻向外寻找。',
      keywords: ['直觉', '智慧', '静默', '神秘'],
      imageConnections: [
        { id: 'pillars', label: '黑白双柱', text: '一黑一白象征相对的两面；她坐在中间，不偏向任何一边。' },
        { id: 'scroll', label: '半遮卷轴', text: '卷轴象征深奥的智慧，半遮的状态暗示其中内容并未完全显露。' },
        { id: 'moon', label: '月亮', text: '画面多次出现月亮，指向安静、内敛与直觉。' },
        { id: 'veil', label: '帷幕', text: '帷幕遮住后方的水与风景，像平静表面下仍藏着更深的内容。' }
      ],
      framing: '传统是一份对照参考，不是对你刚才观察的纠正。'
    },
    upright: {
      label: '正位',
      text: '暂时不急着行动，转向内心，倾听直觉与尚未说出口的感受。'
    },
    reversed: {
      label: '逆位',
      text: '原本的内在智慧可能被表面的热闹盖过，或被自己忽略。'
    },
    reversalExcess: {
      label: '表面',
      title: '只看见表面',
      term: '失去深度',
      text: '注意力停在表面知识或外界往来中，没有继续看见更深的内容。'
    },
    reversalDeficiency: {
      label: '忽视',
      title: '听不见内心',
      term: '忽视直觉',
      text: '心里已经隐约有所感受，却拒绝倾听，或不相信自己的内在声音。'
    },
    reversalNote: '安静没有消失，但内在的声音可能暂时被盖住了。',
    interpretationPrompt: '看过这些细节后，你觉得女祭司更像在提醒你什么？',
    interpretationHint: '选择 1～2 个与你此刻想法接近的句子',
    interpretationOptions: [
      '有些答案需要安静下来，才可能被听见',
      '没有立刻行动，不代表什么都没有发生',
      '表面没有显露的部分，也值得继续留意',
      '面对相反的声音，可以先不急着站到任何一边'
    ],
    finalPrompt: '写下我自己的理解',
    finalPlaceholder: '用一句自己的话，写下你现在的理解……',
    completion: {
      title: '你已经完成了第三关。',
      text: '你看见了安静画面里的细节，也开始辨认那些尚未说出口的感受。'
    }
  },

  3: {
    cardId: 3,
    observationPrompt: '第一眼，你注意到了什么？',
    observationHint: '选择 1～3 个真正吸引你的细节',
    observationOptions: [
      { id: 'figure', label: '坐着的女人' },
      { id: 'crown', label: '星星头冠' },
      { id: 'robe', label: '有图案的长袍' },
      { id: 'wheat', label: '成熟的麦田' },
      { id: 'forest', label: '茂密的森林' },
      { id: 'waterfall', label: '流动的瀑布' },
      { id: 'other', label: '我注意到了别的', allowsText: true },
      { id: 'unsure', label: '我说不上来' }
    ],
    followUps: {
      figure: { question: '她坐在这里的样子，让你觉得她正处于什么状态？', options: ['放松地享受', '安心地照看周围', '很有满足感', '在等待收获'], customLabel: '我有别的感觉' },
      crown: { question: '这顶布满星星的头冠，让她看起来像怎样的人？', options: ['与天空有联系', '很有地位', '华丽而醒目', '像掌管着什么'], customLabel: '我有自己的想法' },
      robe: { question: '长袍上的图案，让你想到什么？', options: ['果实与种子', '丰盛的生活', '柔软与舒适', '正在孕育什么'], customLabel: '我有自己的想法' },
      wheat: { question: '这片已经成熟的麦田，让你想到什么？', options: ['到了收获的时候', '有人长期照料过它', '周围十分丰盛', '新的生命正在生长'], customLabel: '我有自己的想法' },
      forest: { question: '茂密的森林让这个地方给你什么感觉？', options: ['生命力旺盛', '自然又舒适', '被环境包围', '适合休息和生长'], customLabel: '我有别的感觉' },
      waterfall: { question: '不断流动的水，让整个画面发生了什么变化？', options: ['画面更有生命力', '周围像被滋养着', '安静中有流动', '这里的资源很充足'], customLabel: '我有自己的想法' },
      other: { question: '你注意到的那个细节，让你想到了什么？', options: ['它让画面更丰盛', '它让我感到舒适', '它让我想到生长'] },
      unsure: { question: '说不上来也没关系。再看一眼，哪里最先抓住你的目光？', options: ['她的姿态', '星星头冠', '成熟麦田', '远处的瀑布'] }
    },
    feelingPrompt: '如果先不考虑牌义，这张牌给你什么感觉？',
    feelingOptions: ['温暖', '丰盛', '舒适', '有生命力', '被照顾', '热情', '满足'],
    review: {
      title: '刚才，你是这样看这张牌的。',
      note: '你看见的不只是一个人物，也看见了她与周围生命、生长和环境的关系。'
    },
    traditionalReference: {
      invitation: '现在，再看看传统是怎样理解它的。',
      core: '传统里，皇后常常与滋养生命、创造和收获有关。',
      coreDetail: '她大方表达爱与关怀。周围成熟的麦田与流动的水，也让生长变得具体可见。',
      keywords: ['滋养', '创造', '丰收', '关怀'],
      imageConnections: [
        { id: 'crown', label: '星星头冠', text: '十二颗星星对应十二星座与一年十二个月，让她与自然周期相连。' },
        { id: 'robe', label: '石榴长袍', text: '长袍上的石榴图案指向多产，也呼应孕育与新生命。' },
        { id: 'wheat', label: '成熟麦田', text: '成熟的麦田代表丰饶与收获，也暗示长期滋养已有了结果。' },
        { id: 'waterfall', label: '瀑布流水', text: '森林与流动的水表现旺盛生命力，像持续滋养周围的一切。' }
      ],
      framing: '传统是一份对照参考，不是对你刚才观察的纠正。'
    },
    upright: {
      label: '正位',
      text: '让关怀、创造与长期投入得到生长，并允许自己感受丰盛与喜悦。'
    },
    reversed: {
      label: '逆位',
      text: '感受与关怀可能受到阻碍，也可能扩张到失去理性的程度。'
    },
    reversalExcess: {
      label: '过度',
      title: '只凭感觉',
      term: '感性过度',
      text: '感受变得过于强烈，只凭一时情绪行动，理性的判断被挤到一旁。'
    },
    reversalDeficiency: {
      label: '受阻',
      title: '停止滋养',
      term: '情感受阻',
      text: '不再自由表达情感，也可能不愿付出关照，忽略自己或他人的需要。'
    },
    reversalNote: '滋养的力量可能太满，也可能无法顺利流动。',
    interpretationPrompt: '看过这些细节后，你觉得皇后更像在提醒你什么？',
    interpretationHint: '选择 1～2 个与你此刻想法接近的句子',
    interpretationOptions: [
      '持续照料一件事，才能等到它真正成熟',
      '创造不只是开始，也需要给它生长的空间',
      '关心别人时，也别忽略自己的感受和需要',
      '享受已经拥有的丰盛，也是一种接纳'
    ],
    finalPrompt: '写下我自己的理解',
    finalPlaceholder: '用一句自己的话，写下你现在的理解……',
    completion: {
      title: '你已经完成了第四关。',
      text: '你从人物与自然环境中看见了滋养、生长与收获，也形成了自己的理解。'
    }
  },

  4: {
    cardId: 4,
    observationPrompt: '第一眼，你注意到了什么？',
    observationHint: '选择 1～3 个真正吸引你的细节',
    observationOptions: [
      { id: 'figure', label: '端坐的男人' },
      { id: 'robe', label: '鲜红的长袍' },
      { id: 'armor', label: '袍子下的盔甲' },
      { id: 'objects', label: '双手拿的东西' },
      { id: 'throne', label: '公羊头王座' },
      { id: 'mountains', label: '身后的山脉' },
      { id: 'other', label: '我注意到了别的', allowsText: true },
      { id: 'unsure', label: '我说不上来' }
    ],
    followUps: {
      figure: { question: '他的坐姿和神情，让你觉得他正处于什么状态？', options: ['他很有把握', '他在掌控局面', '他保持警觉', '他不容易亲近'], customLabel: '我有别的感觉' },
      robe: { question: '鲜红的长袍，让这个人物给你什么感觉？', options: ['有行动力', '非常醒目', '充满力量', '带着压迫感'], customLabel: '我有别的感觉' },
      armor: { question: '他坐着时仍穿着盔甲，这让你想到什么？', options: ['他随时准备行动', '他非常自律', '他需要保护自己', '他没有真正放松'], customLabel: '我有自己的想法' },
      objects: { question: '他把这两件东西握在手里，给你什么感觉？', options: ['他拥有权力', '他在承担责任', '他需要维持秩序', '它们证明他的身份'], customLabel: '我有自己的想法' },
      throne: { question: '王座上的公羊头，让这个位置显得怎样？', options: ['坚固', '威严', '有攻击性', '属于强势的人'], customLabel: '我有别的感觉' },
      mountains: { question: '严峻的山脉，让他的处境看起来怎样？', options: ['前方并不轻松', '环境很坚硬', '他经历过困难', '这里缺少柔软与生机'], customLabel: '我有自己的想法' },
      other: { question: '你注意到的那个细节，让你想到了什么？', options: ['它表现出力量', '它让画面更严肃', '它让我想到规则'] },
      unsure: { question: '说不上来也没关系。再看一眼，哪里最先抓住你的目光？', options: ['他的坐姿', '红色长袍', '公羊头王座', '身后的山脉'] }
    },
    feelingPrompt: '如果先不考虑牌义，这张牌给你什么感觉？',
    feelingOptions: ['稳定', '威严', '有力量', '严肃', '可靠', '有压迫感', '难以亲近'],
    review: {
      title: '刚才，你是这样看这张牌的。',
      note: '你看见了他的力量，也开始留意这种力量如何维持秩序、承担责任或带来压力。'
    },
    traditionalReference: {
      invitation: '现在，再看看传统是怎样理解它的。',
      core: '传统里，皇帝常常与秩序、稳定、责任和权威有关。',
      coreDetail: '他用理性、纪律和明确规则维持局面。这样的力量可以保护，也可能形成控制。',
      keywords: ['秩序', '稳定', '责任', '权威'],
      imageConnections: [
        { id: 'armor', label: '盔甲', text: '袍子下仍穿着盔甲，表现严格纪律，也像随时准备面对挑战。' },
        { id: 'throne', label: '公羊王座', text: '四个公羊头对应牡羊座，强调勇敢、积极、自信与行动力。' },
        { id: 'mountains', label: '严峻山脉', text: '坚硬的山势象征前方并不轻松，也与皇后的丰饶背景形成对照。' },
        { id: 'number', label: '数字 4', text: '四号像桌子的四只脚，指向结构、秩序与稳定。' }
      ],
      framing: '传统是一份对照参考，不是对你刚才观察的纠正。'
    },
    upright: {
      label: '正位',
      text: '以纪律、责任与清楚规则稳定局面，并用理性和行动推动目标。'
    },
    reversed: {
      label: '逆位',
      text: '皇帝的力量可能被滥用，也可能因为缺乏责任与行动而无法建立秩序。'
    },
    reversalExcess: {
      label: '过度',
      title: '控制太多',
      term: '权力过度',
      text: '为了维持秩序而变得武断、冷酷，甚至滥用权力或过度控制他人。'
    },
    reversalDeficiency: {
      label: '不足',
      title: '撑不起局面',
      term: '力量不足',
      text: '缺乏责任感、信心或行动力，难以作出决定，也无法稳定地领导自己。'
    },
    reversalNote: '秩序可能变成控制，也可能因为缺少支撑而无法建立。',
    interpretationPrompt: '看过这些细节后，你觉得皇帝更像在提醒你什么？',
    interpretationHint: '选择 1～2 个与你此刻想法接近的句子',
    interpretationOptions: [
      '清楚的规则，可以让事情更稳定地向前',
      '承担责任，也意味着愿意作出决定',
      '力量可以用来保护，也可能变成对别人的控制',
      '真正的自律，是让自己能够长期坚持目标'
    ],
    finalPrompt: '写下我自己的理解',
    finalPlaceholder: '用一句自己的话，写下你现在的理解……',
    completion: {
      title: '你已经完成了第五关。',
      text: '你看见了秩序与权威如何形成，也辨认了力量、责任和控制之间的差别。'
    }
  },
  5: {
    cardId:5, observationPrompt:'第一眼，你注意到了什么？', observationHint:'选择 1～3 个真正吸引你的细节',
    observationOptions:[{id:'figure',label:'中央的人物'},{id:'gesture',label:'举起的右手'},{id:'crown',label:'三层皇冠'},{id:'keys',label:'交叉的钥匙'},{id:'followers',label:'前方两个人'},{id:'staff',label:'手中的权杖'},{id:'other',label:'我注意到了别的',allowsText:true},{id:'unsure',label:'我说不上来'}],
    followUps:{
      figure:{question:'中央人物与前方两个人，像是什么关系？',options:['老师与学生','主持仪式的人与参与者','有权威的人与听从者','他们属于同一个群体'],customLabel:'我有自己的想法'},
      gesture:{question:'他举起这只手，像在做什么？',options:['给予祝福','正在教导','要求大家安静','表达某种规则'],customLabel:'我有自己的想法'},
      crown:{question:'三层皇冠让这个人物显得怎样？',options:['很有地位','承担多层责任','庄重而正式','与宗教仪式有关'],customLabel:'我有别的感觉'},
      keys:{question:'两把交叉的钥匙放在这里，让你想到什么？',options:['开启一道门','连接两个方向','保管重要事物','某种正式资格'],customLabel:'我有自己的想法'},
      followers:{question:'前方两个人为什么面向中央人物？',options:['他们在学习','他们在接受指引','他们参加仪式','他们认同同一套规则'],customLabel:'我有自己的想法'},
      staff:{question:'这根权杖让他的角色更像什么？',options:['一位领袖','仪式主持者','知识传递者','规则的维护者'],customLabel:'我有别的感觉'},
      other:{question:'这个细节让你怎样理解画面中的关系？',options:['有人在传递知识','这里有明确秩序','他们属于一个群体']},
      unsure:{question:'再看一眼，哪个位置最先吸引你？',options:['中央人物','两位信众','交叉钥匙','举起的手']}
    },
    feelingPrompt:'如果先不考虑牌义，这张牌给你什么感觉？',feelingOptions:['庄重','可信赖','有秩序','受到指引','保守','正式','有距离感'],
    review:{title:'刚才，你是这样看这张牌的。',note:'你看见了人物之间如何传递知识、规则与认同。'},
    traditionalReference:{core:'传统里，教皇常常与传统、教育、社会规范和专业指引有关。',coreDetail:'他把群体认可的知识与价值传递给他人，也提醒人们何时可以寻求长者或专业人士帮助。',keywords:['传统','教育','指引','规范'],imageConnections:[{id:'gesture',label:'祝福手势',text:'举起的右手象征祝福，也表现他面向人群传递精神与道德指引。'},{id:'keys',label:'交叉钥匙',text:'一金一银的钥匙连接内外、阴阳，也被理解为开启智慧之门。'},{id:'followers',label:'两位信众',text:'他们面向教皇，表现有组织的教学、传承与群体认同。'},{id:'crown',label:'三层皇冠',text:'三层皇冠对应身、心、灵三个层次，强化他的正式权威。'}],framing:'传统是一份对照参考，不是对你刚才观察的纠正。'},
    upright:{label:'正位',text:'接受传统知识、专业帮助或群体规则，并从可靠传承中学习。'},reversed:{label:'逆位',text:'可能需要打破旧规范，也可能因过度保守而被错误建议限制。'},
    reversalExcess:{title:'困在传统里',term:'过度保守',text:'把既有规则看成唯一答案，变得武断、固执，难以接受不同做法。'},reversalDeficiency:{title:'离开旧规则',term:'打破传统',text:'此时不宜照搬常规，需要查证建议，并寻找更适合自己的方式。'},reversalNote:'传统可以提供支持，也可能在不合适时变成限制。',
    interpretationPrompt:'看过这些细节后，你觉得教皇更像在提醒你什么？',interpretationHint:'选择 1～2 个与你此刻想法接近的句子',interpretationOptions:['有些经验值得向可靠的人学习','群体规则能提供秩序，也需要被理解','接受建议以前，仍然可以判断它是否适合自己','传承不只是服从，也包含理解与实践'],finalPlaceholder:'用一句自己的话，写下你现在的理解……',completion:{title:'你已经完成了第六关。',text:'你看见了知识、规则与群体如何连接，也形成了自己对传统和指引的理解。'}
  },
  6: {
    cardId:6,observationPrompt:'第一眼，你注意到了什么？',observationHint:'选择 1～3 个真正吸引你的细节',
    observationOptions:[{id:'pair',label:'画面中的两个人'},{id:'gazes',label:'他们的视线'},{id:'angel',label:'上方的天使'},{id:'snake',label:'树上的蛇'},{id:'trees',label:'两棵不同的树'},{id:'mountain',label:'中间的山'},{id:'other',label:'我注意到了别的',allowsText:true},{id:'unsure',label:'我说不上来'}],
    followUps:{pair:{question:'这两个人站在一起，给你什么感觉？',options:['彼此坦诚','正在建立关系','既靠近又各自独立','面对共同选择'],customLabel:'我有别的感觉'},gazes:{question:'男人看向女人，女人看向天使，这种视线关系让你想到什么？',options:['感受在逐层传递','两个人关注的方向不同','他们在寻找更高的指引','沟通需要经过彼此'],customLabel:'我有自己的想法'},angel:{question:'上方的天使让两个人的相遇显得怎样？',options:['受到祝福','非常重要','不只是短暂相遇','像有共同信念'],customLabel:'我有别的感觉'},snake:{question:'树上的蛇让这段关系多了什么？',options:['诱惑','智慧','需要作出选择','潜藏的风险'],customLabel:'我有自己的想法'},trees:{question:'两个人身后的树并不相同，你觉得它们表达了什么？',options:['两个人各有自己的背景','理性与感受并存','两种生活方式','不同事物正在结合'],customLabel:'我有自己的想法'},mountain:{question:'两人中间的山让这段关系看起来怎样？',options:['需要跨越距离','存在共同目标','关系中有高峰','两边需要调和'],customLabel:'我有自己的想法'},other:{question:'这个细节让你想到怎样的关系？',options:['彼此吸引','需要沟通','正在作出重要选择']},unsure:{question:'再看一眼，什么最先抓住你的目光？',options:['两个人','上方天使','树上的蛇','他们的视线']}},
    feelingPrompt:'如果先不考虑牌义，这张牌给你什么感觉？',feelingOptions:['亲密','坦诚','被吸引','和谐','需要选择','有诱惑','关系很重要'],review:{title:'刚才，你是这样看这张牌的。',note:'你看见了两个人如何靠近，也留意到选择、沟通与价值观同时存在。'},
    traditionalReference:{core:'传统里，恋人常常与结合、沟通和重要选择有关。',coreDetail:'它既可以表现两个人的吸引与合作，也提醒选择往往建立在自己的价值观上。',keywords:['结合','沟通','选择','价值观'],imageConnections:[{id:'pair',label:'亚当与夏娃',text:'两人坦然站立，表现吸引、结合与没有隐藏的关系。'},{id:'gazes',label:'视线方向',text:'男人看女人、女人看天使，表现意识、感受与更高理解之间的传导。'},{id:'snake',label:'树上的蛇',text:'蛇可能象征智慧，也象征欲望与诱惑，让选择不再简单。'},{id:'trees',label:'两棵树',text:'两棵不同的树让两个个体、两种特质与结合同时出现在画面里。'}],framing:'传统是一份对照参考，不是对你刚才观察的纠正。'},
    upright:{label:'正位',text:'建立重要关系、沟通合作，并依据真正重视的价值作出选择。'},reversed:{label:'逆位',text:'关系可能失去协调，双方目标分开，也可能作出不适合自己的决定。'},reversalExcess:{title:'关系失去平衡',term:'分离对立',text:'沟通受阻、彼此目标不同，原本的结合可能走向对立或分开。'},reversalDeficiency:{title:'选错了方向',term:'错误选择',text:'被表面利益或诱惑牵引，没有依照真正重视的价值作决定。'},reversalNote:'逆位既可能发生在两个人之间，也可能发生在自己的选择里。',
    interpretationPrompt:'看过这些细节后，你觉得恋人更像在提醒你什么？',interpretationHint:'选择 1～2 个与你此刻想法接近的句子',interpretationOptions:['真正重要的选择，会反映我重视什么','靠近一个人，也需要清楚沟通','结合不是失去自己，而是让不同的部分合作','吸引很重要，但不能代替慎重选择'],finalPlaceholder:'用一句自己的话，写下你现在的理解……',completion:{title:'你已经完成了第七关。',text:'你看见了关系中的吸引、沟通和选择，也形成了自己的理解。'}
  },
  7: {
    cardId:7,observationPrompt:'第一眼，你注意到了什么？',observationHint:'选择 1～3 个真正吸引你的细节',observationOptions:[{id:'warrior',label:'战车上的人'},{id:'sphinxes',label:'黑白两只兽'},{id:'directions',label:'它们不同的方向'},{id:'noReins',label:'没有缰绳'},{id:'staff',label:'手中的权杖'},{id:'city',label:'身后的城市'},{id:'other',label:'我注意到了别的',allowsText:true},{id:'unsure',label:'我说不上来'}],
    followUps:{warrior:{question:'战士站在车上，让你觉得他准备怎样前进？',options:['坚定地向前','守住自己的位置','迎接竞争','控制整个局面'],customLabel:'我有别的感觉'},sphinxes:{question:'一黑一白两只兽同时拉车，让你想到什么？',options:['两股不同力量','严厉与慈悲','需要协调的方向','平衡才能前进'],customLabel:'我有自己的想法'},directions:{question:'两只兽朝向不同方向，战车还能前进需要什么？',options:['明确目标','强大意志','持续协调','不让力量分散'],customLabel:'我有自己的想法'},noReins:{question:'没有缰绳，他靠什么让战车前进？',options:['意志和专注','对目标的信心','自我控制','两只兽主动配合'],customLabel:'我有自己的想法'},staff:{question:'他紧握权杖的姿态给你什么感觉？',options:['很有决心','正在指挥','准备守护','一定要获胜'],customLabel:'我有别的感觉'},city:{question:'他把城市留在身后，这像是怎样的行动？',options:['离开熟悉环境','开始一段旅程','为了目标向前','守护城市外围'],customLabel:'我有自己的想法'},other:{question:'这个细节让战车的前进显得怎样？',options:['需要控制','充满竞争','目标明确']},unsure:{question:'再看一眼，哪里最先吸引你？',options:['战士','黑白两只兽','手中的权杖','身后的城市']}},
    feelingPrompt:'如果先不考虑牌义，这张牌给你什么感觉？',feelingOptions:['坚定','紧张','有冲劲','想要获胜','需要控制','充满挑战','正在前进'],review:{title:'刚才，你是这样看这张牌的。',note:'你看见了前进并不只靠速度，也依赖目标、协调与自我控制。'},
    traditionalReference:{core:'传统里，战车常常与意志、自律、竞争和向前推进有关。',coreDetail:'两只兽朝向不同方向，战士却没有缰绳；真正让战车前进的，是明确目标与强大意志。',keywords:['意志','自律','胜利','前进'],imageConnections:[{id:'sphinxes',label:'黑白两兽',text:'一黑一白代表不同力量；它们必须被协调，战车才不会分裂。'},{id:'noReins',label:'没有缰绳',text:'战士不用肉体控制，而以意志与专注驾驭两股力量。'},{id:'city',label:'身后城市',text:'他背对城市向前，也表现离开熟悉之处、展开旅程。'},{id:'staff',label:'权杖',text:'权杖象征意志与力量，呼应他对目标的决心。'}],framing:'传统是一份对照参考，不是对你刚才观察的纠正。'},
    upright:{label:'正位',text:'集中意志、保持自律，在竞争或挑战中持续推动目标。'},reversed:{label:'逆位',text:'前进的力量可能失控，野心与冲突也可能让努力偏离目标。'},reversalExcess:{title:'冲得太猛',term:'侵略鲁莽',text:'野心和速度压过判断，变得侵略、鲁莽，冲突反而阻碍前进。'},reversalDeficiency:{title:'失去控制',term:'失败受阻',text:'方向分散、意志动摇，无法驾驭局面，旅程或计划因此停顿。'},reversalNote:'战车的问题不只是快慢，而是能否让力量朝同一方向前进。',
    interpretationPrompt:'看过这些细节后，你觉得战车更像在提醒你什么？',interpretationHint:'选择 1～2 个与你此刻想法接近的句子',interpretationOptions:['目标清楚，才能让不同力量朝同一方向前进','真正的控制首先来自自律','面对竞争时，坚持比一时冲动更重要','向前也需要知道自己正在离开什么'],finalPlaceholder:'用一句自己的话，写下你现在的理解……',completion:{title:'你已经完成了第八关。',text:'你看见了意志如何协调不同力量，也形成了自己对前进与控制的理解。'}
  },
  8: {
    cardId:8,observationPrompt:'第一眼，你注意到了什么？',observationHint:'选择 1～3 个真正吸引你的细节',observationOptions:[{id:'pair',label:'女人与狮子'},{id:'hands',label:'她放在狮口的手'},{id:'lion',label:'狮子的姿态'},{id:'flowers',label:'花环与白衣'},{id:'infinity',label:'头顶的符号'},{id:'landscape',label:'平静的背景'},{id:'other',label:'我注意到了别的',allowsText:true},{id:'unsure',label:'我说不上来'}],
    followUps:{pair:{question:'女人靠近狮子的方式，让你觉得她怎样面对力量？',options:['温和地接近','没有逃避','相信自己能做到','先理解再引导'],customLabel:'我有自己的想法'},hands:{question:'她没有用力攻击，而是轻触狮口，这像什么？',options:['温柔地控制','耐心地安抚','阻止冲动伤人','让狮子愿意配合'],customLabel:'我有自己的想法'},lion:{question:'狮子的姿态看起来发生了什么变化？',options:['慢慢顺服','放下攻击性','信任这个女人','强大力量被安定'],customLabel:'我有别的感觉'},flowers:{question:'柔软的花环与凶猛狮子放在一起，让你想到什么？',options:['柔软也有力量','自然地建立联系','温和与野性并存','耐心胜过强迫'],customLabel:'我有自己的想法'},infinity:{question:'头顶符号让她的力量显得怎样？',options:['持续不断','来自内心','不靠蛮力','有更深的来源'],customLabel:'我有自己的想法'},landscape:{question:'平静背景与狮子形成怎样的对比？',options:['外静内强','危险被安抚','力量不一定喧闹','画面正在恢复平衡'],customLabel:'我有别的感觉'},other:{question:'这个细节让你怎样理解她的力量？',options:['温和','坚定','有耐心']},unsure:{question:'再看一眼，哪里最先吸引你？',options:['女人的双手','狮子的姿态','头顶符号','花环']}},
    feelingPrompt:'如果先不考虑牌义，这张牌给你什么感觉？',feelingOptions:['温柔','勇敢','平静','有耐心','信任','内心坚定','危险被安抚'],review:{title:'刚才，你是这样看这张牌的。',note:'你看见了力量不一定来自压制，也可能来自勇气、耐心和理解。'},
    traditionalReference:{core:'传统里，力量常常与勇气、信心、耐心和以柔克刚有关。',coreDetail:'女人没有用蛮力征服狮子，而是接近、理解并温和地驯服它。',keywords:['勇气','信心','耐心','柔性力量'],imageConnections:[{id:'hands',label:'轻触狮口',text:'她以温和方式合上狮口，表现引导而非强制压抑。'},{id:'lion',label:'顺服狮子',text:'狮子象征内在的冲动与本能；它的顺服表现这些力量被理解和安定。'},{id:'infinity',label:'无限符号',text:'与魔术师相同的倒 8 符号，让她的内在力量显得持续而深厚。'},{id:'flowers',label:'花环',text:'柔软花环连接女人与狮子，强化以柔克刚的画面关系。'}],framing:'传统是一份对照参考，不是对你刚才观察的纠正。'},
    upright:{label:'正位',text:'用勇气、信心与耐心面对冲动和恐惧，以柔和但坚定的方式行动。'},reversed:{label:'逆位',text:'可能失去勇气与自制，也可能把力量变成压迫或滥用。'},reversalExcess:{title:'让力量伤人',term:'力量滥用',text:'不再理解和引导，而用蛮力或权力压制，力量因此失去分寸。'},reversalDeficiency:{title:'被内心压倒',term:'信心消失',text:'恐惧、怀疑或冲动占据主导，失去耐心，也难以相信自己能够面对。'},reversalNote:'逆位时，力量可能压过别人，也可能无法安定自己。',
    interpretationPrompt:'看过这些细节后，你觉得力量更像在提醒你什么？',interpretationHint:'选择 1～2 个与你此刻想法接近的句子',interpretationOptions:['真正的勇敢，可以带着温柔','先理解内心的冲动，才可能安定它','耐心不是软弱，而是一种持续的力量','控制不一定靠压制，也可以靠信任和引导'],finalPlaceholder:'用一句自己的话，写下你现在的理解……',completion:{title:'你已经完成了第九关。',text:'你看见了柔和与勇气如何同时存在，也形成了自己对内在力量的理解。'}
  },
  9: {
    cardId:9,observationPrompt:'第一眼，你注意到了什么？',observationHint:'选择 1～3 个真正吸引你的细节',observationOptions:[{id:'figure',label:'独自站立的老人'},{id:'lantern',label:'举起的灯'},{id:'staff',label:'手中的杖'},{id:'gaze',label:'低下的视线'},{id:'cloak',label:'灰色斗篷'},{id:'mountain',label:'冰雪山巅'},{id:'other',label:'我注意到了别的',allowsText:true},{id:'unsure',label:'我说不上来'}],
    followUps:{figure:{question:'老人独自站在这里，让你觉得他为什么离开人群？',options:['需要安静思考','正在寻找答案','走了很远的路','选择独自前行'],customLabel:'我有自己的想法'},lantern:{question:'他为什么把灯举得这么高？',options:['为自己照路','让远处的人看见','展示已经找到的东西','指引后来的人'],customLabel:'我有自己的想法'},staff:{question:'这根杖在山顶上可能怎样帮助他？',options:['支持脚步','确认前方道路','让他走得谨慎','记录漫长旅程'],customLabel:'我有自己的想法'},gaze:{question:'他低头而不是看向远方，像在关注什么？',options:['脚下每一步','自己的内心','已经走过的路','需要认真思考的问题'],customLabel:'我有自己的想法'},cloak:{question:'灰色斗篷让他看起来怎样？',options:['不想引人注意','专注于内在','与周围融在一起','经历过许多事情'],customLabel:'我有别的感觉'},mountain:{question:'冰雪山顶让这段寻找显得怎样？',options:['孤独','艰难','已经到达高处','需要非常谨慎'],customLabel:'我有别的感觉'},other:{question:'这个细节让他的独处显得怎样？',options:['有目的','很谨慎','像在寻找智慧']},unsure:{question:'再看一眼，哪里最先吸引你？',options:['老人','灯','手杖','冰雪山顶']}},
    feelingPrompt:'如果先不考虑牌义，这张牌给你什么感觉？',feelingOptions:['孤独','安静','谨慎','寒冷','有智慧','正在寻找','像被指引'],review:{title:'刚才，你是这样看这张牌的。',note:'你看见了独处并不只是离开人群，也可能是为了内省、寻找和指引。'},
    traditionalReference:{core:'传统里，隐者常常与独处、内省、谨慎和指引有关。',coreDetail:'他暂时离开人群向内寻找答案，找到之后，又把灯举起为后来的人照路。',keywords:['独处','内省','谨慎','指引'],imageConnections:[{id:'lantern',label:'真理之灯',text:'灯中的六角星散发光芒，既照亮自己的路，也能指引山下的人。'},{id:'gaze',label:'低头沉思',text:'他不急着迈步，而是留意内心与脚下，表现谨慎和内省。'},{id:'mountain',label:'冰雪山巅',text:'高处杳无人烟，表现追寻智慧时必要的独处与艰难。'},{id:'staff',label:'手杖',text:'手杖支持他的脚步，帮助他在启蒙与寻找的道路上谨慎前行。'}],framing:'传统是一份对照参考，不是对你刚才观察的纠正。'},
    upright:{label:'正位',text:'暂时退出喧闹，谨慎地向内寻找答案，也可能接受有经验者的指引。'},reversed:{label:'逆位',text:'独处可能变成隔绝，也可能因失去谨慎而拒绝有价值的建议。'},reversalExcess:{title:'躲得太远',term:'孤独过度',text:'独处变成与人隔绝、我行我素，甚至不再承认关系与交流的价值。'},reversalDeficiency:{title:'不再谨慎',term:'粗心拒绝指引',text:'失去原有的细心，也听不进忠告，容易在没有想清楚时行动。'},reversalNote:'隐者会离开人群，但找到方向之后仍会举灯回来。',
    interpretationPrompt:'看过这些细节后，你觉得隐者更像在提醒你什么？',interpretationHint:'选择 1～2 个与你此刻想法接近的句子',interpretationOptions:['暂时独处，可以让我听清自己的答案','谨慎不是停滞，而是看清下一步','真正的经验不仅照亮自己，也能指引别人','向别人请教以前，也可以先认真向内寻找'],finalPlaceholder:'用一句自己的话，写下你现在的理解……',completion:{title:'你已经完成了第十关。',text:'你看见了独处、谨慎与指引之间的关系，也形成了自己的理解。'}
  },
  10: {
    cardId:10,observationPrompt:'第一眼，你注意到了什么？',observationHint:'选择 1～3 个真正吸引你的细节',observationOptions:[{id:'wheel',label:'中央的轮子'},{id:'snake',label:'向下的蛇'},{id:'rising',label:'托轮上升的动物'},{id:'sphinx',label:'轮顶的狮身人面兽'},{id:'corners',label:'四角的有翼生物'},{id:'sky',label:'深蓝色天空'},{id:'other',label:'我注意到了别的',allowsText:true},{id:'unsure',label:'我说不上来'}],
    followUps:{wheel:{question:'一个不停转动的轮子，让你想到什么？',options:['事情正在变化','高低位置会交换','某种循环','无法停在同一处'],customLabel:'我有自己的想法'},snake:{question:'蛇沿轮子向下，让你觉得它正经历什么？',options:['从高处下降','进入困难阶段','被变化带走','离开原来的位置'],customLabel:'我有自己的想法'},rising:{question:'另一只动物托着轮子向上，和蛇形成怎样的关系？',options:['一边下降一边上升','不同命运正在交换','变化有两个方向','轮子带来新的位置'],customLabel:'我有自己的想法'},sphinx:{question:'轮顶的生物稳稳坐着，让你想到什么？',options:['在变化中保持清醒','暂时处在高点','观察整个循环','用智慧面对变化'],customLabel:'我有自己的想法'},corners:{question:'四角生物都在看书，却没有被轮子带走，这给你什么感觉？',options:['变化中仍有稳定','它们在理解规律','四周保持秩序','它们等待轮子转动'],customLabel:'我有自己的想法'},sky:{question:'轮子悬在天空中，让变化显得怎样？',options:['超出个人控制','像命运在运转','范围很大','随时可能发生'],customLabel:'我有别的感觉'},other:{question:'这个细节让你怎样理解画面的变化？',options:['正在循环','无法预测','仍有某种规律']},unsure:{question:'再看一眼，哪里最先吸引你？',options:['中央轮子','向下的蛇','轮顶生物','四角生物']}},
    feelingPrompt:'如果先不考虑牌义，这张牌给你什么感觉？',feelingOptions:['正在变化','难以预测','有机会','不安','循环往复','超出控制','充满转机'],review:{title:'刚才，你是这样看这张牌的。',note:'你看见了上升、下降与稳定同时存在，也开始理解变化并不只朝一个方向。'},
    traditionalReference:{core:'传统里，命运之轮常常与转变、循环、契机和不可预测有关。',coreDetail:'轮子不断转动，高处与低处会交换。个人未必能控制变化，却仍可以辨认并把握机会。',keywords:['转变','循环','契机','进展'],imageConnections:[{id:'wheel',label:'三层轮盘',text:'轮盘由内到外连接创造、形成与物质世界，表现变化如何逐层发生。'},{id:'snake',label:'向下的蛇',text:'蛇随轮子下降，表现命运转动时位置与处境可能发生改变。'},{id:'rising',label:'上升动物',text:'它与下降的蛇相对，显示轮转同时包含上升与下降。'},{id:'sphinx',label:'轮顶生物',text:'它在轮顶持剑而坐，象征在持续变动中仍保持智慧与稳定。'}],framing:'传统是一份对照参考，不是对你刚才观察的纠正。'},
    upright:{label:'正位',text:'变化带来新的契机与进展；虽然并非全由自己控制，仍可以及时把握。'},reversed:{label:'逆位',text:'轮转可能进入低点，也可能因为拒绝变化或犹豫而错过机会。'},reversalExcess:{title:'拒绝轮子转动',term:'抗拒改变',text:'执着于原来的位置，不愿接受变化，反而更难找到适当对策。'},reversalDeficiency:{title:'错过转机',term:'无法把握',text:'机会出现时犹豫不决，或暂时经历停顿、失败与运势下降。'},reversalNote:'轮子不会永远停在低处，眼前的顺逆都只是循环的一部分。',
    interpretationPrompt:'看过这些细节后，你觉得命运之轮更像在提醒你什么？',interpretationHint:'选择 1～2 个与你此刻想法接近的句子',interpretationOptions:['变化不一定由我决定，但我可以决定怎样回应','高处和低处都不会永远持续','转机出现时，需要看见并把握它','无法预测不代表毫无规律可循'],finalPlaceholder:'用一句自己的话，写下你现在的理解……',completion:{title:'你已经完成了第十一关。',text:'你看见了轮转中的上升、下降与契机，也形成了自己面对变化的理解。'}
  },
  11:{cardId:11,observationPrompt:'第一眼，你注意到了什么？',observationHint:'选择 1～3 个真正吸引你的细节',observationOptions:[{id:'figure',label:'端坐的女人'},{id:'scales',label:'左手的天秤'},{id:'sword',label:'高举的宝剑'},{id:'foot',label:'踏出的右脚'},{id:'pillars',label:'两侧柱子'},{id:'curtain',label:'紫色帷幕'},{id:'other',label:'我注意到了别的',allowsText:true},{id:'unsure',label:'我说不上来'}],followUps:{figure:{question:'她的姿态让你觉得她正在做什么？',options:['认真判断','准备作出决定','保持公正','承担某种责任'],customLabel:'我有自己的想法'},scales:{question:'她为什么需要先看天秤？',options:['衡量两边','比较利弊','寻找平衡','确认是否公平'],customLabel:'我有自己的想法'},sword:{question:'天秤之后又高举宝剑，这个顺序像什么？',options:['衡量后作决定','看清后采取行动','用理性切开混乱','准备承担结果'],customLabel:'我有自己的想法'},foot:{question:'一只脚踏出、另一只仍藏着，给你什么感觉？',options:['思考后准备行动','仍在决定之中','谨慎地向前','平衡静止与行动'],customLabel:'我有别的感觉'},pillars:{question:'她坐在两根柱子中间，让你想到什么？',options:['不偏向任何一边','正反力量并存','保持中立','一个正式裁决空间'],customLabel:'我有自己的想法'},curtain:{question:'帷幕让她的判断显得怎样？',options:['背后仍有隐藏内容','需要更深智慧','不是只看表面','决定需要保留'],customLabel:'我有自己的想法'},other:{question:'这个细节让你怎样理解她的决定？',options:['需要衡量','必须诚实','要承担后果']},unsure:{question:'再看一眼，哪里最先吸引你？',options:['天秤','宝剑','踏出的脚','两侧柱子']}},feelingPrompt:'如果先不考虑牌义，这张牌给你什么感觉？',feelingOptions:['公正','严肃','理性','需要决定','平衡','有压力','不能逃避'],review:{title:'刚才，你是这样看这张牌的。',note:'你看见了衡量、决定与行动的顺序，也开始注意选择之后需要承担什么。'},traditionalReference:{core:'传统里，正义常常与衡量、决定、公平和责任有关。',coreDetail:'她先用天秤评估，再以宝剑作出决定；真正公正的选择不一定轻松，却需要诚实和承担。',keywords:['衡量','决定','公平','责任'],imageConnections:[{id:'scales',label:'金色天秤',text:'天秤表现评估与平衡，提醒人们仔细衡量各种因素。'},{id:'sword',label:'双刃宝剑',text:'宝剑不偏不倚，代表理性与决心；两面有刃也提醒选择会带来后果。'},{id:'foot',label:'踏出的右脚',text:'她并非永远静坐，衡量之后仍准备站起并承担行动。'},{id:'pillars',label:'两侧柱子',text:'两个柱子表现正反力量，她坐在中间追求不偏不倚。'}],framing:'传统是一份对照参考，不是对你刚才观察的纠正。'},upright:{label:'正位',text:'诚实评估利弊，作出尽量公平的决定，并承担选择带来的责任。'},reversed:{label:'逆位',text:'可能遭遇不公、偏见或欺瞒，也可能逃避决定和应负的责任。'},reversalExcess:{title:'判断失去公正',term:'偏见不公',text:'私心、偏见或隐瞒影响判断，使人受到不公平对待。'},reversalDeficiency:{title:'迟迟不作决定',term:'逃避责任',text:'在反复摇摆中拒绝选择，也不愿承担决定本应带来的责任。'},reversalNote:'逆位的问题可能来自不公的判断，也可能来自对决定的逃避。',interpretationPrompt:'看过这些细节后，你觉得正义更像在提醒你什么？',interpretationHint:'选择 1～2 个与你此刻想法接近的句子',interpretationOptions:['作决定以前，需要诚实衡量不同因素','公平不一定最轻松，却值得承担','选择一旦作出，也要接受它带来的责任','理性可以帮助我看穿表面的混乱'],finalPlaceholder:'用一句自己的话，写下你现在的理解……',completion:{title:'你已经完成了第十二关。',text:'你看见了衡量、决定与责任之间的关系，也形成了自己的理解。'}},
  12:{cardId:12,observationPrompt:'第一眼，你注意到了什么？',observationHint:'选择 1～3 个真正吸引你的细节',observationOptions:[{id:'upsideDown',label:'倒吊的姿态'},{id:'face',label:'平静的表情'},{id:'halo',label:'头边的光环'},{id:'legs',label:'交叉的双腿'},{id:'hands',label:'背在身后的手'},{id:'tree',label:'T 形的树'},{id:'other',label:'我注意到了别的',allowsText:true},{id:'unsure',label:'我说不上来'}],followUps:{upsideDown:{question:'倒过来看世界，可能会让他看见什么？',options:['与平常不同的角度','原来忽略的部分','事情的另一面','新的解决方式'],customLabel:'我有自己的想法'},face:{question:'他被吊着却没有挣扎，为什么看起来平静？',options:['他自愿停留','他理解等待的意义','他接受暂时无法行动','他的内心仍然自由'],customLabel:'我有自己的想法'},halo:{question:'头边的光让这段停顿显得怎样？',options:['等待带来理解','他正在获得智慧','牺牲有更深目的','外在受限但内在清醒'],customLabel:'我有自己的想法'},legs:{question:'交叉双腿形成特别形状，让他的姿态显得怎样？',options:['并非偶然受困','像主动选择的仪式','身体被固定但并不混乱','正在完成某种转化'],customLabel:'我有自己的想法'},hands:{question:'双手背在身后，没有试图挣脱，让你想到什么？',options:['暂时放手','停止无效挣扎','选择等待','以退为进'],customLabel:'我有自己的想法'},tree:{question:'他悬在树上而不是落地，让事情处于什么状态？',options:['暂时悬置','还没有结果','需要时间','不能照旧前进'],customLabel:'我有自己的想法'},other:{question:'这个细节让你怎样理解他的等待？',options:['有目的','并不被动','正在换角度']},unsure:{question:'再看一眼，哪里最先吸引你？',options:['倒吊姿态','平静表情','头边光环','交叉双腿']}},feelingPrompt:'如果先不考虑牌义，这张牌给你什么感觉？',feelingOptions:['平静','受限','需要等待','与众不同','像在牺牲','正在转变','内心自由'],review:{title:'刚才，你是这样看这张牌的。',note:'你看见了外在停顿与内在理解可以同时发生，也尝试从不同角度看同一件事。'},traditionalReference:{core:'传统里，倒吊人常常与自愿牺牲、等待和换个角度有关。',coreDetail:'他不挣扎，并非毫无选择；暂时放手、以退为进，可能让他获得原来角度看不见的理解。',keywords:['等待','牺牲','换角度','以退为进'],imageConnections:[{id:'upsideDown',label:'倒置姿态',text:'头下脚上的位置让他以不同角度看世界，提醒人们松开僵化视角。'},{id:'face',label:'平静表情',text:'他并非被迫受刑，而是理解并接受这段自愿的停顿。'},{id:'halo',label:'智慧光环',text:'光环表现牺牲与等待可能带来更高层次的理解。'},{id:'legs',label:'腿与身体',text:'双腿与身体形成炼金符号，指向低层欲望向更高理解的转化。'}],framing:'传统是一份对照参考，不是对你刚才观察的纠正。'},upright:{label:'正位',text:'暂时等待、放手或作出必要牺牲，以不同角度重新理解局面。'},reversed:{label:'逆位',text:'可能无法放手、徒然挣扎，也可能牺牲没有回报或受苦阶段正在结束。'},reversalExcess:{title:'困在无效牺牲里',term:'牺牲无回报',text:'持续付出和受苦，却没有带来理解或真正值得的结果。'},reversalDeficiency:{title:'怎么也放不下',term:'挣扎抗拒',text:'执着原来的角度，受到外界眼光限制，也拒绝接受必要的停顿。'},reversalNote:'逆位可能是停顿结束，也可能是仍未学会放手与换角度。',interpretationPrompt:'看过这些细节后，你觉得倒吊人更像在提醒你什么？',interpretationHint:'选择 1～2 个与你此刻想法接近的句子',interpretationOptions:['暂时不行动，也可能是在为理解留空间','换一个角度，原来的困局可能出现新样子','有些放手不是失去，而是为了获得更重要的东西','停止无效挣扎，可以让我重新看清选择'],finalPlaceholder:'用一句自己的话，写下你现在的理解……',completion:{title:'你已经完成了第十三关。',text:'你体验了用倒置视角重新观察，也形成了自己对等待与放手的理解。'}},
  13:{cardId:13,observationPrompt:'第一眼，你注意到了什么？',observationHint:'选择 1～3 个真正吸引你的细节',observationOptions:[{id:'rider',label:'骷髅骑士'},{id:'people',label:'地上的四个人'},{id:'flag',label:'黑色旗帜'},{id:'horse',label:'白马'},{id:'sunrise',label:'远方的朝阳'},{id:'river',label:'河流与小船'},{id:'other',label:'我注意到了别的',allowsText:true},{id:'unsure',label:'我说不上来'}],followUps:{rider:{question:'骷髅骑士不断向前，让你觉得什么无法被阻止？',options:['一个阶段的结束','不可避免的改变','旧事物被带走','所有人都要面对的过程'],customLabel:'我有自己的想法'},people:{question:'不同身份和年龄的人都在他面前，这说明什么？',options:['改变不挑选对象','每个人反应不同','权力无法阻止结束','所有人都要面对转变'],customLabel:'我有自己的想法'},flag:{question:'黑旗上的白花，让结束多了什么含义？',options:['结束中仍有新生','黑暗里保留生命','旧事物之后还有可能','改变并非只有失去'],customLabel:'我有自己的想法'},horse:{question:'白马与骷髅放在一起，给你怎样的对比？',options:['结束带来清空','纯净与死亡并存','一切可以重新开始','改变既冷酷又自然'],customLabel:'我有自己的想法'},sunrise:{question:'远方太阳正在升起，它让结局发生什么变化？',options:['结束不是最后终点','黑暗后仍有新阶段','未来正在出现','转变中包含希望'],customLabel:'我有自己的想法'},river:{question:'河流与小船让整个过程看起来怎样？',options:['生命仍在流动','正在穿越一个阶段','改变有自己的方向','旧事物被带向远方'],customLabel:'我有自己的想法'},other:{question:'这个细节让你怎样理解画面中的结束？',options:['不可避免','同时也是转变','为新阶段腾出空间']},unsure:{question:'再看一眼，哪里最先吸引你？',options:['骷髅骑士','黑色旗帜','远方朝阳','地上的人']}},feelingPrompt:'如果先不考虑牌义，这张牌给你什么感觉？',feelingOptions:['沉重','害怕','无法阻止','正在告别','彻底改变','空出来了','仍有新生'],review:{title:'刚才，你是这样看这张牌的。',note:'你看见了结束的不可避免，也留意到河流、白花与朝阳仍指向新的阶段。'},traditionalReference:{core:'传统里，死神主要与结束、转变和新生有关。',coreDetail:'它很少指向肉体死亡；更多时候，是关系、习惯或人生阶段必须结束，才能为新生活腾出空间。',keywords:['结束','转变','放下','新生'],imageConnections:[{id:'people',label:'四种人物',text:'国王、主教、女人和孩子反应不同，却都无法避开结束这一自然过程。'},{id:'flag',label:'黑旗白花',text:'黑暗旗帜上的白色花朵，让结束与随之而来的新生同时出现。'},{id:'sunrise',label:'两塔朝阳',text:'太阳在远方升起，明确提示结束不是一切的终点。'},{id:'river',label:'河流小船',text:'河流持续向前，表现生命与转变并未因眼前结束而停止。'}],framing:'传统是一份对照参考，不是对你刚才观察的纠正。'},upright:{label:'正位',text:'承认某个阶段已经结束，放下无法继续的部分，为新的生活腾出空间。'},reversed:{label:'逆位',text:'因为害怕改变而不肯放手，使本该发生的结束停滞并形成僵局。'},reversalExcess:{title:'用力抗拒结束',term:'激烈抗拒',text:'为了不让改变发生而采取激烈行动，使最后的结束变得更加痛苦。'},reversalDeficiency:{title:'停在过去',term:'无法放手',text:'沉溺旧阶段、拒绝展望未来，新的生活因此迟迟无法展开。'},reversalNote:'逆位不是取消结束，而是让必要的转变更难发生。',interpretationPrompt:'看过这些细节后，你觉得死神更像在提醒你什么？',interpretationHint:'选择 1～2 个与你此刻想法接近的句子',interpretationOptions:['承认结束，才能真正开始新的阶段','放不下过去，可能让改变停在原地','结束并不等于一切消失，它也会腾出空间','有些改变无法避免，我仍可以选择怎样面对'],finalPlaceholder:'用一句自己的话，写下你现在的理解……',completion:{title:'你已经完成了第十四关。',text:'你看见了结束与新生同时存在，也形成了自己面对转变的理解。'}},
  14:{cardId:14,observationPrompt:'第一眼，你注意到了什么？',observationHint:'选择 1～3 个真正吸引你的细节',observationOptions:[{id:'angel',label:'画面中的天使'},{id:'cups',label:'两个杯子'},{id:'water',label:'杯间流动的水'},{id:'feet',label:'一脚水中一脚岸上'},{id:'path',label:'通向远方的小路'},{id:'light',label:'山间的金色光'},{id:'other',label:'我注意到了别的',allowsText:true},{id:'unsure',label:'我说不上来'}],followUps:{angel:{question:'天使的动作看起来急促还是从容？',options:['非常从容','专注地调整','熟练地配合两边','正在保持平衡'],customLabel:'我有别的感觉'},cups:{question:'为什么需要两个杯子，而不是只留下一个？',options:['两种东西需要调和','彼此交换才能改变','两边都不能缺少','需要找到合适比例'],customLabel:'我有自己的想法'},water:{question:'水在两个杯子之间流动，让你想到什么？',options:['沟通与交流','不同事物正在融合','持续调整','让两边都得到补充'],customLabel:'我有自己的想法'},feet:{question:'一脚在水中、一脚在岸上，像在连接什么？',options:['感受与理性','内在与外在','两个不同环境','稳定与流动'],customLabel:'我有自己的想法'},path:{question:'远方小路让这个调和过程显得怎样？',options:['需要慢慢前进','正在通往目标','过程还有距离','平衡能打开道路'],customLabel:'我有自己的想法'},light:{question:'山间金光让旅程的方向看起来怎样？',options:['目标逐渐清楚','经历风暴后出现希望','调和带来出口','前方值得继续'],customLabel:'我有别的感觉'},other:{question:'这个细节让你怎样理解画面中的调和？',options:['需要交流','不能走极端','要持续调整']},unsure:{question:'再看一眼，哪里最先吸引你？',options:['两个杯子','流动的水','天使双脚','远方金光']}},feelingPrompt:'如果先不考虑牌义，这张牌给你什么感觉？',feelingOptions:['和谐','平静','正在调整','有耐心','流动','彼此沟通','逐渐恢复'],review:{title:'刚才，你是这样看这张牌的。',note:'你看见了两种不同事物并未互相排斥，而是在交流、调整和融合。'},traditionalReference:{core:'传统里，节制常常与中庸、调和、沟通和适应有关。',coreDetail:'天使让水在两个杯子间流动，不压抑任何一边，而是寻找恰到好处的比例。',keywords:['调和','沟通','适应','中庸'],imageConnections:[{id:'cups',label:'两个金杯',text:'两个杯子容纳不同能量，水的交换表现调和而非舍弃其中一方。'},{id:'water',label:'流动的水',text:'水在杯间顺畅交流，直接对应沟通、协调与融合。'},{id:'feet',label:'水与岸',text:'一脚在潜意识的水中、一脚在意识的岸上，表现两者之间的融合。'},{id:'path',label:'远方小路',text:'小路通向山间金光，表现经过调和之后逐渐出现的方向。'}],framing:'传统是一份对照参考，不是对你刚才观察的纠正。'},upright:{label:'正位',text:'保持弹性与沟通，把不同需求调和到合适比例，逐渐恢复顺畅。'},reversed:{label:'逆位',text:'失去中庸，容易走向极端、情绪化，也难以沟通、妥协或适应。'},reversalExcess:{title:'走向极端',term:'过度失衡',text:'某一边占据全部空间，行为失去分寸，甚至因过度而造成伤害。'},reversalDeficiency:{title:'水不再流动',term:'沟通不良',text:'拒绝交流和调整，彼此无法妥协，也难以适应正在发生的变化。'},reversalNote:'节制逆位的重点，是两边不再顺畅交流并失去合适比例。',interpretationPrompt:'看过这些细节后，你觉得节制更像在提醒你什么？',interpretationHint:'选择 1～2 个与你此刻想法接近的句子',interpretationOptions:['不同需求不一定冲突，也可以慢慢调和','沟通不是说服对方，而是让两边真正流动','适合的比例，比单纯追求更多更重要','保持弹性，可以让我在变化中找到平衡'],finalPlaceholder:'用一句自己的话，写下你现在的理解……',completion:{title:'你已经完成了第十五关。',text:'你看见了交流与调和如何发生，也形成了自己对平衡和适应的理解。'}},
  15:{cardId:15,observationPrompt:'第一眼，你注意到了什么？',observationHint:'选择 1～3 个真正吸引你的细节',observationOptions:[{id:'devil',label:'上方的恶魔'},{id:'pair',label:'下方两个人'},{id:'chains',label:'脖子上的锁链'},{id:'loose',label:'宽松的链圈'},{id:'tails',label:'两人的角与尾巴'},{id:'torch',label:'向下的火炬'},{id:'other',label:'我注意到了别的',allowsText:true},{id:'unsure',label:'我说不上来'}],followUps:{devil:{question:'恶魔高高坐着，让下方两个人显得怎样？',options:['被它控制','仰望某种力量','处在压迫之下','把权力交给了它'],customLabel:'我有自己的想法'},pair:{question:'这两个人与恋人牌中的人物很像，但发生了什么变化？',options:['坦诚变成束缚','关系失去自由','欲望盖过沟通','他们长出兽性特征'],customLabel:'我有自己的想法'},chains:{question:'锁链最先让你想到什么？',options:['无法离开','被关系束缚','沉迷某种事物','自己失去选择'],customLabel:'我有自己的想法'},loose:{question:'链圈其实很松，他们为什么没有摘下？',options:['没有发现自己能离开','舍不得放下欲望','已经习惯束缚','把自己想得无能为力'],customLabel:'我有自己的想法'},tails:{question:'两人的角与尾巴让他们看起来发生了什么？',options:['越来越像恶魔','本能与欲望显露','天赋被用错','逐渐失去原来的自己'],customLabel:'我有自己的想法'},torch:{question:'火炬朝下而不是照亮上方，像把注意力引向哪里？',options:['物质与感官','更深的欲望','眼前诱惑','精神上的黑暗'],customLabel:'我有自己的想法'},other:{question:'这个细节让你怎样理解他们的束缚？',options:['来自欲望','其实可以挣脱','已经形成沉迷']},unsure:{question:'再看一眼，哪里最先吸引你？',options:['恶魔','两个人','宽松锁链','向下火炬']}},feelingPrompt:'如果先不考虑牌义，这张牌给你什么感觉？',feelingOptions:['被束缚','诱惑','沉迷','压迫','难以离开','危险','其实还有选择'],review:{title:'刚才，你是这样看这张牌的。',note:'你不仅看见了束缚，也注意到锁链并没有想象中牢固，自由仍与看见真相有关。'},traditionalReference:{core:'传统里，恶魔常常与欲望、束缚、沉迷和物质执着有关。',coreDetail:'两人的锁链其实很松；真正的限制不全来自外界，也来自不愿放下的欲望和“我无法离开”的信念。',keywords:['欲望','束缚','沉迷','物质'],imageConnections:[{id:'chains',label:'脖子锁链',text:'锁链表现关系、欲望或习惯带来的限制，让人以为自己无处可逃。'},{id:'loose',label:'宽松链圈',text:'链圈足以自行摘下，说明束缚有一部分来自自己的执迷与选择。'},{id:'pair',label:'亚当与夏娃',text:'恋人牌中的人物在这里被束缚，坦诚结合变成受欲望控制的关系。'},{id:'tails',label:'角与尾巴',text:'两人显露兽性特征，表现本能与天赋被欲望牵引。'}],framing:'传统是一份对照参考，不是对你刚才观察的纠正。'},upright:{label:'正位',text:'欲望或物质追求形成束缚与沉迷，需要看见自己仍然拥有选择。'},reversed:{label:'逆位',text:'可能开始挣脱束缚、恢复自由，也可能以更极端方式满足欲望。'},reversalExcess:{title:'越陷越深',term:'更加沉沦',text:'为了满足欲望而不择手段，束缚变得更深，也更难看见完整真相。'},reversalDeficiency:{title:'摘下锁链',term:'脱离束缚',text:'开始放下执迷，看见限制并非不可改变，重新取得选择和自由。'},reversalNote:'恶魔逆位既可能是解脱，也可能是欲望走向更极端。',interpretationPrompt:'看过这些细节后，你觉得恶魔更像在提醒你什么？',interpretationHint:'选择 1～2 个与你此刻想法接近的句子',interpretationOptions:['有些束缚来自我以为自己没有选择','欲望本身并不可怕，失去分寸才会变成枷锁','明知不适合却无法离开，值得看见背后的执迷','自由的第一步，是承认那条锁链其实可以被摘下'],finalPlaceholder:'用一句自己的话，写下你现在的理解……',completion:{title:'你已经完成了第十六关。',text:'你看见了欲望怎样形成束缚，也辨认了锁链与选择之间的关系。'}},
  16:{cardId:16,observationPrompt:'第一眼，你注意到了什么？',observationHint:'选择 1～3 个真正吸引你的细节',observationOptions:[{id:'lightning',label:'击中高塔的闪电'},{id:'tower',label:'正在崩裂的塔'},{id:'crown',label:'坠落的王冠'},{id:'people',label:'从塔上跌落的人'},{id:'fire',label:'四散的火花'},{id:'dark',label:'黑暗的天空'},{id:'other',label:'我注意到了别的',allowsText:true},{id:'unsure',label:'我说不上来'}],followUps:{lightning:{question:'闪电突然击中，让这场变化显得怎样？',options:['毫无预警','来自外部','无法控制','像一道强烈讯息'],customLabel:'我有自己的想法'},tower:{question:'原本坚固的塔瞬间崩裂，让你想到什么？',options:['安全感被打破','旧结构无法继续','以为稳定的事并不稳固','需要彻底重建'],customLabel:'我有自己的想法'},crown:{question:'塔顶王冠被击落，它像是什么正在失去？',options:['原有成就','控制与地位','对物质的依赖','高高在上的信念'],customLabel:'我有自己的想法'},people:{question:'两个人头下脚上跌落，给你什么感觉？',options:['生活被突然翻转','他们被迫离开','原有位置无法维持','完全来不及准备'],customLabel:'我有别的感觉'},fire:{question:'四散火花让破坏显得怎样？',options:['影响扩散很快','旧结构彻底裂开','变化具有巨大能量','像有什么被突然揭示'],customLabel:'我有自己的想法'},dark:{question:'黑暗天空让这一刻带来什么气氛？',options:['危机','失去安全感','暂时看不见未来','事情非常沉重'],customLabel:'我有别的感觉'},other:{question:'这个细节让你怎样理解这次崩塌？',options:['无法预料','旧结构被打破','可能迫使人醒来']},unsure:{question:'再看一眼，哪里最先吸引你？',options:['闪电','崩裂高塔','跌落的人','塔顶王冠']}},feelingPrompt:'如果先不考虑牌义，这张牌给你什么感觉？',feelingOptions:['震惊','危险','失控','突然醒来','失去安全感','彻底改变','旧事物被打破'],review:{title:'刚才，你是这样看这张牌的。',note:'你看见了突发破坏带来的冲击，也开始留意被打破的结构原本是否真的安全。'},traditionalReference:{core:'传统里，高塔常常与突发剧变、破坏和强烈觉醒有关。',coreDetail:'闪电击碎原本坚固的结构，过程令人失去安全感，却也可能把人从狭窄牢笼和错误信念中释放。',keywords:['剧变','破坏','危机','觉醒'],imageConnections:[{id:'lightning',label:'突然闪电',text:'闪电来自外部且无法控制，表现突如其来的冲击与讯息。'},{id:'tower',label:'崩裂高塔',text:'看似稳固的物质结构瞬间瓦解，也揭示它原本像一座狭窄牢笼。'},{id:'crown',label:'坠落王冠',text:'王冠象征统治、成就与物质安全，它的坠落让旧有价值一并动摇。'},{id:'people',label:'跌落的人',text:'人物被迫离开原有位置，表现生活模式与安全感被突然翻转。'}],framing:'传统是一份对照参考，不是对你刚才观察的纠正。'},upright:{label:'正位',text:'外在变化突然打破旧结构与安全感，也迫使人看见原本忽略的真相。'},reversed:{label:'逆位',text:'冲击可能较缓或被强行压抑，但压制变化也可能让人继续囚禁自己。'},reversalExcess:{title:'把冲击压回去',term:'压抑变化',text:'试图控制事态、不让旧结构崩解，可能因此错过重要体验和觉醒。'},reversalDeficiency:{title:'困回塔里面',term:'自我囚禁',text:'明知结构已经限制自己，仍不愿离开，继续把安全感建立在狭窄牢笼中。'},reversalNote:'高塔逆位并非没有变化，而是变化较缓、被压抑或转向内在。',interpretationPrompt:'看过这些细节后，你觉得高塔更像在提醒你什么？',interpretationHint:'选择 1～2 个与你此刻想法接近的句子',interpretationOptions:['有些看似稳定的结构，其实早已限制了我','突发改变很痛苦，也可能让我看见原来的盲点','旧结构被打破以后，才有机会重新建设','压住所有变化，不一定真的能保护安全感'],finalPlaceholder:'用一句自己的话，写下你现在的理解……',completion:{title:'你已经完成了第十七关。',text:'你看见了崩塌带来的冲击，也形成了自己对破坏、释放与重建的理解。'}},
  17:{cardId:17,observationPrompt:'第一眼，你注意到了什么？',observationHint:'选择 1～3 个真正吸引你的细节',observationOptions:[{id:'woman',label:'跪着的女人'},{id:'jugs',label:'两个水壶'},{id:'streams',label:'流向水池与土地的水'},{id:'stars',label:'天空的八颗星'},{id:'bird',label:'树上的鸟'},{id:'land',label:'开满花的草地'},{id:'other',label:'我注意到了别的',allowsText:true},{id:'unsure',label:'我说不上来'}],followUps:{woman:{question:'她毫无遮挡地跪在这里，让你觉得她处于怎样的状态？',options:['坦然开放','没有防备','安静自在','完全信任周围'],customLabel:'我有别的感觉'},jugs:{question:'她不断倾倒两个水壶，让你觉得这些水会怎样？',options:['像不会用尽','持续滋养周围','让内外重新流动','带来恢复'],customLabel:'我有自己的想法'},streams:{question:'水同时流向池塘和土地，像在照顾什么？',options:['内在与外在','感受与现实','自己和环境','两个不同需要'],customLabel:'我有自己的想法'},stars:{question:'黑夜中的星星让这片景色发生什么变化？',options:['出现方向','黑暗不再可怕','带来希望','让人安定下来'],customLabel:'我有别的感觉'},bird:{question:'树上的鸟安静停留，让你觉得这里有什么？',options:['智慧在旁守候','自然恢复平衡','有人在观察','环境很安全'],customLabel:'我有自己的想法'},land:{question:'经历高塔之后，这片花草让你想到什么？',options:['风暴后的恢复','新的空间出现','生命重新生长','终于可以休息'],customLabel:'我有自己的想法'},other:{question:'这个细节让你怎样理解风暴后的画面？',options:['正在疗愈','重新有了希望','内心安静下来']},unsure:{question:'再看一眼，哪里最先吸引你？',options:['跪着的女人','两个水壶','天空星星','流动的水']}},feelingPrompt:'如果先不考虑牌义，这张牌给你什么感觉？',feelingOptions:['宁静','希望','疗愈','坦然','重新相信','自由','风暴已过去'],review:{title:'刚才，你是这样看这张牌的。',note:'你看见了水仍在流动、土地重新生长，也留意到风暴之后内心如何恢复安静。'},traditionalReference:{core:'传统里，星星常常与希望、信心、疗愈和内在宁静有关。',coreDetail:'它出现在高塔之后；旧结构崩解腾出空间，让人重新放入真正需要的东西，并在危机后恢复安定。',keywords:['希望','信心','疗愈','宁静'],imageConnections:[{id:'woman',label:'坦然的女人',text:'她没有隐藏或束缚，表现危机之后重新获得的开放与自由。'},{id:'jugs',label:'生命之水',text:'水毫不保留地流向池塘和土地，像生命力持续滋养内在与外在。'},{id:'stars',label:'八颗星',text:'黑夜中的星光表现不依赖外在控制的内在信心与平静。'},{id:'bird',label:'树上朱鹭',text:'书中将朱鹭解释为智慧，也联系艺术与创造。'}],framing:'传统是一份对照参考，不是对你刚才观察的纠正。'},upright:{label:'正位',text:'在剧变后重新找到希望与出口，让内在保持和谐、信心与平静。'},reversed:{label:'逆位',text:'失去内在信心，与潜意识的联系中断，容易陷入绝望、不信任与沮丧。'},reversalExcess:{title:'用傲慢遮住不安',term:'外在自大',text:'内在缺乏信心，却用高高在上的态度保护自己，难以真正获得安定。'},reversalDeficiency:{title:'看不见希望',term:'失去信心',text:'不再相信自己或他人，只看见表面价值，也暂时找不到风暴之后的出口。'},reversalNote:'星星逆位的核心，是内在信心与希望暂时失去连接。',interpretationPrompt:'看过这些细节后，你觉得星星更像在提醒你什么？',interpretationHint:'选择 1～2 个与你此刻想法接近的句子',interpretationOptions:['风暴之后，我仍可以为真正重要的东西腾出空间','希望不一定来自外界，也可以是内在保持的信心','疗愈不是马上行动，而是让生命重新流动','即使还在黑夜里，也可以相信前方会逐渐明朗'],finalPlaceholder:'用一句自己的话，写下你现在的理解……',completion:{title:'你已经完成了第十八关。',text:'你看见了风暴后的宁静，也形成了自己对希望、信心与疗愈的理解。'}},
  18:{cardId:18,observationPrompt:'第一眼，你注意到了什么？',observationHint:'选择 1～3 个真正吸引你的细节',observationOptions:[{id:'moon',label:'有脸的月亮'},{id:'path',label:'通向远方的小路'},{id:'dogWolf',label:'狗与狼'},{id:'crayfish',label:'爬出水面的龙虾'},{id:'towers',label:'两座高塔'},{id:'drops',label:'空中的光点'},{id:'other',label:'我注意到了别的',allowsText:true},{id:'unsure',label:'我说不上来'}],followUps:{moon:{question:'月光只能微弱照亮前方，让你觉得什么还看不清？',options:['道路尽头','隐藏的危险','自己的真实感受','事情完整的样子'],customLabel:'我有自己的想法'},path:{question:'这条路伸向未知，你会怎样走？',options:['小心向前','先停下观察','被不安拦住','虽然害怕仍继续'],customLabel:'我有别的感觉'},dogWolf:{question:'狗与狼一起对月吠叫，像哪两部分同时被唤醒？',options:['熟悉与野性','理性与本能','安全与警觉','被驯服与未驯服'],customLabel:'我有自己的想法'},crayfish:{question:'龙虾爬出水面又像会缩回去，让你想到什么？',options:['深处的恐惧浮现','想前进又退缩','情绪还没说清','未知让人紧张'],customLabel:'我有自己的想法'},towers:{question:'小路必须穿过两塔，它们让出口显得怎样？',options:['狭窄而遥远','需要勇气通过','像一道边界','仍然可以抵达'],customLabel:'我有自己的想法'},drops:{question:'月亮落下的光点，让黑夜给你什么感觉？',options:['像思想或讯息','带着神秘感','仍有微弱指引','让画面更不真实'],customLabel:'我有别的感觉'},other:{question:'这个细节让你怎样理解画面中的未知？',options:['需要谨慎','会唤起恐惧','也可能带来想象']},unsure:{question:'再看一眼，哪里最先吸引你？',options:['有脸的月亮','小路','狗与狼','水中龙虾']}},feelingPrompt:'如果先不考虑牌义，这张牌给你什么感觉？',feelingOptions:['不安','神秘','害怕','迷惑','想象力强','需要警觉','前方看不清'],review:{title:'刚才，你是这样看这张牌的。',note:'你看见了微弱光线与未知道路，也开始辨认恐惧、直觉和想象如何同时出现。'},traditionalReference:{core:'传统里，月亮常常与未知带来的不安、幻觉、恐惧和潜意识有关。',coreDetail:'月光只能微弱照亮通往未知的路；真正令人紧绷的，往往不是危险已经出现，而是还看不清前方有什么。',keywords:['未知','不安','恐惧','潜意识'],imageConnections:[{id:'path',label:'未知小路',text:'小路通向出口，却只有微弱月光照亮，表现面对未来与陌生情境的不安。'},{id:'dogWolf',label:'狗与狼',text:'狗与狼分别表现内心中已驯化与未驯化的兽性，都被未知唤起。'},{id:'crayfish',label:'水中龙虾',text:'龙虾从潜意识之水探出，表现比表面恐惧更深的情绪逐渐浮现。'},{id:'moon',label:'三层月亮',text:'月亮以隐晦光线连接神秘、感受与潜意识，而非太阳般清晰直接。'}],framing:'传统是一份对照参考，不是对你刚才观察的纠正。'},upright:{label:'正位',text:'面对看不清的未来、隐藏信息与非理性情绪，需要谨慎辨认恐惧和想象。'},reversed:{label:'逆位',text:'隐藏的事物可能逐渐浮现，使危险减弱；也可能否认潜意识与看不见的感受。'},reversalExcess:{title:'拒绝内在讯息',term:'关闭潜意识',text:'只接受看得见摸得着的解释，否认梦境、感受与内在正在提供的讯息。'},reversalDeficiency:{title:'秘密逐渐显露',term:'危险减弱',text:'谎言、危险或隐藏因素浮到表面，虽然仍不安，却开始知道该怎样应对。'},reversalNote:'月亮逆位可能让隐藏内容变清楚，也可能是拒绝承认内在感受。',interpretationPrompt:'看过这些细节后，你觉得月亮更像在提醒你什么？',interpretationHint:'选择 1～2 个与你此刻想法接近的句子',interpretationOptions:['看不清前方时，我可以先分辨事实与恐惧','有些不安来自未知，而不是危险已经发生','梦境、想象和情绪也可能在告诉我什么','隐藏的事一旦浮现，反而更容易被面对'],finalPlaceholder:'用一句自己的话，写下你现在的理解……',completion:{title:'你已经完成了第十九关。',text:'你走进了光线不足的画面，也形成了自己对未知、恐惧与潜意识的理解。'}},
  19:{cardId:19,observationPrompt:'第一眼，你注意到了什么？',observationHint:'选择 1～3 个真正吸引你的细节',observationOptions:[{id:'child',label:'马背上的孩子'},{id:'sun',label:'巨大的太阳'},{id:'horse',label:'没有缰绳的白马'},{id:'flag',label:'红色旗帜'},{id:'sunflowers',label:'四朵向日葵'},{id:'wall',label:'身后的围墙'},{id:'other',label:'我注意到了别的',allowsText:true},{id:'unsure',label:'我说不上来'}],followUps:{child:{question:'孩子毫不遮掩地微笑，让你觉得他处于什么状态？',options:['纯真自在','非常快乐','没有防备','像重新出生'],customLabel:'我有别的感觉'},sun:{question:'太阳照亮整个画面，让什么变得不同？',options:['一切更清楚','气氛温暖','不再害怕未知','充满生命力'],customLabel:'我有别的感觉'},horse:{question:'没有马鞍和缰绳，孩子却能前进，这像什么？',options:['力量自然配合','不需要强行控制','内在已经很协调','行动变得轻松'],customLabel:'我有自己的想法'},flag:{question:'孩子挥动红旗，让快乐多了什么？',options:['行动与活力','公开表达','庆祝胜利','向前的动力'],customLabel:'我有自己的想法'},sunflowers:{question:'向日葵朝向孩子而非太阳，让你想到什么？',options:['孩子本身充满能量','快乐也能感染环境','生命向他靠近','他成为画面中心'],customLabel:'我有自己的想法'},wall:{question:'孩子越过围墙离开花园，像摆脱了什么？',options:['人为限制','需要隐藏的环境','旧有边界','过度安排'],customLabel:'我有自己的想法'},other:{question:'这个细节让你怎样理解画面中的光明？',options:['自由显露','成功到来','内心真正快乐']},unsure:{question:'再看一眼，哪里最先吸引你？',options:['微笑的孩子','巨大太阳','白马','红色旗帜']}},feelingPrompt:'如果先不考虑牌义，这张牌给你什么感觉？',feelingOptions:['快乐','温暖','自由','成功','充满活力','很清楚','重新开始'],review:{title:'刚才，你是这样看这张牌的。',note:'你看见了不需隐藏的快乐、自然流动的力量，也留意到光明如何让事情变得清楚。'},traditionalReference:{core:'传统里，太阳常常与成功、自由、快乐和光明有关。',coreDetail:'孩子跨过围墙，在没有缰绳的白马上自然前进；力量已经不必强行控制，快乐也由内而外显露。',keywords:['成功','自由','快乐','光明'],imageConnections:[{id:'child',label:'裸体孩童',text:'孩子纯真自然、无需隐藏，红羽毛也让他与愚人的旅程和新生相连。'},{id:'horse',label:'无缰白马',text:'没有马鞍、缰绳或双手控制，表现能量已被自然而充分地掌握。'},{id:'sunflowers',label:'四朵向日葵',text:'向日葵朝向孩子，表现他自身已拥有足够能量，让生命向他靠近。'},{id:'sun',label:'巨大太阳',text:'太阳是生命与光明的源头，令原本隐晦的道路终于完全清楚。'}],framing:'传统是一份对照参考，不是对你刚才观察的纠正。'},upright:{label:'正位',text:'事情走向清晰、顺利与成功，内心也能感到自然、自由而真实的快乐。'},reversed:{label:'逆位',text:'正面的力量仍在，但程度减弱，可能成功延迟、成果较小或得到后仍不满足。'},reversalExcess:{title:'光太强了',term:'无法满足',text:'即使获得原本想要的结果，仍不断要求更多，反而难以感受简单快乐。'},reversalDeficiency:{title:'阳光暂时被遮住',term:'成功减弱',text:'遇到小问题或延迟，成果仍可能到来，只是光明暂时没有完全显现。'},reversalNote:'书中认为太阳逆位仍保有正位意义，只是成功与快乐的程度减弱。',interpretationPrompt:'看过这些细节后，你觉得太阳更像在提醒你什么？',interpretationHint:'选择 1～2 个与你此刻想法接近的句子',interpretationOptions:['真正的快乐可以简单、自然，也不需要隐藏','当内在协调时，行动不一定总靠强行控制','看清事情本来的样子，会让我更自由地向前','已经得到的光明，也值得被真实地感受'],finalPlaceholder:'用一句自己的话，写下你现在的理解……',completion:{title:'你已经完成了第二十关。',text:'你看见了光明如何带来自由与清晰，也形成了自己对快乐和成功的理解。'}},
  20:{cardId:20,observationPrompt:'第一眼，你注意到了什么？',observationHint:'选择 1～3 个真正吸引你的细节',observationOptions:[{id:'angel',label:'吹号角的天使'},{id:'people',label:'棺材中站起的人'},{id:'child',label:'背对着的小孩'},{id:'flag',label:'红十字旗帜'},{id:'sea',label:'棺材下的海洋'},{id:'mountains',label:'远方雪山'},{id:'other',label:'我注意到了别的',allowsText:true},{id:'unsure',label:'我说不上来'}],followUps:{angel:{question:'号角从高处响起，像在召唤人们做什么？',options:['回应重要讯息','醒来并作决定','离开旧状态','进入新阶段'],customLabel:'我有自己的想法'},people:{question:'人们从棺材里站起，像摆脱了什么？',options:['旧有生活模式','物质限制','过去的自己','长期停滞'],customLabel:'我有自己的想法'},child:{question:'背对我们的小孩，让重生看起来怎样？',options:['一种新的人格','真正重新开始','未来还没有定型','过去无法决定一切'],customLabel:'我有自己的想法'},flag:{question:'号角上的红十字旗，让这一刻像在衡量什么？',options:['过去行为的结果','不同力量的平衡','一项重要决定','人生的转折'],customLabel:'我有自己的想法'},sea:{question:'棺材漂浮在潜意识的海洋上，让召唤来自哪里？',options:['内心深处','长期积累的感受','外界与内在同时','未被说出的渴望'],customLabel:'我有自己的想法'},mountains:{question:'远方雪山让这次回应显得怎样？',options:['目标很高','需要清晰判断','即将抵达终点','关系到重要成长'],customLabel:'我有别的感觉'},other:{question:'这个细节让你怎样理解画面中的召唤？',options:['需要回应','带来重生','要求作出决定']},unsure:{question:'再看一眼，哪里最先吸引你？',options:['吹号角的天使','站起的人们','红十字旗','远方雪山']}},feelingPrompt:'如果先不考虑牌义，这张牌给你什么感觉？',feelingOptions:['被唤醒','需要决定','重新开始','得到解放','很重要','无法再忽视','过去被检验'],review:{title:'刚才，你是这样看这张牌的。',note:'你看见了召唤如何打破旧模式，也开始思考回应、判断和重新开始之间的关系。'},traditionalReference:{core:'传统里，审判常常与召唤、决定、解放和重生有关。',coreDetail:'人会在关键阶段听见内在或外界的召唤；回应它，需要清晰判断，也会把生命带向新的篇章。',keywords:['召唤','决定','解放','重生'],imageConnections:[{id:'angel',label:'天使号角',text:'号角的声音表现重要召唤，可能来自外界，但更多时候来自内心。'},{id:'people',label:'离开棺材',text:'棺材象征物质世界的旧模式，人们站起则表现从旧限制中获得解放。'},{id:'child',label:'重生小孩',text:'小孩背对我们，表现尚未定型、正在形成的全新人格。'},{id:'flag',label:'红十字旗',text:'书中将红十字解释为业力平衡，也让过去行为与当前决定彼此相连。'}],framing:'传统是一份对照参考，不是对你刚才观察的纠正。'},upright:{label:'正位',text:'在人生关键阶段回应召唤，作出清晰决定，摆脱旧模式并重新开始。'},reversed:{label:'逆位',text:'抗拒改变、否认召唤或不愿决定，也可能因目光短浅而作出不利判断。'},reversalExcess:{title:'草率作出判断',term:'决定失准',text:'没有看清更长远的影响便作出选择，过去的问题也可能因此带来后果。'},reversalDeficiency:{title:'听见却不回应',term:'抗拒召唤',text:'怀疑或否认内心的重要声音，不愿面对转变，让旧阶段迟迟无法结束。'},reversalNote:'审判逆位的重点，是召唤已经出现，却没有得到清晰回应。',interpretationPrompt:'看过这些细节后，你觉得审判更像在提醒你什么？',interpretationHint:'选择 1～2 个与你此刻想法接近的句子',interpretationOptions:['有些内心声音值得被认真回应，而不是继续忽略','重要决定会把我带离旧模式，进入新的阶段','重新开始之前，也需要看清过去留下的结果','真正的解放，可能从承认自己已经来到转折点开始'],finalPlaceholder:'用一句自己的话，写下你现在的理解……',completion:{title:'你已经完成了第二十一关。',text:'你听见了画面中的召唤，也形成了自己对判断、解放与重生的理解。'}},
  21:{cardId:21,observationPrompt:'第一眼，你注意到了什么？',observationHint:'选择 1～3 个真正吸引你的细节',observationOptions:[{id:'dancer',label:'中央的舞者'},{id:'wreath',label:'椭圆形桂冠'},{id:'wands',label:'双手的权杖'},{id:'scarf',label:'紫色丝巾'},{id:'corners',label:'四角的四个形象'},{id:'ribbons',label:'桂冠上的红结'},{id:'other',label:'我注意到了别的',allowsText:true},{id:'unsure',label:'我说不上来'}],followUps:{dancer:{question:'舞者在空中自由起舞，让你觉得她完成了什么？',options:['一个完整旅程','内在不同部分的融合','摆脱原有束缚','自然到达成果'],customLabel:'我有自己的想法'},wreath:{question:'桂冠既环绕她又留下边界，这像什么？',options:['完成的范围很清楚','成功形成完整形状','自由也知道界线','旅程首尾相连'],customLabel:'我有自己的想法'},wands:{question:'她轻松拿着两根权杖，让力量看起来怎样？',options:['已经能够自由运用','正反力量都被接纳','不再需要紧张控制','经过成长变得完整'],customLabel:'我有自己的想法'},scarf:{question:'紫色丝巾缠绕身体，让舞者显得怎样？',options:['高贵而自由','神圣感出现','柔软地流动','内在与外在相连'],customLabel:'我有别的感觉'},corners:{question:'四角形象再次出现，但已经不再读书，这像什么？',options:['使命已经完成','知识已被理解','四种力量都到齐','命运考验结束'],customLabel:'我有自己的想法'},ribbons:{question:'红结形成倒 8，让完成又带来什么？',options:['旅程仍会继续','完整中包含无限','结束连接新开始','成果可以持续流动'],customLabel:'我有自己的想法'},other:{question:'这个细节让你怎样理解画面中的完成？',options:['自然抵达','不同力量融合','完成后仍会继续']},unsure:{question:'再看一眼，哪里最先吸引你？',options:['中央舞者','椭圆桂冠','四角形象','两根权杖']}},feelingPrompt:'如果先不考虑牌义，这张牌给你什么感觉？',feelingOptions:['完整','成功','自由','圆满','终于抵达','轻盈','准备进入下一段'],review:{title:'刚才，你是这样看这张牌的。',note:'你看见了旅程如何形成完整段落，也留意到完成、边界与继续流动可以同时存在。'},traditionalReference:{core:'传统里，世界常常与完成、完整、成功和自然抵达有关。',coreDetail:'它不是生硬终止，而是一个阶段自然完成；不同力量得到融合，人也能在清楚边界中自由行动。',keywords:['完成','完整','成功','自由'],imageConnections:[{id:'dancer',label:'自由舞者',text:'舞者融合不同力量、自由移动，表现灵魂不再受物质限制。'},{id:'wreath',label:'椭圆桂冠',text:'桂冠象征成功，椭圆又呼应愚人的 0，让最初潜力在终点充分展开。'},{id:'corners',label:'四角形象',text:'它们曾在命运之轮学习知识，如今不再持书，表现使命已经完成。'},{id:'ribbons',label:'红色倒 8',text:'桂冠上的红结形成无限符号，使完成与永恒流动同时出现。'}],framing:'传统是一份对照参考，不是对你刚才观察的纠正。'},upright:{label:'正位',text:'一个阶段自然完成，目标达成、资源整合，也准备自由进入新的旅程。'},reversed:{label:'逆位',text:'成功欠缺临门一脚，或完成后仍有问题；也可能拒绝离开旧阶段。'},reversalExcess:{title:'只差最后一步',term:'完成有缺口',text:'目标已很接近，却因小挫折想放弃，或达成之后才发现仍有细节要解决。'},reversalDeficiency:{title:'停留在旧阶段',term:'拒绝流动',text:'不愿搬动、改变或进入新环境，让原本自由的能量再次淤塞。'},reversalNote:'世界逆位不是毫无成果，而是完成度减弱，或迟迟不肯进入下一阶段。',interpretationPrompt:'看过这些细节后，你觉得世界更像在提醒你什么？',interpretationHint:'选择 1～2 个与你此刻想法接近的句子',interpretationOptions:['真正的完成，是一个阶段自然抵达而不是被迫中止','不同部分得到整合，会让我更自由地行动','完成之后愿意进入下一段，也是让生命继续流动','已经走到最后一步时，不必因小瑕疵否定整个旅程'],finalPlaceholder:'用一句自己的话，写下你现在的理解……',completion:{title:'你已经完成了第二十二关。',text:'你走完了大阿卡那旅程，也形成了自己对完成、整合与继续前行的理解。'}}
};
