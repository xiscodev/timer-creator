import { isStored, pushToStore, removeFromStore, getStoredValue } from 'Helpers/store'
import launchCallback from 'Helpers/callback'

/**
 * @access private
 * @description Store for timeouts.
 * @type {Array}
 */
const timeoutStore = []

/**
 * @access public
 * @function existTimeout
 * @description Checks whether exist timeout with given timeoutName.
 * @param {string} timeoutName
 * @returns {boolean}
 */
const existTimeout = (timeoutName) => {
  return isStored(timeoutStore, timeoutName)
}

/**
 * @access private
 * @function _appendTimeout
 * @description Push to store given timeoutObject.
 * @param {Object} timeoutObject
 */
const _appendTimeout = (timeoutObject) => {
  pushToStore(timeoutStore, timeoutObject)
}

/**
 * @access private
 * @function _removeTimeout
 * @description Removes stored timeout with given timeoutName.
 * @param {string} timeoutName
 */
const _removeTimeout = (timeoutName) => {
  removeFromStore(timeoutStore, timeoutName)
}

/**
 * @access public
 * @function getTimeout
 * @description Retrieves timeout value for given timeoutName.
 * @param {string} timeoutName
 * @returns {number}
 */
const getTimeout = (timeoutName) => {
  return getStoredValue(timeoutStore, timeoutName)
}

/**
 * @access public
 * @function createTimeout
 * @description Creates and store timeout object with given timeoutName,
 * to execute callback function on the amountTime specified with given args,
 * its removed from store when callback is executed.
 * @param {string} timeoutName
 * @param {TimeUnit} amountTime
 * @param {Function} callback
 * @param {string|Array|NULL} args
 */
const createTimeout = (timeoutName, amountTime, callback, args) => {
  if (!existTimeout(timeoutName)) {
    const timeoutId = setTimeout(() => {
      _removeTimeout(timeoutName) // remove from store on timeout
      launchCallback(callback, args)
    }, amountTime)
    _appendTimeout({ [timeoutName]: timeoutId })
  }
}

/**
 * @access public
 * @function destroyTimeout
 * @description Destroy timeout with given timeoutName and removes it from store.
 * @param {string} timeoutName
 */
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
