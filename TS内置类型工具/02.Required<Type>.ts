interface Props {
  name?: string;
  age?: number;
}

function printProps(props: Required<Props>) {
  console.log(`${props.name} is ${props.age} years old.`);
}

printProps({ name: "xiaoming" }); // error ❗️

type MyRequired<T> = {
  [P in keyof T]-?: T[P];
};
