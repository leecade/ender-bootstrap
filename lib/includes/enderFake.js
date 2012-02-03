module.exports = function (selector) {
  return selector === null || selector === '#' ? ender([]) : ender.apply(this, arguments)
}
