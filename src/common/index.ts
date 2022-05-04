import HttpRequest from './http'
import { BASE_URL, HEADERS, TIMEOUT } from './http/config'

const api = new HttpRequest({
  baseURL: BASE_URL,
  timeout: TIMEOUT,
  headers: HEADERS,
  showload: true
})

export default api
