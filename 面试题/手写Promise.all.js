Promise.myAll = function (promises) {
  let res, rej;
  const p = new Promise((resolve, reject) => {
    res = resolve;
    rej = reject;
  });
  let count = 0;
  const result = [];
  let fulfilled = 0;
  for (const prom of promises) {
    const index = count;
    count++;
    Promise.resolve(prom).then((data) => {
      result[index] = data;
      fulfilled ++;
      if (fulfilled === count) {
        res(result);
      }
    }, rej);
  }

  if (count === 0) {
    res([]);
  }

  return p;
}

Promise.myAll([1, 2, 3, Promise.resolve(123)]).then((res) => {
  console.log(res)
})