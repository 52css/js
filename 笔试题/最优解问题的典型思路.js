// dp[i] = max(
//   nums[i] + dp[i - 2],
//   dp[i - 1]
// )

var rob = function (nums) {
  if (nums.length === 0) return 0;

  const dp = [];
  for (let i = 0; i< nums.length; i++) {
    if (i === 0) {
      dp[i] = nums[i];
    } else if (i === 1) {
      dp[i] = Math.max(nums[i], nums[i - 1]);
    } else {
      dp[i] = Math.max(nums[i] + dp[i - 2], dp[i - 1]);
    }
  }

  return dp[nums.length - 1];
};
