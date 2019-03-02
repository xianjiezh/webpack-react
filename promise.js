const log = console.log.bind(console)


class Promise {
  constructor(resolve, reject) {
    this.resolve = resolve
    this.reject = reject
    this.status = 'pending'
    this.value = undefined
    this.onResolvedCallBack = []
    this.onRejectedCallBack = []

  }
  then(resolve, reject) {

  }
}


let p = new Promise((resolve, reject) => {
  if (Math.random() > 0.5) {
    setTimeout(() => {
      resolve(111)
    }, 1000)
  } else {
    reject(12222)
  }
})

p.then((res) => {
  log('res', res)
}, error => {
  log('error', error)
})