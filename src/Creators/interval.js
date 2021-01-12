import launchCallback from '../Helpers/callback'
import { pushToStore } from '../Helpers/store'

const intervalStore = new Map()

const createInterval = (func, time, args) => {
  const intervalRef = setInterval(() => {
    launchCallback(func, args)
  }, time)
  pushToStore(intervalStore, intervalRef)
}

const existInterval = ''

export {
  createInterval,
  existInterval
}
