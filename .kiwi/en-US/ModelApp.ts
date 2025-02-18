export default {
  zhiNengTiXiangQing: '智能体详情',
  zheShiYiDuanShi: '这是一段使用 OpenAI Speech to Text 的语音演示',
  yuYinBoBao: '语音播报',
  yuYinFengGe: '语音风格',
  yuSu: '语速',
  qingXuanZeYuYin: '请选择语音模型',
  yuYinMoXing: '语音模型',
  yuYinBoBaoPei: '语音播报配置',
  baoXiaoZhiShiKu: '报销知识库q',
  baoXiaoZhiShiKu2: '报销知识库w',
  kaoQinZhiShiKu: '考勤知识2库',
  baoXiaoZhiShiKu3: '报销知识库',
  kaoQinZhiShiKu2: '考勤知识库',
  qingShuRuDuiHua: '请输入对话开场白',
  ninHaoWoShiKao: '您好，我是考勤知识小助手，请问有什么可以帮您？',
  duiHuaKaiChangBai: '对话开场白',
  meiYouSouSuoDao: '没有搜索到合适的内容时，将会直接回复此内容',
  zuiDuoKeShuRu: '最多可输入 200 字符',
  kongSouSuoHuiFu: '空搜索回复',
  weiZhaoDaoNinXun: '未找到您询问的内容，请详细描述您的问题',
  danCiSouSuoPi: '单词搜索匹配答案的最大数量，范围为[1，10]。',
  yinYongShangXian: '引用上限',
  piPeiYongHuWen:
    '匹配用户问题的最低相似度阈值，范围为[0，1]，阈值越低，匹配的内容越发散，阈值越高，匹配的内容越精确。不同知识库最低相似度有差异，建议根据具体的知识库配置合适的相似度。',
  zuiDiXiangSiDu: '最低相似度',
  zhiShiKuGaoJi: '知识库高级配置',
  xuanZeZhiShiKu: '选择知识库',
  tianJia: '添加',
  moXingFuWu: '模型服务',
  qingXuanZeMoXing: '请选择模型',
  qingXuanZeMoXing2: '请选择模型服务',
  kongZhiAIDui:
    '控制 AI 对话最大 Token，范围为[10，+∞)。Token 涵盖了输入和输出的总 Token 数，这意味着如果用户的输入很长，模型可用于生成回应的 Token 数量会相应减少。',
  kongZhiAIHui:
    '控制 AI 回复的最大字段长度，范围为[10，+∞),较小的值可以一定程度上减少 AI 的废话，但也可能导致 AI 回复不完整。',
  zuiDaXiangYingChang: '最大响应长度',
  baoLiuDuoLunDui: '保留多轮对话上下文最多组数，范围为[0,30]。',
  duiHuaLunCi: '对话轮次',
  peiZhiAIHui:
    '配置 AI 回复的发散程度，较高的数值会使输出更加随机，较低的数值会使输出更加精确，范围为[0, 1]。',
  moXingGaoJiPei: '模型高级配置',
  suiJi: '随机',
  jingQue: '精确',
  wenTiYinDao: '问题引导',
  qingShuRuPR: '请输入 Prompt',
  tiShiCiKeYi:
    '提示词可以帮助模型更好地理解用户的意图，并且可以在对话的早期阶段提供必要的指导。该提示词会固定在对话开始之前，适当的提示词可以引导对话的方向。支持使用变量，如{text}。',
  pROMP: 'Prompt 详细介绍',
  pROMP2:
    'Prompt 是指向 AI 模型提供的指示或问题，用于引导其生成回应或执行特定任务。Prompt 的设计和选择可以显著影响 AI 模型的输出结果和行为。',
  xuanZePRO: '选择 Prompt 模板',
  pROMP3: 'Prompt 模板',
  xianZaiNiXuYao:
    '现在你需要制作一份PPT，你需要按照我给出的主题来准备这份PPT的内容。 最终你需要给出： 【目录】根据我给出的主题和内容撰写的PPT目录 【内容】根据目录中的标题一一撰写对应的内容大纲 接下来，你需要制作的PPT主题是{{.question}}\r\n{{.history}}',
  pPTKuangJia: 'PPT 框架',
  niXianZaiShiWo:
    '你现在是我的法律顾问。我将描述一种法律问题，你需要提供如何处理这个问题的建议。你只需要回复你的建议，而不是其他。不要写解释。我的问题是{{.question}}。\r\n{{.history}}',
  faLuGuWen: '法律顾问',
  qingGenJuShangXia: '请根据上下文内容:{{.context}}回答用户提问:{{.question}}\r\n{{.history}}',
  renShiZhuGuan: '人事主管',
  xianZaiNiShiYi:
    '现在你是一位精通go的资深IT开发工程师，你会对我给出的代码进行Debug。注意你需要给出代码中的具体Bug，并且通过代码块的形式提供修改后的代码。接下来你需要进行Debug的代码为:{{.question}}\r\n{{.history}}',
  daiMaDEB: '代码 Debug',
  shengChengYiXiaNei: '生成以下内容的摘要：{{.context}} {{.question}}  \r\n{{.history}}',
  wenDangZhaiYao: '文档摘要',
  xianZaiNiShiYi2:
    '现在你是一个问答机器人，你会阅读并深度理解我给你的上下文内容并据此回答我所提出的问题。我给出的问题是：{{.question}} 你需要阅读理解的文本是：{{.context}} \r\n{{.history}}',
  wenBenWenDa: '文本问答',
  beiTiHuanWeiYong: '被替换为用户的提问',
  beiTiHuanWeiDang: '被替换为当前会话的历史，历史记录数量由模型的“对话轮次”决定',
  beiTiHuanWeiXiang: '被替换为相关的上下文信息（比如从知识库获取到的相关信息）',
  shiYongShuoMing: '使用说明',
  zhanWeiFu: '占位符',
  zaiSheZhiPR: '在设置 Prompt 时，支持输入变量，目前 KubeAGI 在 Prompt 中支持三种占位符：',
  biMianWuDaoHe:
    '避免误导和偏差：Prompt 的设计可以帮助避免模型生成误导性、偏见性或不当的回答。通过明确规定对特定主题或敏感话题的处理方式，Prompt 可以减少模型生成不适当内容的风险。',
  duiHuaYiZhiXing:
    '对话一致性：在对话系统中，Prompt 可以用于确保对话的连贯性和一致性。通过在 Prompt 中提供对话历史、上下文信息或先前的对话片段，模型可以更好地理解对话背景并生成与之前回答一致的响应。',
  yuYanFengGeHe:
    '语言风格和文本生成：Prompt 可以用于指导AI模型生成特定的语言风格或文本风格。通过选择适当的词汇、句法结构和上下文信息，Prompt 可以影响模型生成的回答具有正式、友好、专业等不同的口吻和风格。',
  kongZhiShuChuZhi:
    '控制输出质量：通过合理的 Prompt 设计，可以引导模型生成更准确、相关、完整的回答。Prompt 可以包含示例回答、期望的回答结构、问题细化等信息，帮助模型理解任务要求并生成更高质量的输出。',
  yinDaoMoXingXing:
    '引导模型行为：通过 Prompt，可以明确告诉模型应该采取何种行动或生成何种回应。Prompt 可以定义任务的目标、期望的输出格式、所需的操作步骤等，以确保模型的行为符合预期。',
  zaiAIZhiNeng: '在 AI 智能体中，Prompt 有以下作用：',
  pROMP4: 'Prompt 介绍',
  tiShiGongChengZhi: '提示工程指南',
  chaKanGengDuoP: '查看更多 Prompt 信息，可参考',
  xiangSiDu: '相似度',
  yinYongShuJu: '引用数据（3）',
  tITLE: '{val1}失败',
  qingShuRu: '请输入',
  shiShiSouSuo: '实时搜索',
  qingXuanZeSouSuo: '请选择搜索地址',
  chaKanYinYong: '查看引用',
  chaKanXiangYingXin: '查看响应信息',
  geXingHuaPeiZhi: '个性化配置',
  baoCun: '保存',
  baoCunZhiNengTi: '保存智能体配置失败',
  baoCunZhiNengTi2: '保存智能体配置成功',
  qingXianXiuGaiZhi: '请先修改智能体配置',
  zhiNengTiPeiZhi: '智能体配置',
  ma: '吗？',
  queDingShanChu: '确定删除',
  tITLE2: '{val1}智能体',
  shanChuZhiNengTi: '删除智能体失败',
  shanChuZhiNengTi2: '删除智能体成功',
  qingShuRuMiaoShu: '请输入描述',
  miaoShu: '描述',
  qiTa: '其他',
  shengHuoQuWei: '生活趣味',
  jueSeBanYan: '角色扮演',
  yingYinShengCheng: '影音生成',
  aIHuiHua: 'AI绘画',
  neiRongChuangZuo: '内容创作',
  gongZuoXueXi: '工作学习',
  tongYongDuiHua: '通用对话',
  youXiDongMan: '游戏动漫',
  qingXuanZeZhiNeng: '请选择智能体分类',
  zhiNengTiFenLei: '智能体分类',
  qingShangChuanTouXiang: '请上传头像',
  zhiNengTiTouXiang: '智能体头像',
  qingShuRuZhiNeng: '请输入智能体别名',
  zhiNengTiBieMing: '智能体别名',
  qingShuRuZhiNeng2: '请输入智能体名称',
  zhiNengTiMingCheng: '智能体名称',
  tITLE3: '{val1}智能体',
  bianJiZhiNengTi: '编辑智能体失败',
  bianJiZhiNengTi2: '编辑智能体成功',
  bianJi: '编辑',
  xinJian: '新建',
  tITLE4: '{val1}智能体',
  tITLE5: '{val1}智能体成功',
  faBu: '发布',
  cheXiaoFaBu: '撤销发布',
  yongHuJiangHuiZai:
    '用户将会在 AgileGPT 平台智能体列表中看到此应用，点击即可进行对话交互，无需其他配置',
  duiHua: '对话',
  faBuZhiNengTi: '发布智能体',
  zhiNengTiPingGu: '智能体评估',
  miaoShu2: '描述：',
  chuangJianZhe: '创建者：',
  chuangJianShiJian: '创建时间：',
  mingCheng: '名称：',
  qingXuanZeFaBu: '请选择发布平台',
  qingXuanZeCheXiao: '请选择撤销平台',
  xuanZeFaBuPing: '选择发布平台',
  xuanZeCheXiaoPing: '选择撤销平台',
};
