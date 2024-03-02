const people = [
  { name: 'Alice', age: 20, sex: 'female' },
  { name: 'Bob', age: 25, sex: 'male' },
  { name: 'Cindy', age: 30, sex: 'male' },
  { name: 'Diana', age: 25, sex: 'female' },
  { name: 'Eva', age: 25, sex: 'female' },
  { name: 'Frank', age: 25, sex: 'male' },
  { name: 'Grace', age: 20, sex: 'female' }
]

function groupBy(arr, generateKey) {
  if (typeof generateKey === 'string') {
    generateKey = (item) => item[generateKey];
  }
  return arr.reduce((acc, cur) => {
    const key = generateKey(cur);
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(cur);
    return acc;
  }, {});
}

// 按照年龄分组
const result1 = groupBy(people, item => item.age);
console.log(result1);
const result2 = groupBy(people, item => item.sex);
console.log(result2);
const result3 = groupBy(people, item => `${item.sex}-${item.age}`);
console.log(result3);

// 按照奇数偶数分组
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const result4 = groupBy(arr, item => item % 2 === 0 ? 'even' : 'odd');
console.log(result4);