// 从上到下按规则比较，知道能够得到结果

// 1. 两端类型相同，比较值
// 2. 两端存在NaN, 返回false
// 3. undefined 和 null 只有与自身比较，或者相互比较时返回true
// 4. 两端都是原始类型，转换成数字比较
// 5. 一端是原始类型，一端是对象类型，原始类型转换成对象类型，再比较

const a = {
  i: 1,
  toString() {
    return a.i++
  }
}

if (a == 1 && a == 2 && a == 3) {
  console.log('Hello, World!')
}

