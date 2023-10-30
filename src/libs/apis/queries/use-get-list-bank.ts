import { useQuery } from '@tanstack/react-query'
import axiosInstance from '../../configs/axios'

export type TGetListBankPayload = {
  size: number
}

export type TBankResult = {
  id: number
  uid: string
  account_number: string
  iban: string
  bank_name: string
  routing_number: string
  swift_bic: string
}

async function getListBankAPI({ size }: TGetListBankPayload): Promise<TBankResult[]> {
  try {
    const result = await axiosInstance({
      url: '/banks',
      method: 'get',
      params: {
        size,
      },
    })

    return result?.data?.data
  } catch (error: any) {
    throw error?.response?.data?.message
  }
}

export default function useGetListBank({ size }: TGetListBankPayload) {
  const { data, isLoading, error } = useQuery({
    queryKey: [size],
    queryFn: () => getListBankAPI({ size }),
  })

  return {
    data,
    isLoading,
    error,
  }
}
