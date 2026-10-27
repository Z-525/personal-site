/**
 * 站点数据文件：个人信息、技能、项目、博客统一在这里维护
 * 修改内容只需改动本文件，无需修改组件
 */

export interface Profile {
  name: string
  title: string
  intro: string
  education: string
  email: string
}

export const profile: Profile = {
  name: '赵思博',
  title: '物联网工程 · 学生开发者',
  intro: '用 AI 辅助开发，从零代码平台到 Chrome 插件与大模型微调，持续探索软硬件结合的可能性。',
  education: '大连民族大学 · 物联网工程专业',
  email: 'zhaosibo@example.com',
}

export interface Skill {
  category: string
  name: string
  level: number
  icon: string
}

export const skills: Skill[] = [
  { category: '前端', name: 'HTML / CSS / JavaScript', level: 85, icon: '🌐' },
  { category: '前端', name: 'React + TypeScript', level: 75, icon: '⚛️' },
  { category: '后端', name: 'Python', level: 80, icon: '🐍' },
  { category: '后端', name: 'Java + Spring Boot + SQL', level: 70, icon: '☕' },
  { category: '物联网', name: 'C 语言 / 单片机 MCS51', level: 78, icon: '🔌' },
  { category: '物联网', name: 'Keil + Proteus 仿真', level: 75, icon: '🛠️' },
  { category: 'AI', name: 'PyTorch / 大模型微调（SFT + LoRA）', level: 72, icon: '🤖' },
  { category: 'AI', name: '零代码平台（秒哒）应用开发', level: 88, icon: '✨' },
]

export interface Project {
  id: string
  title: string
  description: string
  tags: string[]
  link: string
  year: string
}

export const projects: Project[] = [
  {
    id: 'translate',
    title: 'AI 翻译助手',
    description: '基于秒哒零代码平台开发的在线翻译应用，支持中英文互译，绿色简洁界面。',
    tags: ['零代码', 'AI', '秒哒'],
    link: 'https://app-fchj2zf168zl.miaoda.online',
    year: '2026',
  },
  {
    id: 'weather',
    title: '天气查询助手',
    description: '输入城市名即可查询实时天气与未来三天预报，中文界面、响应式布局。',
    tags: ['零代码', '天气', '秒哒'],
    link: 'https://app-fchr96wxssg1.miaoda.online',
    year: '2026',
  },
  {
    id: 'web-summary',
    title: '网页 AI 总结工具',
    description: '输入网址自动提取网页内容，并用 AI 生成简洁中文摘要，支持中英文网页。',
    tags: ['AI', '网页', '秒哒'],
    link: 'https://app-fcnef6lcuwht.miaoda.online',
    year: '2026',
  },
  {
    id: 'img-download',
    title: '电商图片批量下载工具',
    description: '粘贴淘宝/京东/拼多多商品链接，一键提取详情页所有图片并批量下载为 PNG。',
    tags: ['电商', '图片处理', '秒哒'],
    link: 'https://app-fd8h3fyyy3gi.miaoda.online',
    year: '2026',
  },
  {
    id: 'chrome-ext',
    title: '电商图片下载 Chrome 插件',
    description: 'Manifest V3 浏览器扩展：详情页右下角悬浮按钮一键提取商品图，画廊页勾选后统一转 PNG 批量下载。',
    tags: ['Chrome扩展', 'MV3', 'JavaScript'],
    link: '#projects',
    year: '2026',
  },
  {
    id: 'llm',
    title: '大语言模型训练实践',
    description: '从分词器、预训练到 SFT 与 LoRA 微调的完整流程实践，768 hidden / 8 层，模型参数 34.41M，支持孙悟空角色对话。',
    tags: ['PyTorch', 'LoRA', 'SFT', '深度学习'],
    link: '#projects',
    year: '2026',
  },
]

export interface Post {
  id: string
  title: string
  summary: string
  date: string
  tags: string[]
}

export const posts: Post[] = [
  {
    id: 'llm-practice',
    title: '从零训练大模型：预训练、SFT 与 LoRA 微调实践',
    summary: '记录使用 PyTorch 从分词器到角色对话微调的完整流程，以及 8G 显存下 LoRA 微调的实践经验。',
    date: '2026-10',
    tags: ['深度学习', 'PyTorch'],
  },
  {
    id: 'no-code',
    title: '零代码平台开发体验：秒哒应用实战',
    summary: '用一句话在秒哒生成 AI 翻译助手、天气助手等应用，探讨零代码平台在快速原型验证中的价值。',
    date: '2026-10',
    tags: ['零代码', '秒哒'],
  },
  {
    id: 'extension',
    title: 'Chrome 电商图片下载插件开发实录',
    summary: '从需求分析、PRD 编写到 Manifest V3 插件实现，分享电商详情页图片提取与批量下载的完整思路。',
    date: '2026-10',
    tags: ['Chrome扩展', '前端'],
  },
  {
    id: 'iot',
    title: '物联网课程实践：单片机与传感器应用',
    summary: '基于 MCS51 单片机的数码管、蜂鸣器、定时器中断实践，以及 Keil + Proteus 联合仿真经验。',
    date: '2026-09',
    tags: ['物联网', '单片机'],
  },
]
