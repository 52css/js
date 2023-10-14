type U = {
  a: number;
  b: number;
} | {
  a: number;
  c: number;
}
const u: U = {
  a: 1
}

type I = {
  a: number;
  b: number;
} & {
  a: number;
  c: number;
}

const i: I = {
  a: 1
}

type IA = {
  a: number;
} & {
  a: string;
}

const ia: IA = {
  a: 1
}

type UA = {
  a: number;
} | {
  a: string;
}

const ua: UA = {
  a: 1
}