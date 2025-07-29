
# Next.js Todo 前端练手项目

> 基于 Next.js + React 实现的简单 Todo List，适合前端初学者练习。

## 功能介绍

- 添加待办事项
- 删除待办事项
- 标记完成/未完成
- 按全部/已完成/未完成筛选

## 快速开始

1. 安装依赖：
   ```bash
   npm install
   ```
2. 启动开发服务器：
   ```bash
   npm run dev
   ```
3. 打开浏览器访问 [http://localhost:3000](http://localhost:3000)

## 目录结构

```
├── public/                # 静态资源
├── src/
│   ├── app/
│   │   ├── page.tsx       # 主页，核心逻辑
│   │   └── ...
│   └── components/        # 组件
│       ├── AddTodo.tsx
│       ├── TodoFilter.tsx
│       ├── TodoItem.tsx
│       └── TodoList.tsx
│   └── types.ts           # 类型定义
├── package.json
└── ...
```

## 技术栈

- [Next.js](https://nextjs.org/)  
- [React](https://react.dev/)
- TypeScript

## 说明

本项目仅用于前端基础练习，未接入后端和持久化存储。你可以在 `src/app/page.tsx` 修改和扩展功能。

## 参考

- [Next.js 官方文档](https://nextjs.org/docs)
- [React 官方文档](https://react.dev/)
