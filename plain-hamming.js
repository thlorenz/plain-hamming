module.exports = function plainHamming(s1, s2) {
  var i = s1.length
  var sum = 0

  while (--i > 0) {
    if (s1[i] !== s2[i]) sum++
  }

  return sum
}
