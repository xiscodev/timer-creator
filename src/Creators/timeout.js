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
 * @param {string} name
 */
const _removeTimeout = (name) => {
  removeFromStore(_store, name)
}

/**
 * @access public
 * @function existTimeout
 * @description Checks whether exist timeout with given name.
 * @param {string} name
 * @returns {boolean}
 */
const existTimeout = (name) => {
  return isStored(_store, name)
}

/**
 * @access public
 * @function getTimeout
 * @description Retrieves timeout value for given name.
 * @param {string} name
 * @returns {number}
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
 * @param {string} name
 * @param {Function} callback
 * @param {TimeUnit} waitTime
 * @param {string|Array|NULL} args
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
 * @param {string} name
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
