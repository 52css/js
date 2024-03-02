var isPalindrome = function(s) {
  let i = 0, j = s.length - 1;

  while (i < j) {
    const left = s[i].toLowerCase();
    const right = s[j].toLowerCase();
    if (left === right) {
      i++;
      j--;
    } else {
      return false;
    }
  }

  return true;
}

console.log(isPalindrome('abcba')) // true