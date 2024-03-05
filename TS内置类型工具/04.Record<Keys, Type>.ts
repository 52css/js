interface User {
  name: string;
  age: number;
}

type UserName = "xiaoming" | "xiaohong" | "xiaohuang";

const users: Record<UserName, User> = {
  xiaoming: { name: "ming", age: 23 },
  xiaohong: { name: "hong", age: 24 },
  xiaohuang: { name: "huang", age: 25 },
};

type MyRecord<K extends keyof any, T> = {
  [P in K]: T;
};
