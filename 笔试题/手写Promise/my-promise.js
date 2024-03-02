const PENDING = "pending";
const FULFILLED = "fulfilled";
const REJECTED = "rejected";

class MyPromise {
  #state = PENDING;
  #result = undefined;
  #handlers = [];
  constructor(executor) {
    const resolve = (data) => {
      this.#changeState(FULFILLED, data);
    };
    const reject = (reason) => {
      this.#changeState(REJECTED, reason);
    };
    try {
      executor(resolve, reject);
    } catch (err) {
      reject(err);
    }
  }

  #changeState(state, result) {
    if (this.#state !== PENDING) return;
    this.#state = state;
    this.#result = result;
    this.#run();
  }

  then(onFulfilled, onRejected) {
    return new MyPromise((resolve, reject) => {
      this.#handlers.push({
        onFulfilled,
        onRejected,
        resolve,
        reject,
      });
      this.#run();
      // if (this.#state === FULFILLED) {
      //   onFulfilled(this.#result);
      // } else if (this.#state === REJECTED) {
      //   onRejected(this.#result);
      // }
    });
  }

  #isPromiseLike(value) {
    return false;
  }

  #runMicroTask(func) {
    setTimeout(func, 0);
  }

  #runOne(callback, resolve, reject) {
    this.#runMicroTask(() => {
      if (typeof callback !== "function") {
        const settled = this.#state === FULFILLED ? resolve : reject;
        settled(this.#result);
        return;
      }

      try {
        const data = callback(this.#result);

        if (this.#isPromiseLike(data)) {
          data.then(resolve, reject);
        } else {
          resolve(data);
        }
      } catch (err) {
        reject(err);
      }
    });
  }

  #run() {
    if (this.#state === PENDING) return;

    while (this.#handlers.length) {
      const { onFulfilled, onRejected, resolve, reject } =
        this.#handlers.shift();

      if (this.#state === FULFILLED) {
        this.#runOne(onFulfilled, resolve, reject);
      } else {
        this.#runOne(onRejected, resolve, reject);
      }
    }
  }
}

const p = new MyPromise((resolve, reject) => {
  setTimeout(() => {
    reject(123);
  }, 1000);
});
p.then(null, (err) => {
  console.log("promise 失败1", err);
  return 456;
}).then((data) => {
  console.log("ok", data);
});
// p.then((res) => {
//   console.log('promise 完成2', res);
// });
// p.then((res) => {
//   console.log('promise 完成3', res);
// }, (err) => {
//   console.log('promise 失败3', err);
// });

console.log(p);
