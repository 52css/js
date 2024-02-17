const obj = {
  name: "Alice",
  sayHi1: () => {
    console.log(this.name);
  },
  sayHi2() {
    (() => {
      console.log(this.name);
    })();
  },
};

obj.sayHi1(); // undefined
obj.sayHi2(); // Alice


const products = [
  { name: "apple", stock: 10 },
  { name: "orange", stock: 20 },
  { name: "banana", stock: 30 },
]
// 得到一个新数组，orange 库存减 1， 尽量用一行代码解决
const newProducts = products.map(item => item.name === 'orange' ? { ...item, stock: item.stock - 1 } : item);
console.log(newProducts);


// function getItems(fruitList, ...args, favariteFruit) {
//   return [...fruitList, ...args, favariteFruit];
// }
// // 下面的函数调用结果是什么
// console.log(getItems(['apple', 'banana'], 'orange', 'pear', 'peach', 'grape', 'watermelon'));


function  currying (fn, ...args) {
  return function (...rest) {
    const allArgs = [...args, ...rest];
    if (allArgs.length >= fn.length) {
      return fn.call(this, ...allArgs);
    } else {
      return currying(fn, ...allArgs);
    }
  }
}

const sum = (a, b, c, d) => a + b + c + d;

console.log(currying(sum)(1)(2)(3)(4)); // 10
console.log(currying(sum)(1, 2)(3, 4)); // 10
console.log(currying(sum)(1, 2, 3, 4)); // 10
console.log(currying(sum)(1)(2, 3, 4)); // 10