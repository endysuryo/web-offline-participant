import axiosInstance from '@/libs/configs/axios'
import { useMutation } from '@tanstack/react-query'

export type TRegisterPayload = {
  studyId: string | null
  name: string
  phoneNumber: string
  recruiterCode: string
  lat: number
  long: number
  version: string | null
  utmSource: string | null
}

async function postRegisterAPI({
  studyId,
  name,
  phoneNumber,
  recruiterCode,
  lat,
  long,
  version,
  utmSource,
}: TRegisterPayload) {
  try {
    const result = await axiosInstance({
      url: `/offlineStudy/${studyId}/register`,
      method: 'post',
      data: {
        name,
        phoneNumber,
        recruiterCode,
        lat,
        long,
        version,
        utmSource,
      },
    })

    return result?.data
  } catch (error: any) {
    throw error?.response?.data?.errorStatus
  }
}

export default function usePostRegisterMutation() {
  const { mutate, isSuccess, data, error } = useMutation({
    mutationFn: ({
      studyId,
      name,
      phoneNumber,
      recruiterCode,
      lat,
      long,
      version,
      utmSource,
    }: TRegisterPayload) =>
      postRegisterAPI({
        studyId,
        name,
        phoneNumber,
        recruiterCode,
        lat,
        long,
        version,
        utmSource,
      }),
  })

  return {
    mutate,
    data,
    isSuccess,
    error,
  }
}
