import {
  _store,
  _resetStore,
  _removeInterval,
  createInterval,
  existInterval,
  getInterval,
  destroyInterval,
} from './interval'

// ENVIRONMENT VARIABLES
jest.useFakeTimers()

const wait = 3000
const args = ['many', 'arguments', 'here']
const INTERVAL_NAME = 'INTERVAL_TEST_NAME'
const OTHER_INTERVAL_NAME = 'OTHER_INTERVAL_TEST_NAME'

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


describe('_removeInterval', () => {
  it('should exist', () => {
    expect(_removeInterval).not.toBeUndefined()
  })

  it('should be a function', () => {
    expect(_removeInterval())
  })

  it('should be zero after remove interval', () => {
    _resetEnv()
    _store.set(_dummySetKey, _dummySetValue)

    _removeInterval(_dummySetKey)

    expect(_store.size).toBe(0)
  })
})


describe('existInterval', () => {
  it('should exist', () => {
    expect(existInterval).not.toBeUndefined()
  })

  it('should be a function', () => {
    expect(existInterval())
  })

  it('should be false if interval does not exist', () => {
    _resetEnv()

    expect(existInterval(INTERVAL_NAME)).toBeFalsy()
  })

  it('should be true if interval exist', () => {
    _resetEnv()
    const testFn = jest.fn()
    createInterval(INTERVAL_NAME, testFn, wait)

    expect(existInterval(INTERVAL_NAME)).toBeTruthy()
  })

  it('should be false if interval does not exist and not on initial state', () => {
    _resetEnv()
    const testFn = jest.fn()
    createInterval(INTERVAL_NAME, testFn, wait)

    expect(existInterval(OTHER_INTERVAL_NAME)).toBeFalsy()
  })
})


describe('getInterval', () => {
  it('should exist', () => {
    expect(getInterval).not.toBeUndefined()
  })

  it('should be a function', () => {
    expect(getInterval())
  })

  it('should be undefined if name does not exist', () => {
    _resetEnv()
    expect(getInterval(INTERVAL_NAME)).toBeUndefined()
  })

  it('should not to be undefined if name exist', () => {
    _resetEnv()
    const testFn = jest.fn()
    createInterval(INTERVAL_NAME, testFn, wait)

    expect(getInterval(INTERVAL_NAME)).not.toBeUndefined()
  })

  it('should be undefined if name does not exist and not initial state', () => {
    _resetEnv()
    const testFn = jest.fn()
    createInterval(INTERVAL_NAME, testFn, wait)

    expect(getInterval(OTHER_INTERVAL_NAME)).toBeUndefined()
  })
})


describe('createInterval', () => {
  it('should exist', () => {
    expect(createInterval).not.toBeUndefined()
  })

  it('should be a function', () => {
    expect(createInterval())
  })

  it('should run a callback', () => {
    _resetEnv()
    const testFn = jest.fn()
    createInterval(INTERVAL_NAME, testFn)

    expect(testFn).not.toBeCalled()

    jest.runOnlyPendingTimers()
    expect(testFn).toHaveBeenCalledTimes(1)
  })

  it('should run a callback with given time', () => {
    _resetEnv()
    const testFn = jest.fn()
    createInterval(INTERVAL_NAME, testFn, wait)

    expect(testFn).not.toBeCalled()

    jest.advanceTimersByTime(wait)
    expect(testFn).toHaveBeenCalledTimes(1)
  })

  it('should run a callback twice when given time occurs twice', () => {
    _resetEnv()
    const testFn = jest.fn()
    createInterval(INTERVAL_NAME, testFn, wait)

    expect(testFn).not.toBeCalled()

    jest.advanceTimersByTime(wait)
    jest.advanceTimersByTime(wait)
    expect(testFn).toHaveBeenCalledTimes(2)
  })

  it('should run a callback with arguments in given time', () => {
    _resetEnv()
    const testFn = jest.fn()
    createInterval(INTERVAL_NAME, testFn, wait, args)

    expect(testFn).not.toBeCalled()

    jest.advanceTimersByTime(wait)
    expect(testFn).toHaveBeenCalledTimes(1)
    expect(testFn).toHaveBeenLastCalledWith(...args)
  })

  it('should admit a name', () => {
    _resetEnv()
    const testFn = jest.fn()
    createInterval(INTERVAL_NAME, testFn, wait)

    expect(testFn).not.toBeCalled()

    jest.advanceTimersByTime(wait)
    expect(testFn).toHaveBeenCalledTimes(1)
  })

  it('should not create one if already exist with given name', () => {
    _resetEnv()
    const testFn = jest.fn()
    createInterval(INTERVAL_NAME, testFn, wait)
    createInterval(INTERVAL_NAME, testFn, wait)

    expect(testFn).not.toBeCalled()

    jest.advanceTimersByTime(wait)
    expect(testFn).toHaveBeenCalledTimes(1)
  })
})


describe('destroyInterval', () => {
  it('should exist', () => {
    expect(destroyInterval).not.toBeUndefined()
  })

  it('should be a function', () => {
    expect(destroyInterval())
  })

  it('should destroy given name from store if exist', () => {
    _resetEnv()
    const testFn = jest.fn()
    createInterval(INTERVAL_NAME, testFn, wait)

    destroyInterval(INTERVAL_NAME)

    expect(getInterval(INTERVAL_NAME)).toBeUndefined()
  })

  it('should not destroy given others name from store', () => {
    _resetEnv()
    const testFn = jest.fn()
    createInterval(INTERVAL_NAME, testFn, wait)

    destroyInterval(OTHER_INTERVAL_NAME)

    expect(getInterval(INTERVAL_NAME)).not.toBeUndefined()
  })

  it('should not run callback if destroyed before wait time', () => {
    _resetEnv()
    const testFn = jest.fn()
    createInterval(INTERVAL_NAME, testFn, wait)

    destroyInterval(INTERVAL_NAME)

    jest.advanceTimersByTime(wait)

    expect(testFn).not.toBeCalled()
  })
})
