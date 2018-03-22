export const isType = type => value =>
  Object.prototype.toString.call(value).toLowerCase() === `[object ${type}]`

export const isObject = isType('object')
