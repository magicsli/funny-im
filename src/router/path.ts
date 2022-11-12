/**
 * 主路由
 */
export enum RootRouterPath {
  IM = '/IM',
  Login = '/login',
  Register = '/register'
}

/**
 * IM 模型下路由
 */
export enum IMRouterPath {
  Message = '/IM/message',
  firend = '/IM/friend',
  me = '/IM/me'
}

/**
 * IM - Message 模型下路由
 */
export enum MessageRouterPath {
  Entry = '/IM/message', // entry 默认路由
  Room = '/IM/message/:id' // 聊天室内容
}
