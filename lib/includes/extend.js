module.exports = function () {
  // based on jQuery deep merge
  var options, name, src, copy, clone
    , target = arguments[0], i = 1, length = arguments.length

  for (; i < length; i++) {
    if ((options = arguments[i]) !== null) {
      // Extend the base object
      for (name in options) {
        src = target[name]
        copy = options[name]
        if (target === copy) {
          continue;
        }
        if (copy && copy instanceof Object && typeof copy !== 'function' && !(copy instanceof Array)) {
          clone = src && is.obj(src) ? src : {}
          target[name] = o.extend(clone, copy)
        } else if (copy !== undefined) {
          target[name] = copy
        }
      }
    }
  }
  return target
}
