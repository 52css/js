interface User {
  name: string;
  age: number;
  address: string
}
type UserAddress = Extract<keyof User, 'address'>  // address

type Person = {
  name: string;
  age: string;
}
const user: Extract<keyof User, keyof Person> = 'name' || 'age';

type SuccessCode = Extract<200 | 404, 200>; // 200

type MyExtract<T, U> = T extends U ? T : never;