interface User {
  name: string;
  age: number;
}

const user: Readonly<User> = { name: "xiaoming", age: 30 };
user.name = "zhangsan"; // error ❗️


type MyReadonly<T> = {
  readonly [P in keyof T]: T[P];
}