
const PENDING = 'pending'
const FULFILLED = 'fulfilled'
const REJECTED = 'rejected'

/**
 * 运行一个为队列任务
 * @param {Function} callback 
 */
function runMicroTask (callback) {
  // 判断node环境
  if (process && process.nextTick) {
    process.nextTick(callback)
  } else {
    const dom = document.createElement('p')
    const observer = new MutationObserver(callback)
    observer.observe(dom, {
      childList: true
    })
    dom.innerHTML = '1'
  }
}

/**
 * 判断对象是否为promise A+规范
 * @param {*} obj 
 */
function isPromise (obj) {
  return !!obj && typeof obj === 'object' && typeof obj.then === 'function'
}


class MyPromise {
  /**
   * @param {Function} executor 任务执行器 立即执行
   */
  constructor (executor) {
    // 状态
    this._state = PENDING
    // 数据
    this._value = undefined
    // 处理函数队列
    this._handlers = []
    try {
      executor(this._resolve.bind(this), this._reject.bind(this))
    } catch (error) {
      this._reject(error)
      console.error(error)
    }
  }

  /**
   * 向处理函数队列中添加函数
   */
  _pushHandler (executor, state, resolve, reject) {
    this._handlers.push({
      executor,
      state,
      resolve,
      reject
    })
  }

  /**
   * 运行处理函数队列
   */
  _runHandlers () {
    while (this._handlers[0]) {
      if (this._state === PENDING) return
      const {executor, state, resolve,reject} = this._handlers[0]
      this._runOneHandler(executor, state, resolve,reject)
      this._handlers.shift()
    }
  }

  _runOneHandler (executor, state, resolve,reject) {
    runMicroTask(() => {
      // 状态不一致 不运行 直接返回 
      // ps: .then调用时候传入了两个函数 一个处理成功的会调 一个处理失败的会调
      //     但是promise的状态为成功 所以失败的回调函数不调用
      if (state !== this._state) {
        return
      }
      if (typeof executor !== 'function') {
        this._state === FULFILLED ? resolve(this._value) : reject(this._value)
        return
      }
      try {
        let result = executor(this._value)
        if (isPromise(result)) {
          result.then(resolve, reject)
        } else {
          resolve(result)
        }
      } catch (error) {
        reject(error)
        console.error(error)
      }
    })
  }

  /**
   * 
   * @param {*} onFulfilled 
   * @param {*} onRejected 
   */
  then (onFulfilled, onRejected) {
    return new MyPromise((resolve, reject) => {
      this._pushHandler(onFulfilled, FULFILLED, resolve, reject)
      this._pushHandler(onRejected, REJECTED, resolve, reject)
      this._runHandlers()
    })
  }

  /**
   * 改变状态
   * @param {*} newState 
   * @param {*} value 
   */
  _changeState (newState, value) {
    // 状态只能更改一次
    if (this._state !== PENDING) return
    this._state = newState
    this._value = value
    this._runHandlers()
  }

  /**
   * 当前任务已完成
   * @param {any} data 任务完成的相关数据
   */
  _resolve (data) {
    this._changeState(FULFILLED, data)
  }
  /**
   * 当前任务失败
   * @param {*} reason 任务失败的原因
   */
  _reject (reason) {
    this._changeState(REJECTED, reason)
  }

  catch (onRejected) {
    return this.then(null, onRejected)
  }

  finally (onSettled) {
    return this.then((data) => {
      onSettled()
      return data
    }, (reason) => {
      onSettled()
      throw reason
    })
  }

  static resolve (data) {
    if (data instanceof MyPromise) {
      return data
    }
    return new MyPromise((resolve, reject) => {
      if (isPromise(data)) {
        return data.then(resolve, reject)
      } else {
        resolve(data)
      }
    })
  }

  static reject (reason) {
    return new MyPromise((resolve, reject) => {
      reject(reason)
    })
  }

  static all (iterable) {
    return new MyPromise((resolve, reject) => {
      let result = []
      let count = 0
      try {
        for (let item of iterable) {
          let i = count
          count++
          Promise.resolve(item).then(res => {
            result[i] = res
            if (result.length === count) {
              resolve(result)
            }
          }, error => {
            reject(error)
          })
        }
      } catch (error) {
        reject(error)
        console.error(error)
      }
    })
  }

  static allSettled (iterable) {
    let newIterable = []
    for (let item of iterable) {
      newIterable.push(MyPromise.resolve(item).then(result => {
        return {
          status: FULFILLED,
          value: result
        }
      }, error => {
        return {
          status: REJECTED,
          value: error
        }
      }))
    }
    return MyPromise.all(newIterable).then(res => {
      resolve(res)
    })
  }

  static race (iterable) {
    return new MyPromise((resolve, reject) => {
      for (let item of iterable) {
        MyPromise.resolve(item).then(resolve, reject)
      }
    })
  }
}

let pro = new MyPromise((resolve, reject) => {
  reject(33)
})

// MyPromise.race([
//   new MyPromise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(1)
//     }, 1000);
//   }),
//   new MyPromise((resolve, reject) => {
//     setTimeout(() => {
//       reject(2)
//     }, 2000);
//   }),
// ]).then(res => {
//   console.log(res, 'res')
// }, error => {
//   console.log(error, 'error')
// })


new Promise(res => { 
  res(1)
}).then(res => {
  throw error
}).then(res => {
  
}).catch(error => {
  console.log(error, 'error')
})