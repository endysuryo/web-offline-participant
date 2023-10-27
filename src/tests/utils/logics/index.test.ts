import { describe, expect } from '@jest/globals'
import { checkQProStudyUrl } from '../../../libs/logics/index'

describe('checkQProStudyUrl', () => {
  it('should return true if URL includes "questionpro"', () => {
    const url = 'https://www.example.com/questionpro/study'
    const result = checkQProStudyUrl(url)
    expect(result).toBe(true)
  })

  it('should return false if URL does not include "questionpro"', () => {
    const url = 'https://www.example.com/other/study'
    const result = checkQProStudyUrl(url)
    expect(result).toBe(false)
  })
})
