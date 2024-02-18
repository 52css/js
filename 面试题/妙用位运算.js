function uniqueNumber(nums) {
  var result = 0;
  for (var i = 0; i < nums.length; i++) {
    result ^= nums[i];
  }
  return result;
}

console.log(uniqueNumber([1, 2, 3, 4, 3, 2, 1]));