import axios from 'axios'

const httpClient = axios.create({
  baseURL: 'http://localhost:8080',
  withCredentials: true,
})

class ApiService {
  constructor(apiurl) {
    this.apiurl = apiurl
  }

  static registrarToken(token) {
    if (token) {
      httpClient.defaults.headers.common['Authorization'] = `Bearer ${token}`
    }
  }

  post(url, objeto) {
    const requstUrl = `${this.apiurl}${url}`
    return httpClient.post(requstUrl, objeto)
  }

  put(url, objeto) {
    const requstUrl = `${this.apiurl}${url}`
    return httpClient.put(requstUrl, objeto)
  }

  delete(url) {
    const requstUrl = `${this.apiurl}${url}`
    return httpClient.delete(requstUrl)
  }

  get(url) {
    const requstUrl = `${this.apiurl}${url}`
    return httpClient.get(requstUrl)
  }
}

export default ApiService
