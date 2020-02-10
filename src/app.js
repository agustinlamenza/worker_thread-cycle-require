const a = require('./a')
const b = require('./b')

function fn () {
  console.log('antes de A')
  a()

  console.log('antes de B')
  b()
}

module.exports = {
  name: 'agustin',
  fn
}
