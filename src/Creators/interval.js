import { isStored, pushToStore, removeFromStore, getStoredValue } from 'Helpers/store'
import { launchCallback } from 'Helpers/utils'

const intervalStore = []

const existInterval = (intervalName) => {
  return isStored(intervalStore, intervalName)
}

const _appendInterval = (intervalObject) => {
  pushToStore(intervalStore, intervalObject)
}

const _removeInterval = (intervalName) => {
  removeFromStore(intervalStore, intervalName)
}

// const _getIntervalObject = (intervalName) => {
//   const intervalIndex = getStoredIndex(intervalStore, intervalName)
//   return intervalIndex !== null && getStoredObject(intervalStore, intervalIndex)
// }

const getInterval = (intervalName) => {
  return getStoredValue(intervalStore, intervalName)
}

const createInterval = (intervalName, amountTime, callback, args) => {
  if (!existInterval(intervalName)) {
    const intervalId = setInterval(() => { launchCallback(callback, args) }, amountTime)
    _appendInterval({ [intervalName]: intervalId })
  }
}

const destroyInterval = (intervalName) => {
  if (existInterval(intervalName)) {
    clearInterval(getInterval(intervalName))
    _removeInterval(intervalName)
  }
}

export {
  existInterval,
  getInterval,
  createInterval,
  destroyInterval
}
