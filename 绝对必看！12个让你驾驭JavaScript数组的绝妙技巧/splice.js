let arr = [1, 2, 3, 4, 5]

// 删除索引为 2 的元素
arr.splice(2, 1)

console.log('删除索引为 2 的元素', arr) // [1, 2, 4, 5]

// 删除索引为 2 的元素，然后插入 6
arr.splice(2, 1, 6)

console.log('删除索引为 2 的元素，然后插入 6', arr) // [1, 2, 6, 5]