/**
 * 在球场
 * zaiqiuchang.com
 */

export function inputState (error, isSubmitted) {
  if (error === undefined) {
    return ''
  } else {
    if (error.length === 0) {
      return 'success'
    } else {
      if (isSubmitted) {
        return 'danger'
      } else {
        return 'warning'
      }
    }
  }
}

export function inputFeedback (error) {
  if (error === undefined) {
    return ''
  } else {
    return error.join(' ')
  }
}
