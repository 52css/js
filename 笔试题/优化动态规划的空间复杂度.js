function fibonacci(n) {
  if (n === 1 || n === 2) {
    return 1
  }
  let p1 = 1;
  let p2 = 1;
  let r;

  for (let i = 2; i < n; i++) {
    r = p1 + p2;
    p1 = p2;
    p2 = r;
  }

  return r;
}

console.log(fibonacci(6));

var uniquePaths = function(m, n) {
  const dp = new Array(n).fill(1);

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[j] += dp[j - 1];
    }
  }

  return dp[n - 1];
}