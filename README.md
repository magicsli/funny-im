# funny-im

### 项目介绍
  一个在线聊天工具， 将使用webRTC来构建实时游戏/视频/聊天

### 技术栈介绍

- 架构： `vite@3`
- 核心框架： `react@18`, `react-route@6`, `@reduxjs/toolkit`
- ui库：  `antd`
- 语法规范：`typescipt`, `eslint`, `husky`, `lint-staged`
- 网络： `socketIO`，`webRTC`, `axios`
- 工具库： `lodash`, `ahooks`, `dayjs`...

### eslint校验

  当前项目使用 `eslint`作语法检测， 且使用了`husky` + `lint-staged` 作为commit前检测
  
  可能问题：

- `husky`失效:    如果发现commit代码时， 明明已确认存在错误， 但并未触发`pre-commit`的钩子，  请检查当前.husky/pre-commit是否有读取权限， 解决方法自行百度

- `eslint`无法正常使用:   请查看 .vscode 查看当前工作区是否正常启用了`eslint`， 并查看`eslint`的解析文件后缀中是否有所属类型 ".ts, tsx..." 具体参考文档
