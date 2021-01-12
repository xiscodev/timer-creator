const _isMap = (toEvaluate) => {
  return !!toEvaluate && toEvaluate.toString() === '[object Map]'
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
  pushToStore,
  getStoredItem,
  isStored,
  removeFromStore
}
