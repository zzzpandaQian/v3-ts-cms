import axios, { AxiosInstance } from 'axios'
import { ElLoading } from 'element-plus'
import { RequestConfig, RequestInterceptor } from './types'

class HttpRequest {
  instance: AxiosInstance
  interceptor?: RequestInterceptor
  // 暂未找到相关类型
  loading?: any
  constructor(config: RequestConfig) {
    this.instance = axios.create(config)
    this.interceptor = config?.interceptors
  }
  request(config: RequestConfig) {
    // 若传递了false则取消loading
    // ??表示若config.showload为undefiend或者null
    if (config.showload ?? true) {
      this.loading = ElLoading.service({
        text: '加载中...',
        lock: true,
        background: 'rgba(0,0,0,.1)'
      })
    }
    // 个体单独的拦截器优先执行
    if (config?.interceptors?.reuqestInterceptor) {
      config = config.interceptors.reuqestInterceptor(config)
    }
    this.instance.interceptors.request.use(
      (config: RequestConfig) => {
        console.log('实例request拦截器')
        return config
      },
      (err) => {
        this.loading?.close()
      }
    )
    this.instance.interceptors.response.use(
      (response) => {
        // 这一步判断个体的config中是否自定义了拦截器
        // 若存在拦截器优先执行个体拦截器
        this.loading?.close()
        if (config?.interceptors?.responseInterceptor) {
          response = config.interceptors.responseInterceptor(response)
        }
        console.log('实例response拦截')
        return response
      },
      (err) => {
        this.loading?.close()
      }
    )
    return this.instance.request(config)
  }
}

export default HttpRequest
