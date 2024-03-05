// 正常情况推导出来的this
type Point = {
  x: number;
  y: number;
  moveBy(dx: number, dy: number): void;
};

let p: Point = {
  x: 10,
  y: 20,
  moveBy(dx, dy) {
    this.x += dx; // this has type Point
    this.y += dy; // this has type Point
  },
};

interface MyThisType<T> {}
