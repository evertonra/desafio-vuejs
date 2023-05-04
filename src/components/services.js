import axios from "axios"

const axiosInstance = axios.create({
  baseURL: "http://localhost:3000/data", 
  })



export const api = {
  get(endpoint) {
    return axios.get(endpoint)
  },
  post(endpoint, body) {
    return axiosInstance.post(endpoint, body)
  },
  put(endpoint, body) {
    return axiosInstance.put(endpoint, body)
  }
}