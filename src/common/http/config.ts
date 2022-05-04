const BASE_URL =
  process.env.NODE_ENV == 'development' ? 'http://127.0.0.1:8000/' : ''

const TIMEOUT = 2000
const HEADERS = {
  Authorization: '',
  'Content-Type': 'application/json;charset=UTF-8;',
  'X-Requested-With': 'XMLHttpRequest'
}

export { BASE_URL, TIMEOUT, HEADERS }
