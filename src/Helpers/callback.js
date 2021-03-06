const _isFunction = (toEvaluate) => {
  return !!toEvaluate && typeof toEvaluate === 'function'
}

const launchCallback = (callback, args) => {
  if (_isFunction(callback)) {
    if (args) {
      if (Array.isArray(args) && args.length !== 0) {
        // eslint-disable-next-line standard/no-callback-literal
        callback(...args)
      } else {
        callback(args)
      }
    } else {
      callback()
    }
  }
}

export default launchCallback
