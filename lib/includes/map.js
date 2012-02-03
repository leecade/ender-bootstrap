module.exports.map = function () {
  var ap = Array.prototype
  return 'map' in ap
    ? function (a, fn, scope) {
        return ap.map.call(a, fn, scope)
      }
    : function (a, fn, scope) {
        var r = [], i
        for (i = 0, l = a.length; i < l; i++) {
          i in a && (r[i] = fn.call(scope, a[i], i, a))
        }
        return r
      }
 }

module.exports.$map = function (fn) {
  if (!fn.length) // no args
    return originalMap.call(this, function(e) { return fn.call(e) })
  return originalMap.apply(this, arguments)
}
