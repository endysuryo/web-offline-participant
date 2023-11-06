import axios, { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from 'axios'

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json, text/plain, */*',
  },
})

const onRequest = async (request: InternalAxiosRequestConfig<any>) => {
  return request
}

const onRequestError = (error: AxiosError) => Promise.reject(error)

const onResponse = (response: AxiosResponse) => response

const onResponseError = (error: AxiosError) => {
  return Promise.reject(error)
}

axiosInstance.interceptors.request.use(onRequest, onRequestError)
axiosInstance.interceptors.response.use(onResponse, onResponseError)

export default axiosInstance
