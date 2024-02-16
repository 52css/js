var calculateMinimumHP = function (dungeon) {
  const r = dungeon.length;
  const c = dungeon[0].length;
  const dp = Array.from({ length: r + 1 }, () => Array(c + 1).fill(Infinity));

  dp[r][c - 1] = dp[r - 1][c] = 1;

  for (let i = r - 1; i >= 0; i--) {
    for (let j = c - 1; j >= 0; j--) {
      const min = Math.min(dp[i + 1][j], dp[i][j + 1]);
      dp[i][j] = Math.max(min - dungeon[i][j], 1);
    }
  }
  // console.log(dp);

  return dp[0][0];
};

const dungeon = [
  [-1, -2, 3],
  [-1, 0, 0],
  [-3, -3, -2],
];

console.log(calculateMinimumHP(dungeon));