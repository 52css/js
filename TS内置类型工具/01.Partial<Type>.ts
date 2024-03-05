interface User {
  name: string;
  age: number;
  address: string;
}

function updateUser(user: User, fieldsToUpdate: Partial<User>) {
  return { ...user, ...fieldsToUpdate };
}

const user: User = { name: "xiaoming", age: 30, address: "上海" };
const newUser = updateUser(user, { address: "北京" });


type MyPartial<T> = {
  [P in keyof T]?: T[P];
};