function getUser() {
  return { name: "ming", age: 30 };
}

type User = ReturnType<typeof getUser>;

const user: User = { name: "hong", age: 26 };

type MyReturnType<T extends (...args: any) => any> = T extends (
  ...args: any
) => infer R
  ? R
  : any;
