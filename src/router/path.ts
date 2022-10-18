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
  Message = '/IM/message/:id',
  firend = '/IM/friend',
  me = '/IM/me'
}
