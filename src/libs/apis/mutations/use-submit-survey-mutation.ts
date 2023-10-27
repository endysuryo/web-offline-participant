import { useMutation, useQuery } from '@tanstack/react-query'
import axiosInstance from '../../configs/axios'

export interface ISubmitSurveyPayload {
  submission_id: number
  answer: boolean
}

export interface ISubmitSurveyResult {
  status: number
  message: string
}

async function submitSurveyAPI({
  submission_id,
  answer,
}: ISubmitSurveyPayload): Promise<ISubmitSurveyResult> {
  try {
    const result = await axiosInstance({
      url: '/survey',
      method: 'post',
      params: {
        submission_id,
        answer,
      },
    })

    return result?.data?.data
  } catch (error: any) {
    throw error?.response?.data?.message
  }
}

export default function useSubmitSurvey({ submission_id, answer }: ISubmitSurveyPayload) {
  const { mutate, error } = useMutation({
    mutationKey: [submission_id, answer],
    mutationFn: () => submitSurveyAPI({ submission_id, answer }),
  })

  return {
    mutate,
    error,
  }
}
