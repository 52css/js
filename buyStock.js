/**
 * 买卖股票问题，返回获得利润的最大值
题目： 给定一个整数数组，其中第 i 个元素代表了第 i天的股票价格；
非负整数 fee 代表了交易股票的手续费用

输入： arr: [1, 12, 13, 9, 15, 8, 6, 16]； fee: 2

第1天买入，第3天卖出: 13 - 1 - 2 = 10
第4天买入，第5天卖出: 15 - 9 - 2 = 4
第7天买入，第八天卖出：16 - 6 - 2 = 8

输出： 22
 */

function buyStock(arr, fee) {
  let sum = 0;
  let min = arr[0]; // 买入的价格

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    } else {
      const profit = arr[i] - min - fee;

      if (profit > 0) {
        sum += profit;
        min = arr[i] - fee;
      }
    }
  }

  return sum;
}

console.log(buyStock([1, 12, 13, 9, 15, 8, 6, 16], 2));