import launchCallback from './callback'

describe('launchCallback', () => {
  it('should exist', () => {
    expect(launchCallback).not.toBeUndefined()
  })

  it('should be a function', () => {
    expect(launchCallback())
  })

  it('should run the callback', () => {
    const testFn = jest.fn()
    launchCallback(testFn)
    expect(testFn).toHaveBeenCalled()
  })

  it('should run the callback with an argument', () => {
    const testFn = jest.fn()
    const arg = 'anArgument'
    launchCallback(testFn, arg)
    expect(testFn).toHaveBeenCalledWith(arg)
  })

  it('should run the callback with many arguments', () => {
    const testFn = jest.fn()
    const arg1 = 'anArgument1'
    const arg2 = 'anArgument2'
    const arg3 = 'anArgument3'
    launchCallback(testFn, [arg1, arg2, arg3])
    expect(testFn).toHaveBeenCalledWith(arg1, arg2, arg3)
  })

  it('should run the callback with null or no arguments', () => {
    const testFn = jest.fn()
    launchCallback(testFn, null)
    expect(testFn).toHaveBeenCalledWith()
  })
})
