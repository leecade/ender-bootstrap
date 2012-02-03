module.exports = function () {
  if (arguments.length == 3 && typeof arguments[2] == 'function' && typeof arguments[1] != 'string')
    return ender.fn.bind.call(this, arguments[0], arguments[2])
  else if (arguments.length == 3 && typeof arguments[2] == 'function' && typeof arguments[1] == 'string')
    return ender.fn.bind.call(this, arguments[1], arguments[0], arguments[2])
  return originalOn.apply(this, arguments)
}
