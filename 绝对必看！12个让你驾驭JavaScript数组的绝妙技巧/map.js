var arr = [
  { videoId: 1, title: "test 1" },
  { videoId: 2, title: "test 2" },
  { videoId: 3, title: "test 3" },
];

var videoIds = arr.map((x) => x.videoId);
var titles = arr.map((x) => x.title);

console.log(videoIds);
console.log(titles);
