import { isStored, pushToStore, removeFromStore, getStoredValue } from 'Helpers/store'
import launchCallback from 'Helpers/callback'

/**
 * @access private
 * @description Store for intervals.
 * @type {Array}
 */
const intervalStore = []

/**
 * @access public
 * @function existInterval
 * @description Checks whether exist interval with given intervalName.
 * @param {string} intervalName
 * @returns {boolean}
 */
const existInterval = (intervalName) => {
  return isStored(intervalStore, intervalName)
}

/**
 * @access private
 * @function _appendInterval
 * @description Push to store given intervalObject.
 * @param {Object} intervalObject
 */
const _appendInterval = (intervalObject) => {
  pushToStore(intervalStore, intervalObject)
}

/**
 * @access private
 * @function _removeInterval
 * @description Removes stored intervals with given intervalName.
 * @param {string} intervalName
 */
const _removeInterval = (intervalName) => {
  removeFromStore(intervalStore, intervalName)
}

/**
 * @access public
 * @function getInterval
 * @description Retrieves interval value for given intervalName.
 * @param {string} intervalName
 * @returns {number}
 */
const getInterval = (intervalName) => {
  return getStoredValue(intervalStore, intervalName)
}

/**
 * @access public
 * @function createInterval
 * @description Creates and store interval object with given intervalName,
 * to execute callback function on the amountTime specified with given args.
 * @param {string} intervalName
 * @param {TimeUnit} amountTime
 * @param {Function} callback
 * @param {string|Array|NULL} args
 */
const createInterval = (intervalName, amountTime, callback, args) => {
  if (!existInterval(intervalName)) {
    const intervalId = setInterval(() => { launchCallback(callback, args) }, amountTime)
    _appendInterval({ [intervalName]: intervalId })
  }
}

/**
 * @access public
 * @function destroyInterval
 * @description Destroy interval with given intervalName and removes it from store.
 * @param {string} intervalName
 */
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
