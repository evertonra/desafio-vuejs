import axios from "axios"

const axiosInstance = axios.create({
  method:'GET',
  baseURL: "https://bis365.com.br/bid365/api/v1/auctions/",
  headers: {
    'Content-Type': 'application/json',
    Accept: '*/*',
    Authorization: 'Bearer 23a20977-9368-4f13-a008-d556163fa8df',
    app: '23a20977-9368-4f13-a008-d556163fa8df'
  }
  })

export const api = {
  get(endpoint) {
    return axiosInstance.get(endpoint)
  },
  post(endpoint, body) {
    return axiosInstance.post(endpoint, body)
  },
  put(endpoint, body) {
    return axiosInstance.put(endpoint, body)
  }
}
