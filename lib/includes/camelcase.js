module.exports = function (s) {
  return s.replace(/-([a-z]|[0-9])/ig, function(s, c) { return (c + '').toUpperCase() })
}
