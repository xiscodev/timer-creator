const launchCallback = (callback, args) => {
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

export default launchCallback
