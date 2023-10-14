declare function debounce<A extends any[], R>(
  fn: (...args: A) => R,
  duration?: number
): (...args: A) => void;

function handler(a: number, b: number) {
  return a + b;
}

const dHandler = debounce(handler);
