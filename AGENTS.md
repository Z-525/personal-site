# AGENTS.md — 个人网站项目开发规范

## 一、项目概述

这是一个**深色星空主题的个人展示网站**，用于展示个人介绍、技能、项目与博客内容。
项目采用 React + TypeScript + Vite 构建，纯前端静态站点，最终部署到 Vercel / Cloudflare Pages。

## 二、技术栈（硬性约定）

- **框架**：React 18（函数组件 + Hooks，禁止使用 class 组件）
- **语言**：TypeScript（严格模式，所有 props 必须有类型定义）
- **构建**：Vite 5
- **路由**：React Router 6
- **样式**：原生 CSS + CSS 变量（`src/index.css` 中定义主题变量），**禁止引入 Tailwind、Antd 等重型 UI 库**
- **星空背景**：原生 Canvas 绘制，不引入第三方动画库

## 三、目录结构约定

- 页面组件放 `src/pages/`，通用组件放 `src/components/`
- 所有静态数据（个人信息、技能、项目、博客）统一放在 `src/data/content.ts`
- 新增页面/组件必须遵循现有命名（PascalCase 文件名）

## 四、代码风格

- 组件函数命名：PascalCase；变量/函数：camelCase
- 使用 2 空格缩进，句尾不带分号（默认 Prettier 风格）
- 关键逻辑必须添加中文注释
- 样式类名：语义化命名（如 `.navbar`、`.skill-card`）

## 五、测试要求

- 每次修改后运行 `npm run build`，确保 TypeScript 编译通过、无报错
- 手动检查：375px / 1024px 两种宽度下布局正常
- 打开控制台确认无红色报错

## 六、注意事项

- 深色主题色值以 `src/index.css` 中 `:root` 变量为准，禁止在组件内硬编码颜色
- 星空粒子数量在移动端必须降级，保证帧率
- 所有图片资源放 `public/` 或使用相对路径，禁止使用外链图片
- 修改数据只改 `src/data/content.ts`，不要改动组件结构

## 七、开发流程

1. 阅读 PRD.md 明确功能需求
2. 阅读 TECH_DESIGN.md 确认技术方案
3. 按组件拆分逐步实现
4. 每完成一个功能运行一次 `npm run build` 自检
5. 全部完成后人工测试并修复 Bug
