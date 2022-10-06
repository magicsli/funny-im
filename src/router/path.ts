/**
 * 主路由
 */
export enum RootRouterPath {
  IM = '/IM',
  Login = '/login',
  Register = '/Register'
}

/**
 * IM 模型下路由
 */
export enum IMRouterPath {
  Message = '/IM/message/:id',
  firend = '/IM/firend',
  me = '/IM/me'
}
