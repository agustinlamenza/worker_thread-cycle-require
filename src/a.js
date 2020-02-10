const { Worker, isMainThread, workerData } = require('worker_threads')
const data = require('./app')

module.exports = function () {
  if (isMainThread) {
    console.log('hilo A start')
    const w = new Worker(__filename, { workerData: { name: 'A' } })
  }
}

console.log('A')

if (!isMainThread && workerData && workerData.name === 'A') {
  console.log(data)
  showInfo()
}

function showInfo () {
  console.log('hilo A worker -->', workerData.name, ' --> ', data.name)
  // setInterval(() => {
  //   console.log('this is a test ', workerData.name, ' ', data.name)
  // }, 1000)
}
