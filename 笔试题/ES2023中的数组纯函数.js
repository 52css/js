var arr = [3, 7, 1]

console.log(arr.toSorted((a, b) => a - b)) // [1, 3, 7]

console.log(arr.toReversed()) // [1, 7, 3]

console.log(arr.toSpliced(1, 1)) // [3, 1]

console.log(arr.with(0, 10)) // [10, 7, 1]