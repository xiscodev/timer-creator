/* eslint-disable no-prototype-builtins */
const isStored = (store, storedKey) => {
  let exist = false
  for (let index = 0; index < store.length; index++) {
    const stored = store[index]
    if (stored.hasOwnProperty(storedKey)) {
      exist = true
      break
    }
  }
  return exist
}

const getStoredIndex = (store, storedKey) => {
  let storedIndex = null
  for (let index = 0; index < store.length; index++) {
    const stored = store[index]
    if (stored.hasOwnProperty(storedKey)) {
      storedIndex = index
      break
    }
  }
  return storedIndex
}

const getStoredValue = (store, storedKey) => {
  let storedValue = null
  for (let index = 0; index < store.length; index++) {
    const stored = store[index]
    if (stored.hasOwnProperty(storedKey)) {
      storedValue = store[index][storedKey]
      break
    }
  }
  return storedValue
}

const getStoredObject = (store, storedIndex) => {
  return store[storedIndex]
}

const pushToStore = (store, objectToStore) => {
  store.push(objectToStore)
}

const removeFromStore = (store, storedKey) => {
  const storedIndex = getStoredIndex(store, storedKey)
  storedIndex !== null && store.splice(storedIndex, 1)
}

export {
  isStored,
  getStoredIndex,
  getStoredValue,
  getStoredObject,
  pushToStore,
  removeFromStore
}
