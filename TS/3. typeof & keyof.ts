const user3 = {
  name: "lison",
  age: 18,
};

// 不改变定义如何获取v的值
function method(key: string) {
  const v = user3[key as keyof typeof user3];

  console.log('v', v)
}


// typeof
let str = '123'
let s1: typeof str;

// keyof
type Point = {
  x: number;
  y: number;
}
type P1 = keyof Point

type Point2 = {[key: string]: number}

type P2 = keyof Point2
