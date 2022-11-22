# funny-im

### 项目介绍

一个在线聊天工具， 将使用 webRTC 来构建实时游戏/视频/聊天

### 技术栈介绍

- 架构： `vite@3`
- 核心框架： `react@18`, `react-route@6`, `@reduxjs/toolkit`
- ui 库： `antd`
- 语法规范：`typescipt`, `eslint`, `husky`, `lint-staged`
- 网络： `socketIO`，`webRTC`, `axios`
- 工具库： `lodash`, `ahooks`, `dayjs`...

### eslint 校验

当前项目使用 `eslint`作语法检测， 且使用了`husky` + `lint-staged` 作为 commit 前检测

可能问题：

- `husky`失效: 如果发现 commit 代码时， 明明已确认存在错误， 但并未触发`pre-commit`的钩子， 请检查当前.husky/pre-commit 文件是否有读写权限， 解决方法自行百度

- `eslint`无法正常使用: 请查看 .vscode 查看当前工作区是否正常启用了`eslint`， 并查看`eslint`的解析文件后缀中是否有所属类型 ".ts, tsx..." 具体参考文档

### 项目规范

- 类型规范 `typescript`

  - 所有的公共类型同意在 interface 中进行维护， 必须使用 declare 全局导出， 避免类型导入导出混乱， 公共类型 首字母 `I`

  - 使用`typescript`尽可能做好类型规划， 避免创建多个同名类型

  - 所有的函数须保持返回类型统一！（包括`promise catch`）

  - 函数入参类型中尽量只定义需要的字段类型，未使用的字段不做类型限制

|

- 路由规范 `react-router v6.4`

  - 禁止相对路由的写法！ （`go="../../login"`） 要求所有的跳转必须使用完整的路由地址

  - 路由定义时，请使用完整的路由地址！ 参考 `/src/router/path` 中定义

|

- `css`规范
  - `z-index`
    - 弹窗（全局遮罩）类定位层级 100+
    - 局部遮罩层 50~100 如： loading 容器...
    - 常规定位 0~50 如：流星效果，角标定位...
