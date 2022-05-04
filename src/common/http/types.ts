import { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios'
export interface RequestInterceptor {
  reuqestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestErrorInterceptor?: (error: AxiosError) => void
  responseInterceptor?: (response: AxiosResponse) => AxiosResponse
  responseErrorInterceptor?: <T>(error: T) => T
}

export interface RequestConfig extends AxiosRequestConfig {
  interceptors?: RequestInterceptor
  showload?: boolean
}
