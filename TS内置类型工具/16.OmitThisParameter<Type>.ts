function toHex(this: Number) {
  return this.toString(16);
}

const fiveToHex: OmitThisParameter<typeof toHex> = toHex.bind(5);

console.log(fiveToHex());


type MyOmitThisParameter<T> = T extends (this: any, ...args: infer P) => infer R ? (...args: P) => R : T;