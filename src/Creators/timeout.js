import { isStored, pushToStore, removeFromStore, getStoredValue } from 'Helpers/store'
import { launchCallback } from 'Helpers/utils'

const timeoutStore = []

const existTimeout = (timeoutName) => {
  return isStored(timeoutStore, timeoutName)
}

const _appendTimeout = (timeoutObject) => {
  pushToStore(timeoutStore, timeoutObject)
}

const _removeTimeout = (timeoutName) => {
  removeFromStore(timeoutStore, timeoutName)
}

// const _getTimeoutObject = (timeoutName) => {
//   const timeoutIndex = getStoredIndex(timeoutStore, timeoutName)
//   return timeoutIndex !== null && getStoredObject(timeoutStore, timeoutIndex)
// }

const getTimeout = (timeoutName) => {
  return getStoredValue(timeoutStore, timeoutName)
}

const createTimeout = (timeoutName, amountTime, callback, args) => {
  if (!existTimeout(timeoutName)) {
    const timeoutId = setTimeout(() => {
      _removeTimeout(timeoutName) // remove from store on timeout
      launchCallback(callback, args)
    }, amountTime)
    _appendTimeout({ [timeoutName]: timeoutId })
  }
}

const destroyTimeout = (timeoutName) => {
  if (existTimeout(timeoutName)) {
    clearTimeout(getTimeout(timeoutName))
    _removeTimeout(timeoutName)
  }
}

export {
  existTimeout,
  getTimeout,
  createTimeout,
  destroyTimeout
}
