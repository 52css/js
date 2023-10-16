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
let s = "hello";
let n: typeof s;
// ts 的 typeof 不能带变量，只能带类型
let msgbox = (x:string) => x;
// let shouldContinue: typeof msgbox("Are you sure you want to continue?");


// keyof
type Point = { x: number; y: number };
type P = keyof Point;

// keyof 是string的时候，会返回number类型，obj[0] === obj['0']
type Mapish = { [k: string]: boolean };
type M = keyof Mapish;

