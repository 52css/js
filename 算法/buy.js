var success = 1.8
var fail = 0.5

var userCount = 100;
var firstMoney = new Array(100).fill(100);

for (let i = 0; i < 100; i ++) {
  for (let j = 0; j < 100; j ++) {
    firstMoney[j] *= (Math.random() > 0.5 ? success : fail)
    firstMoney[j] = Math.max(0, firstMoney[j])
  }
}

console.log(firstMoney.sort((a, b) => a - b))