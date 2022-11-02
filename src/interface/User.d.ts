
/**
 * 用户信息
 */
declare interface IUser {
	/**
	 * 用户名
	 */
  name: string

	/**
	 * 用户ID
	 */
  user_id: string

	/**
	 * 头像
	 */
  avatar?: string

	/**
	 * 创建时间
	 */
  create_time: number

	/**
	 * 是否为临时账号
	 */
	_temp?: boolean
	
	/**
	 * 过期时间
	 */
	expire_time?: number 
}