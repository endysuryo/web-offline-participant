function checkQProStudyUrl(url: string) {
  if (url?.includes('questionpro')) {
    return true
  }

  return false
}

export { checkQProStudyUrl }
