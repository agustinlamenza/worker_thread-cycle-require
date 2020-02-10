const { Worker, isMainThread, workerData } = require('worker_threads')
const data = require('./app')

module.exports = function () {
  if (isMainThread) {
    console.log('hilo B start')
    const w = new Worker(__filename, { workerData: { name: 'B' } })
  }
}

console.log('B')

if (!isMainThread && workerData && workerData.name === 'B') {
  console.log(data)
  showInfo()
}

function showInfo () {
  console.log('hilo B worker -->', workerData.name, ' --> ', data.name)
  // console.log('hilo B worker')
  // setInterval(() => {
  //   console.log('this is a test ', workerData.name, ' ', data.name)
  // }, 1000)
}
