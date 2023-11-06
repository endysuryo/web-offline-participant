import usePostRegisterMutation, {
  TRegisterPayload,
} from '@/libs/apis/mutations/use-post-register-mutation'
import { act, renderHook, waitFor } from '@testing-library/react'
import { ReactNode } from 'react'
import nock from 'nock'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
})

const wrapper = ({ children }: { children: ReactNode }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
)

describe('PostRegisterMutation', () => {
  afterEach(() => {
    nock.cleanAll()
  })

  it('PostRegisterMutation_UserPass_200', async () => {
    const mockData: TRegisterPayload = {
      studyId: '123456',
      name: 'John Doe',
      phoneNumber: '0812345678',
      recruiterCode: '',
      lat: 0,
      long: 0,
      version: 'v2',
      utmSource: '',
    }

    nock('https://qa-api.populix.co')
      .post(`/offlineStudy/${mockData.studyId}/register`)
      .reply(201, {
        status: 'success',
      })

    const { result } = renderHook(() => usePostRegisterMutation(), { wrapper: wrapper })

    act(() => {
      result.current.mutate(mockData)
    })

    await waitFor(() => {
      return result.current.isSuccess
    })

    expect(result.current.isSuccess)
  })
})
