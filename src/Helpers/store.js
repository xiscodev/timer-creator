const _isMap = (toEvaluate) => {
  return !!toEvaluate && toEvaluate.toString() === '[object Map]'
}

const _getStoreSize = (store) => {
  return _isMap(store)
    ? store.size
    : null
}

const _isEmptyStore = (store) => {
  return _isMap(store)
    ? _getStoreSize(store) === 0
    : null
}

const _clearStore = (store) => {
  _isMap(store) && store.clear()
}

const initializeStore = () => {
  return new Map()
}

const pushToStore = (store, pushableKey, pushableItem) => {
  if (!!store && !!pushableKey && !!pushableItem) {
    _isMap(store) && store.set(pushableKey, pushableItem)
  }
}

const getStoredItem = (store, storedKey) => {
  return _isMap(store) && store.get(storedKey)
}

const isStored = (store, storedKey) => {
  return _isMap(store) && store.has(storedKey)
}

const removeFromStore = (store, storedKey) => {
  _isMap(store) && store.delete(storedKey)
}

export {
  _isMap,
  _getStoreSize,
  _isEmptyStore,
  _clearStore,
  initializeStore,
  pushToStore,
  getStoredItem,
  isStored,
  removeFromStore,
}
