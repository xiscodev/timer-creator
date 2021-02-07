import {
  _isMap,
  _getStoreSize,
  _isEmptyStore,
  _clearStore,
  initializeStore,
  pushToStore,
  getStoredItem,
  isStored,
  removeFromStore,
} from './store'

// ENVIRONMENT VARIABLES
let store = new Map()
let storedKey = 'correctKey'
let wrongKey = 'incorrectKey'
let element = 'element'
let storeWithElement = new Map()
storeWithElement.set(storedKey, element)

const _resetEnv = () => {
  store = new Map()
  storedKey = 'correctKey'
  wrongKey = 'incorrectKey'
  element = 'element'
  storeWithElement = new Map()
  storeWithElement.set(storedKey, element)
}


// TESTS
describe('_isMap', () => {
  it('should exist', () => {
    expect(_isMap).not.toBeUndefined()
  })

  it('should be a function', () => {
    expect(_isMap())
  })

  it('should be true on Map object', () => {
    expect(_isMap(store)).toBeTruthy()
  })

  it('should be false on non Map object', () => {
    expect(_isMap([])).toBeFalsy()
  })
})


describe('_getStoreSize', () => {
  it('should exist', () => {
    expect(_getStoreSize).not.toBeUndefined()
  })

  it('should be a function', () => {
    expect(_getStoreSize())
  })

  it('should return zero on empty store', () => {
    expect(_getStoreSize(store)).toBe(0)
  })

  it('should return one on store with an element', () => {
    expect(_getStoreSize(storeWithElement)).toBe(1)
  })

  it('should return null on non store element', () => {
    expect(_getStoreSize([])).toBeNull()
  })
})


describe('_isEmptyStore', () => {
  it('should exist', () => {
    expect(_isEmptyStore).not.toBeUndefined()
  })

  it('should be a function', () => {
    expect(_isEmptyStore())
  })

  it('should be true on empty store', () => {
    expect(_isEmptyStore(store)).toBeTruthy()
  })

  it('should be false on non empty store', () => {
    expect(_isEmptyStore(storeWithElement)).toBeFalsy()
  })

  it('should return null on non store element', () => {
    expect(_isEmptyStore([])).toBeNull()
  })
})


describe('_clearStore', () => {
  it('should exist', () => {
    expect(_clearStore).not.toBeUndefined()
  })

  it('should be a function', () => {
    expect(_clearStore())
  })

  it('should empty an store with elements', () => {
    _resetEnv()
    _clearStore(storeWithElement)

    expect(_getStoreSize(storeWithElement)).toBe(0)
  })
})


describe('initializeStore', () => {
  it('should exist', () => {
    expect(initializeStore).not.toBeUndefined()
  })

  it('should be a function', () => {
    expect(initializeStore())
  })

  it('should return a map object', () => {
    const newStore = initializeStore()

    expect(newStore).toEqual(store)
  })

  it('should return an empty map object', () => {
    const newStore = initializeStore()

    expect(newStore.size).toBe(0)
  })
})


describe('pushToStore', () => {
  it('should exist', () => {
    expect(pushToStore).not.toBeUndefined()
  })

  it('should be a function', () => {
    expect(pushToStore())
  })

  it('should push elements to store', () => {
    _resetEnv()
    pushToStore(store, storedKey, element)
    expect(store.has(storedKey)).toBeTruthy()
  })

  it('should not push undefined or null keys and items', () => {
    _resetEnv()
    pushToStore(store, null, null)
    expect(store.size).toBe(0)
  })
})


describe('getStoredItem', () => {
  it('should exist', () => {
    expect(getStoredItem).not.toBeUndefined()
  })

  it('should be a function', () => {
    expect(getStoredItem())
  })

  it('should retrieve element from store given key', () => {
    const storedElement = getStoredItem(storeWithElement, storedKey)
    expect(storedElement).toEqual(element)
  })

  it('should not retrieve element from store wrong key', () => {
    const storedElement = getStoredItem(storeWithElement, wrongKey)
    expect(storedElement).not.toEqual(element)
  })
})


describe('isStored', () => {
  it('should exist', () => {
    expect(isStored).not.toBeUndefined()
  })

  it('should be a function', () => {
    expect(isStored())
  })

  it('should be true if element is stored', () => {
    expect(isStored(storeWithElement, storedKey)).toBeTruthy()
  })

  it('should be false if element is not stored', () => {
    expect(isStored(storeWithElement, wrongKey)).toBeFalsy()
  })
})


describe('removeFromStore', () => {
  it('should exist', () => {
    expect(removeFromStore).not.toBeUndefined()
  })

  it('should be a function', () => {
    expect(removeFromStore())
  })

  it('should remove element given stored key', () => {
    _resetEnv()
    removeFromStore(storeWithElement, storedKey)
    expect(storeWithElement).toEqual(store)
  })

  it('should not remove element given wrong key', () => {
    _resetEnv()
    removeFromStore(storeWithElement, wrongKey)
    expect(storeWithElement).not.toEqual(store)
  })
})
