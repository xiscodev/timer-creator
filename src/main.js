import TimeUnit from 'Constants/timeUnit'
import { existInterval, getInterval, createInterval, destroyInterval } from 'Creators/interval'
import { existTimeout, getTimeout, createTimeout, destroyTimeout } from 'Creators/timeout'

exports.TimeUnit = TimeUnit
// INTERVAL
exports.existInterval = existInterval
exports.getInterval = getInterval
exports.createInterval = createInterval
exports.destroyInterval = destroyInterval
// TIMEOUT
exports.existTimeout = existTimeout
exports.getTimeout = getTimeout
exports.createTimeout = createTimeout
exports.destroyTimeout = destroyTimeout
