# 个人网站 技术设计文档（TECH_DESIGN.md）

## 一、技术栈选择

| 层 | 选型 | 版本 | 选择理由 |
|---|---|---|---|
| 前端框架 | React | 18 | 组件化开发，生态成熟，适合单页站点 |
| 开发语言 | TypeScript | 5.x | 类型安全，减少运行时错误 |
| 构建工具 | Vite | 5.x | 启动快、构建快，开箱即用 |
| 路由 | React Router | 6.x | 单页应用路由管理 |
| 样式 | 原生 CSS + CSS 变量 | — | 深色主题统一管理，无需引入重型 UI 库 |
| 星空背景 | Canvas 原生绘制 | — | 粒子闪烁 + 视差，性能可控 |
| 部署 | Vercel / Cloudflare Pages | — | 免费托管，支持静态站点，全球 CDN |

> 说明：不引入 Tailwind 等额外依赖，使用 CSS 变量统一主题，保证项目轻量、可直接运行。

## 二、项目结构

```
personal-site/
├── PRD.md              # 产品需求文档
├── TECH_DESIGN.md      # 本技术设计文档
├── AGENTS.md           # AI 代理开发规范
├── index.html          # Vite 入口 HTML
├── package.json        # 依赖与脚本
├── tsconfig.json       # TypeScript 配置
├── vite.config.ts      # Vite 配置
├── public/             # 静态资源（favicon 等）
└── src/
    ├── main.tsx        # 应用入口
    ├── App.tsx         # 根组件（路由 + 布局）
    ├── index.css       # 全局样式 + 主题变量
    ├── data/
    │   └── content.ts  # 个人信息、技能、项目、博客数据
    ├── components/
    │   ├── Navbar.tsx      # 吸顶导航（含移动端汉堡菜单）
    │   ├── Footer.tsx      # 页脚
    │   ├── Starfield.tsx   # Canvas 星空背景
    │   ├── Hero.tsx        # 首页首屏
    │   ├── About.tsx       # 个人介绍
    │   ├── Skills.tsx      # 技能展示
    │   ├── Projects.tsx    # 项目展示
    │   ├── Blog.tsx        # 博客列表
    │   └── Contact.tsx     # 联系模块
    └── pages/
        └── Home.tsx        # 首页（单页滚动）
```

## 三、数据模型

### 3.1 个人信息 Profile

```ts
interface Profile {
  name: string;        // 姓名
  title: string;       // 职位/专业
  intro: string;       // 一句话介绍
  education: string;   // 教育背景
  email: string;       // 邮箱
  avatar: string;      // 头像（本地图片路径）
}
```

### 3.2 技能 Skill

```ts
interface Skill {
  category: string;    // 分类（如 前端 / 后端 / 物联网）
  name: string;        // 技能名称
  level: number;       // 熟练度 1-100
  icon: string;        // 图标（emoji 或 SVG 文本）
}
```

### 3.3 项目 Project

```ts
interface Project {
  id: string;          // 唯一标识
  title: string;       // 项目名称
  description: string; // 项目描述
  tags: string[];      // 技术标签
  link: string;        // 项目链接
  year: string;        // 完成时间
}
```

### 3.4 博客文章 Post

```ts
interface Post {
  id: string;
  title: string;
  summary: string;
  date: string;
  tags: string[];
}
```

## 四、关键技术点

### 4.1 星空背景（Canvas 粒子）
- 使用 `requestAnimationFrame` 循环绘制粒子
- 每个粒子：随机位置、大小、闪烁速度，透明度正弦变化模拟闪烁
- 鼠标移动时粒子产生轻微视差偏移
- 移动端（视口 < 768px）粒子数量减半
- 尊重 `prefers-reduced-motion`，用户偏好减弱动效时不启动动画

### 4.2 响应式布局
- 使用 CSS Grid + `repeat(auto-fit, minmax())` 实现卡片自适应
- 断点：<640px 单列 / 640-1024px 两列 / >1024px 三列
- 导航在移动端折叠为汉堡菜单

### 4.3 滚动动画
- `IntersectionObserver` 监听元素进入视口，触发淡入上移

## 五、开发与运行

```bash
npm install        # 安装依赖
npm run dev        # 本地开发（默认 http://localhost:5173）
npm run build      # 构建生产版本（输出 dist/）
npm run preview    # 本地预览构建产物
```

## 六、部署方案

1. 代码推送到 GitHub 仓库
2. Vercel / Cloudflare Pages 导入该仓库
3. 框架预设选择 Vite，构建命令 `npm run build`，输出目录 `dist`
4. 部署完成后获得免费域名 `xxx.pages.dev` 或 `xxx.vercel.app`
