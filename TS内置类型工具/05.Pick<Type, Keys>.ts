interface User {
  name: string;
  age: number;
  address: string
}

type NameAndAgeOnly = Pick<User, 'name' | 'age'>;
const nameAndAgeOnly: NameAndAgeOnly = { name: 'xiaoming', age: 26 };

type MyPick<T, K extends keyof T> = {
  [P in K]: T[P];
}