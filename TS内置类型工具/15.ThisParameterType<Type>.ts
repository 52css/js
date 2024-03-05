function toHex(this: Number) {
  return this.toString(16);
}

function numberToString(n: ThisParameterType<typeof toHex>) {
  return toHex.apply(n);
}

type MyThisParameterType<T> = T extends (this: infer U, ...args: any[]) => any
  ? U
  : unknown;
