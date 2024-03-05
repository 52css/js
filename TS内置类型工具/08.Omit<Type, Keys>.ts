interface User {
  name: string;
  age: number;
  address: string
}

type UserOmitAge = Omit<User, 'address'>;

const userOmitAge: UserOmitAge = {  name: 'xiaoming', age: 30 };

type MyOmit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;