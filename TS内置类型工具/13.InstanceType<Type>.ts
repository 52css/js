class Person {
  constructor(public name: string) {}
}
type PersonInstance = InstanceType<typeof Person>;
const person: PersonInstance = new Person("Alice");

interface User {
  new (name: string): Object;
}
type UserInstance = InstanceType<User>; // Object

type MyInstanceType<T extends abstract new (...args: any) => any> =
  T extends abstract new (...args: any) => infer R ? R : any;
