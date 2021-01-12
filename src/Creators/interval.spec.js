import { createInterval, existInterval } from './interval'

jest.useFakeTimers()

const intervalTime = 2000
const args = ['many', 'arguments', 'here']
// const intervalName = 'interval_name'

const _reset = () => {
  jest.clearAllTimers()
}

describe('createInterval', () => {
  it('should exist', () => {
    expect(createInterval).not.toBeUndefined()
  })

  it('should be a function', () => {
    expect(createInterval())
  })

  it('should run a callback', () => {
    _reset()
    const testFn = jest.fn()
    createInterval(testFn)

    expect(testFn).not.toBeCalled()

    jest.runOnlyPendingTimers()

    expect(testFn).toHaveBeenCalledTimes(1)
  })

  it('should run a callback with given time', () => {
    _reset()
    const testFn = jest.fn()
    createInterval(testFn, intervalTime)

    expect(testFn).not.toBeCalled()

    jest.advanceTimersByTime(intervalTime)

    expect(testFn).toHaveBeenCalledTimes(1)
  })

  it('should run a callback with arguments in given time', () => {
    _reset()
    const testFn = jest.fn()
    createInterval(testFn, intervalTime, args)

    expect(testFn).not.toBeCalled()

    jest.advanceTimersByTime(intervalTime)

    expect(testFn).toHaveBeenCalledTimes(1)
    expect(testFn).toHaveBeenLastCalledWith(...args)
  })
})

describe('existInterval', () => {
  it('should exist', () => {
    expect(existInterval).not.toBeUndefined()
  })

  it('should be a function', () => {
    expect(existInterval())
  })
})