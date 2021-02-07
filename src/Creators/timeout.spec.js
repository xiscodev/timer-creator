import {
  _store,
  _resetStore,
  _removeTimeout,
  createTimeout,
  // existTimeout,
  // getTimeout,
  // destroyTimeout,
} from './timeout'

// ENVIRONMENT VARIABLES
jest.useFakeTimers()

const wait = 3000
const args = ['many', 'arguments', 'here']
const TIMEOUT_NAME = 'TIMEOUT_TEST_NAME'
// const OTHER_TIMEOUT_NAME = 'OTHER_TIMEOUT_TEST_NAME'

const _resetEnv = () => {
  _resetStore()
  jest.clearAllTimers()
}

const _dummySetKey = 'aKey'
const _dummySetValue = 2


// TESTS
describe('_store', () => {
  it('should exist', () => {
    expect(_store).not.toBeUndefined()
  })

  it('should be empty on initial state', () => {
    _resetEnv()
    expect(_store.size).toBe(0)
  })

  it('should not be empty after store first key/value pair', () => {
    _resetEnv()
    _store.set(_dummySetKey, _dummySetValue)

    expect(_store.size).not.toBe(0)
  })
})


describe('_resetStore', () => {
  it('should exist', () => {
    expect(_resetStore).not.toBeUndefined()
  })

  it('should be a function', () => {
    expect(_resetStore())
  })

  it('should be empty after reset', () => {
    _resetEnv()
    _store.set(_dummySetKey, _dummySetValue)

    _resetStore()

    expect(_store.size).toBe(0)
  })
})


describe('_removeTimeout', () => {
  it('should exist', () => {
    expect(_removeTimeout).not.toBeUndefined()
  })

  it('should be a function', () => {
    expect(_removeTimeout())
  })

  it('should be zero after remove interval', () => {
    _resetEnv()
    _store.set(_dummySetKey, _dummySetValue)

    _removeTimeout(_dummySetKey)

    expect(_store.size).toBe(0)
  })
})


describe('createTimeout', () => {
  it('should exist', () => {
    expect(createTimeout).not.toBeUndefined()
  })

  it('should be a function', () => {
    expect(createTimeout())
  })

  it('should run a callback', () => {
    _resetEnv()
    const testFn = jest.fn()
    createTimeout(TIMEOUT_NAME, testFn)

    expect(testFn).not.toBeCalled()

    jest.runOnlyPendingTimers()
    expect(testFn).toHaveBeenCalledTimes(1)
  })

  it('should run a callback with given time', () => {
    _resetEnv()
    const testFn = jest.fn()
    createTimeout(TIMEOUT_NAME, testFn, wait)

    expect(testFn).not.toBeCalled()

    jest.advanceTimersByTime(wait)
    expect(testFn).toHaveBeenCalledTimes(1)
  })

  it('should run a callback only once when given time occurs any times as timeout finishes', () => {
    _resetEnv()
    const testFn = jest.fn()
    createTimeout(TIMEOUT_NAME, testFn, wait)

    expect(testFn).not.toBeCalled()

    jest.advanceTimersByTime(wait)
    jest.advanceTimersByTime(wait)
    expect(testFn).toHaveBeenCalledTimes(1)
  })

  it('should run a callback with arguments in given time', () => {
    _resetEnv()
    const testFn = jest.fn()
    createTimeout(TIMEOUT_NAME, testFn, wait, args)

    expect(testFn).not.toBeCalled()

    jest.advanceTimersByTime(wait)
    expect(testFn).toHaveBeenCalledTimes(1)
    expect(testFn).toHaveBeenLastCalledWith(...args)
  })

  it('should admit a name', () => {
    _resetEnv()
    const testFn = jest.fn()
    createTimeout(TIMEOUT_NAME, testFn, wait)

    expect(testFn).not.toBeCalled()

    jest.advanceTimersByTime(wait)
    expect(testFn).toHaveBeenCalledTimes(1)
  })

  it('should not create one if already exist with given name', () => {
    _resetEnv()
    const testFn = jest.fn()
    createTimeout(TIMEOUT_NAME, testFn, wait)
    createTimeout(TIMEOUT_NAME, testFn, wait)

    expect(testFn).not.toBeCalled()

    jest.advanceTimersByTime(wait)
    expect(testFn).toHaveBeenCalledTimes(1)
  })
})