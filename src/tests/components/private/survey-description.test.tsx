import '@testing-library/jest-dom'
import { SurveyDescription } from '@/components/private'
import { render } from '@testing-library/react'

describe('SurveyDescription', () => {
  it('renders title', () => {
    const { getByText } = render(<SurveyDescription title='My Survey' />)
    const titleElement = getByText('My Survey')
    expect(titleElement).toBeInTheDocument()
  })

  it('renders description and time when utmSource and time are provided', () => {
    const { getByText } = render(
      <SurveyDescription title='My Survey' utmSource='source' time='10' />,
    )

    const descriptionElement = getByText('Kami ingin meminta pendapat Anda.')
    const timeElement = getByText('10 menit')

    expect(descriptionElement).toBeInTheDocument()
    expect(timeElement).toBeInTheDocument()
  })

  it('does not render description and time when utmSource and time are not provided', () => {
    const { queryByText } = render(<SurveyDescription title='My Survey' />)
    const descriptionElement = queryByText('Kami ingin meminta pendapat Anda.')
    const timeElement = queryByText('Waktu pengisian survei')
    expect(descriptionElement).toBeNull()
    expect(timeElement).toBeNull()
  })
})
