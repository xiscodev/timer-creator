import { initializeStore, _clearStore, removeFromStore, isStored, getStoredItem, pushToStore  } from '../Helpers/store'
import launchCallback from '../Helpers/callback'

/**
 * @access private
 * @description Store for timeouts.
 * @type {Map}
 */
const _store = initializeStore()

/**
 * @access private
 * @function _resetStore
 * @description Clears timeout store.
 */
const _resetStore = () => {
  _clearStore(_store)
}

/**
 * @access private
 * @function _removeTimeout
 * @description Removes stored timeout with given name.
 * @param {string} name timeout name
 */
const _removeTimeout = (name) => {
  removeFromStore(_store, name)
}

/**
 * @access public
 * @function existTimeout
 * @description Checks whether exist timeout with given name.
 * @param {string} name timeout name
 * @returns {boolean} true or false wheter timeout is stored or not
 */
const existTimeout = (name) => {
  return isStored(_store, name)
}

/**
 * @access public
 * @function getTimeout
 * @description Retrieves timeout value for given name.
 * @param {string} name timeout name
 * @returns {number} timeout number reference
 */
const getTimeout = (name) => {
  return getStoredItem(_store, name)
}

/**
 * @access public
 * @function createTimeout
 * @description Creates and store timeout object with given name,
 * to execute callback function on the waitTime specified with given args,
 * its removed from store when callback is executed.
 * @param {string} name timeout name
 * @param {Function} callback the function to be executed as a callback
 * @param {number} waitTime the waiting time for the timeout
 * @param {string|Array|null} args arguments to be passed to the callback function
 */
const createTimeout = (name, callback, waitTime, args) => {
  if (!existTimeout(name)) {
    const timeoutId = setTimeout(() => {
      _removeTimeout(name)
      launchCallback(callback, args)
    }, waitTime)
    pushToStore(_store, name, timeoutId)
  }
}

/**
 * @access public
 * @function destroyTimeout
 * @description Destroy timeout with given name and removes it from store.
 * @param {string} name timeout name
 */
const destroyTimeout = (name) => {
  if (existTimeout(name)) {
    clearTimeout(getTimeout(name))
    _removeTimeout(name)
  }
}

export {
  _store,
  _resetStore,
  _removeTimeout,
  existTimeout,
  getTimeout,
  createTimeout,
  destroyTimeout,
}
