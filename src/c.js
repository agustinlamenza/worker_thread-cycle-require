const { Worker, isMainThread, workerData } = require('worker_threads')
const data = require('./app')

module.exports = function () {
  if (isMainThread) {
    console.log('hilo C start')
    const w = new Worker(__filename, { workerData: { name: 'C' } })
  }
}

console.log('C')

if (!isMainThread) {
  console.log(data)
  showInfo()
}

function showInfo () {
  console.log('hilo C worker -->', workerData.name, ' --> ', data.name)
  // console.log('hilo B worker')
  // setInterval(() => {
  //   console.log('this is a test ', workerData.name, ' ', data.name)
  // }, 1000)
}
