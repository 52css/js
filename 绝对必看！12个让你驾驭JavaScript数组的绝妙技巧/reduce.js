var arr1 = [1, 5, 7, 4]

var sum = arr1.reduce((x, y) => x + y)

console.log(sum) // 17

var arr2 = [
  { videoId: 1, title: "test 1" },
  { videoId: 2, title: "test 2" },
  { videoId: 3, title: "test 3" },
];

var videoMap = arr2.reduce((prev, curr) => {
  prev[curr.videoId] = curr;
  return prev;
}, {})

console.log(videoMap)