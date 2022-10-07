import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'

// const cancelToken = axios.CancelToken

const showStatus = (status: number) => {
  let message = ''
  switch (status) {
  case 400:
    message = '请求错误(400)'
    break
  case 401:
    message = '未授权，请重新登录(401)'
    break
  case 402:
    message = '拒绝访问(402)'
    break
  case 404:
    message = '请求出错(404)'
    break
  case 408:
    message = '请求超时(408)'
    break
  case 500:
    message = '服务器错误(500)'
    break
  case 501:
    message = '服务未实现(501)'
    break
  case 502:
    message = '网络错误(502)'
    break
  case 503:
    message = '服务不可用(503)'
    break
  case 504:
    message = '网络超时(504)'
    break
  case 505:
    message = 'HTTP版本不受支持(505)'
    break

  default:
    message = `连接出错(${status})!`
  }
  return `${message}，请检查网络或联系管理员！`
}

const buildAxiosInstance = () => {
  return axios.create({
    timeout: 10000,
    timeoutErrorMessage: '连接超时',
    headers: {
      'Content-Type': 'application/json'
    },
    responseType: 'json',
    baseURL: '/api'
  })
}

const buildResponseHanlder = (axiosCtx: AxiosInstance) => {
  axiosCtx.interceptors.response.use(
    response => {
      const status = response.status
      let msg = ''
      if (status < 200 || (status >= 300 && status != 401 && status != 500)) {
        // 处理http错误，抛到业务代码
        msg = showStatus(status)
        if (typeof response.data === 'string') {
          response.data = { _msg: msg }
        } else {
          response.data.msg = msg
        }
        return response
      } else if (status == 200) {
        return response
      } else if (status == 500) {
        msg = showStatus(status)
        response.data = { _msg: msg }
        // router.replace({ name: 'exception', query: { type: 500 } })
        return response
      }
    },

    err => {
      if (err.code === 'ERR_CANCELED') {
        err.message = '请求已被手动中止'
        return Promise.reject(err)
      }

      err.message = showStatus(err.response?.status)
      return Promise.reject(err)
    }
  )
}

const buildRequestHanlder = (axiosCtx: AxiosInstance) => {
  // 请求拦截器
  axiosCtx.interceptors.request.use(
    config => config,
    err => {
      err.message = '服务器异常，请联系管理员！'
      // 错误抛到业务代码
      return Promise.reject(err)
    }
  )
}

/**
 * 请求实例， 后续所有的请求都需要基于此类进行拓展
 */
export default class Request {
  private axios: AxiosInstance

  constructor() {
    const axiosInstance = buildAxiosInstance()

    /**
     * 注册响应回调
     */
    buildResponseHanlder(axiosInstance)

    /**
     * 注册请求回调
     */
    buildRequestHanlder(axiosInstance)

    this.axios = axiosInstance
  }

  /**
   * get请求
   * @param url 请求地址
   * @param options get的请求参数
   * @returns get请求实例
   */
  protected get<R = any, T = unknown>(url: string, options?: AxiosRequestConfig<T>) {
    let cancel: () => void
    const getInstance = this.axios.get(url, {
      cancelToken: new axios.CancelToken(cancelHanlder => {
        cancel = cancelHanlder
      }),
      ...options
    }) as Promise<AxiosResponse<R>> & { cancel: () => void }

    getInstance.cancel = cancel!

    return getInstance
  }

  /**
   * post请求
   * @param url 请求地址
   * @param data 请求体中的参数
   * @param config post请求配置
   * @returns post请求实例
   */
  protected post<R = any, T = unknown>(url: string, data?: T, config?: AxiosRequestConfig<T>) {
    let cancel: () => void

    const getInstance = this.axios.post(url, data, {
      cancelToken: new axios.CancelToken(cancelHanlder => {
        cancel = cancelHanlder
      }),
      ...config
    }) as Promise<AxiosResponse<R>> & { cancel: () => void }
    getInstance.cancel = cancel!

    return getInstance
  }

  /**
   * put请求
   * @param url 请求地址
   * @param data 请求体中的参数
   * @param config put请求配置
   * @returns put请求实例
   */
  protected put<R = any, T = unknown>(url: string, data?: T, config?: AxiosRequestConfig<T>) {
    let cancel: () => void

    const getInstance = this.axios.put(url, data, {
      cancelToken: new axios.CancelToken(cancelHanlder => {
        cancel = cancelHanlder
      }),
      ...config
    }) as Promise<AxiosResponse<R>> & { cancel: () => void }

    getInstance.cancel = cancel!

    return getInstance
  }

  /**
   * delete请求
   * @param url 请求地址
   * @param data 请求体中的参数 (注意！ delete 不推荐设置参数)
   * @param config delete请求配置
   * @returns delete请求实例
   */
  protected delete<R = string, T = unknown>(url: string, data?: T, config?: AxiosRequestConfig<T>) {
    let cancel: () => void

    const getInstance = this.axios.delete(url, {
      cancelToken: new axios.CancelToken(cancelHanlder => {
        cancel = cancelHanlder
      }),
      data,
      ...config
    }) as Promise<AxiosResponse<R>> & { cancel: () => void }

    getInstance.cancel = cancel!

    return getInstance
  }

  protected filter<T = unknown>(response: AxiosResponse<T>) {
    return response.data
  }
}
