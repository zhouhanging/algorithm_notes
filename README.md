# Vue3 LeetCode 算法可视化辅助工具
## 技术实施 Skill 文档（AI 生成代码专用·最终优化版）
### 核心定位
**Vue3 工程化实现的 LeetCode 专属刷题辅助工具**，支持粘贴/编写 LeetCode 标准 JS 算法代码，自动解析语法与数据结构，实时生成 **2D+3D 融合可视化结构**，实现**代码逐行执行 ↔ 动态节点生成/变化**强绑定；内置代码编辑器、测试用例运行、本地判题，完美贴合 LeetCode 刷题流程，轻量化可直接运行。

---

## 一、强制技术栈（不可修改）
| 分类 | 技术选型 | 核心用途 |
|------|----------|----------|
| 核心框架 | Vue3.4 + Vite + `<script setup>` | 工程化开发、组件化渲染 |
| 状态管理 | Pinia | 全局管理代码、可视化状态、LeetCode 题目配置 |
| UI 组件 | Element Plus | 布局、按钮、表单、弹窗、控制台面板 |
| 代码编辑 | Monaco Editor（vue3 适配） | LeetCode 代码编写、语法高亮、逐行标记 |
| 2D 渲染 | 原生 Canvas 2D API | 代码快照、执行日志、数据轨迹、测试用例展示 |
| 3D 渲染 | Three.js r160+ | 数组/链表/二叉树 3D 节点、动画、连线渲染 |
| 核心能力 | 原生 JS 代码解析 + 安全沙箱 | 解析 LeetCode 代码、隔离执行、节点联动调度 |
| 动画控制 | requestAnimationFrame | 2D+3D 帧同步渲染，无延迟、无卡顿 |

---

## 二、AI 核心强制规则（LeetCode 专属）
1. **LeetCode 100% 适配**
   - 自动识别 LeetCode 标准函数：`twoSum`/`reverseList`/`inorderTraversal` 等
   - 自动识别内置数据结构：`ListNode`(链表)、`TreeNode`(二叉树)
   - 自动加载 LeetCode 测试用例、匹配输入输出格式
2. **可视化强关联**
   一行 LeetCode 代码 = 2D 代码高亮 + 3D 节点操作（生成/移动/变色/连线）
3. **2D+3D 分工**
   - 2D：代码编辑、执行日志、测试用例、数据平面快照
   - 3D：数据结构立体可视化、动态动画、节点关联
4. **安全规范**
   沙箱执行代码，禁止恶意操作，无全局污染

---

## 三、全局架构设计
```
src/
├── api/              # 模拟 LeetCode 题目/测试用例接口
├── components/        # 核心业务组件
│   ├── CodeEditor.vue      # LeetCode 代码编辑器（Monaco）
│   ├── VisualCanvas2D.vue  # 2D 可视化组件
│   ├── VisualThree3D.vue   # 3D 可视化组件
│   └── LeetCodeTestCase.vue # 测试用例管理
├── stores/            # Pinia 状态
│   ├── codeStore.js   # 代码/执行状态
│   └── visualStore.js # 2D+3D 可视化状态
├── utils/             # 工具库
│   ├── codeParser.js  # LeetCode 代码解析器
│   ├── sandBox.js     # 安全沙箱执行
│   └── syncCore.js    # 代码-2D-3D 联动核心
├── views/
│   └── Index.vue      # 主页面
├── App.vue
└── main.js
```

---

## 四、核心功能模块（优先级：高→低）
### 模块 1：LeetCode 代码编辑器（最高优先级）
1. 集成 Monaco Editor，默认填充 **LeetCode 官方 JS 代码模板**
2. 支持直接粘贴 LeetCode 刷题代码，自动语法校验、高亮
3. 逐行执行标记：当前行高亮黄、已执行灰、完成绿
4. 一键重置为 LeetCode 原始模板

### 模块 2：LeetCode 代码自动解析（最高优先级）
1. 解析范围：数组、链表、二叉树、循环、判断、赋值、交换
2. 自动识别：`ListNode`/`TreeNode`、函数入参、循环体、核心逻辑
3. 输出执行步骤队列，用于驱动可视化
4. 语法错误实时提示，定位代码行

### 模块 3：2D+3D 融合可视化（最高优先级）
#### 3.1 2D Canvas 能力
- 实时绘制 LeetCode 数据结构平面快照
- 输出执行日志：对应代码行+节点操作
- 展示测试用例输入输出
#### 3.2 3D Three.js 能力
- 数组：3D 柱状体（高度=数值）
- 链表：球体节点 + 圆柱体指针连线
- 二叉树：层级球体节点 + 父子连线
- 动画：交换位移、高亮变色、节点生成/销毁
#### 3.3 联动规则
- 初始化 → 生成 3D 节点
- 循环/比较 → 节点标黄
- 赋值/交换 → 节点动画
- 执行完成 → 全部节点变绿

### 模块 4：执行控制中心
1. 按钮：运行、单步执行、暂停、重置、速度调节
2. 绑定 LeetCode 测试用例，一键运行校验
3. 执行状态实时展示：执行中/完成/错误

### 模块 5：LeetCode 刷题辅助（优化核心）
1. 内置高频 LeetCode 题目代码模板
2. 自动匹配测试用例，本地判题
3. 执行结果对标 LeetCode 官方输出
4. 算法思路/复杂度提示面板

---

## 五、Vue3 编码强制规范
1. 统一使用 `<script setup>` 语法，无 Options API
2. 组件化拆分：代码编辑器/2D/3D 独立组件，解耦维护
3. Pinia 统一管理全局状态，禁止全局变量
4. 可视化逻辑抽离到 `utils/`，组件仅负责渲染
5. 全中文注释，标注 **LeetCode 代码 ↔ 可视化节点** 关联关系
6. 响应式布局，适配 PC 端刷题场景

---

## 六、AI 一键生成指令（直接复制）
```
严格按照此文档生成 Vue3+Vite 完整项目：
1. 使用 Vue3 <script setup> + Pinia + Element Plus + Monaco Editor
2. 实现 LeetCode 专属代码编辑器，支持粘贴官方 JS 代码
3. 自动解析 LeetCode 代码，识别 ListNode/TreeNode/数组/循环
4. 集成 Canvas 2D + Three.js 实现 2D+3D 融合可视化
5. 代码逐行执行与 2D 高亮、3D 节点实时强关联
6. 支持运行/单步/暂停/重置、测试用例运行、本地判题
7. 输出完整可运行项目，包含所有文件、依赖、配置
8. 项目可直接 npm install 安装依赖并运行
```

---

## 七、快速运行命令
```bash
npm create vite@latest leetcode-algo-visual -- --template vue
cd leetcode-algo-visual
npm install pinia element-plus three monaco-editor-vue3
npm run dev
```

---
