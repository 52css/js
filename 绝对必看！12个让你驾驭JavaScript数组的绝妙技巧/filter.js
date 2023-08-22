var arr = [
  { videoId: 1, title: "test 1", status: 0, },
  { videoId: 2, title: "test 2", status: 1, },
  { videoId: 3, title: "test 3", status: 1, },
];

var enableVideos = arr.filter(x => x.status === 1)

console.log(enableVideos)