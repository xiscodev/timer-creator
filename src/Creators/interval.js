import { initializeStore, _clearStore, removeFromStore, isStored, getStoredItem, pushToStore } from '../Helpers/store'
import launchCallback from '../Helpers/callback'

/**
 * @access private
 * @description Store for intervals.
 * @type {Map}
 */
const _store = initializeStore()

/**
 * @access private
 * @function _resetStore
 * @description Clears interval _store.
 */
const _resetStore = () => {
  _clearStore(_store)
}

/**
 * @access private
 * @function _removeInterval
 * @description Removes stored intervals with given name.
 * @param {string} name interval name
 */
const _removeInterval = (name) => {
  removeFromStore(_store, name)
}

/**
 * @access public
 * @function existInterval
 * @description Checks whether exist interval with given name.
 * @param {string} name interval name
 * @returns {boolean} true or false wheter interval is stored or not
 */
const existInterval = (name) => {
  return isStored(_store, name)
}

/**
 * @access public
 * @function getInterval
 * @description Retrieves interval value for given name.
 * @param {string} name interval name
 * @returns {number} interval number reference
 */
const getInterval = (name) => {
  return getStoredItem(_store, name)
}

/**
 * @access public
 * @function createInterval
 * @description Creates and _store interval object with given name,
 * to execute callback function on the waitTime specified with given args.
 * @param {string} name interval name
 * @param {Function} callback the function to be executed as a callback
 * @param {number} waitTime the waiting time for the interval
 * @param {string|Array|null} args arguments to be passed to the callback function
 */
const createInterval = (name, callback, waitTime, args) => {
  if (!existInterval(name)) {
    const reference = setInterval(() => {
      launchCallback(callback, args)
    }, waitTime)
    pushToStore(_store, name, reference)
  }
}

/**
 * @access public
 * @function destroyInterval
 * @description Destroy interval with given name and removes it from _store.
 * @param {string} name interval name
 */
const destroyInterval = (name) => {
  if (existInterval(name)) {
    clearInterval(getInterval(name))
    _removeInterval(name)
  }
}

export {
  _store,
  _resetStore,
  _removeInterval,
  existInterval,
  getInterval,
  createInterval,
  destroyInterval,
}
