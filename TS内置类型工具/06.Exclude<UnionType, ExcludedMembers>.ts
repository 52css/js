interface User {
  name: string;
  age: number;
  address: string
}

type UserExcludeAddress = Exclude<keyof User, 'address'> // "name" | "age"

type MyExclude<T, U> = T extends U ? never : T;