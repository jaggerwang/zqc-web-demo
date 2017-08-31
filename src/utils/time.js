/**
 * 在球场
 * zaiqiuchang.com
 */

export function sleep (time) {
  return new Promise(resolve => setTimeout(resolve, time))
}

export function waitingFor ({condition, maxTimes = 10}) {
  let times = 0
  let timer = setInterval(() => {
    if (++times > maxTimes * 10) {
      clearInterval(timer)
      return Promise.reject(new Error('timeout'))
    }

    if (condition()) {
      clearInterval(timer)
      return Promise.resolve()
    }
  }, 100)
}
