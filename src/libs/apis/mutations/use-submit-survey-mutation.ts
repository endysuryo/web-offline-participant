import { useMutation } from '@tanstack/react-query'
import axiosInstance from '../../configs/axios'

export type TSubmitSurveyPayload = {
  submission_id: number
  answer: boolean
}

export type TSubmitSurveyResult = {
  status: number
  message: string
}

async function submitSurveyAPI({
  submission_id,
  answer,
}: TSubmitSurveyPayload): Promise<TSubmitSurveyResult> {
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

export default function useSubmitSurvey({ submission_id, answer }: TSubmitSurveyPayload) {
  const { mutate, error } = useMutation({
    mutationKey: [submission_id, answer],
    mutationFn: () => submitSurveyAPI({ submission_id, answer }),
  })

  return {
    mutate,
    error,
  }
}
