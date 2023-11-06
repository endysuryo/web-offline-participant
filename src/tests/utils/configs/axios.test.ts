import axiosInstance from '@/libs/configs/axios'

describe('axiosInstance', () => {
  it('should have a base URL', () => {
    expect(axiosInstance.defaults.baseURL).toBe(process.env.NEXT_PUBLIC_API_URL)
  })

  it('should have default headers', () => {
    expect(axiosInstance.defaults.headers['Content-Type']).toBe('application/json')
    expect(axiosInstance.defaults.headers.Accept).toBe('application/json, text/plain, */*')
  })
})
