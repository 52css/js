const arr = [
  { videoId: 1, title: "test 1" },
  { videoId: 2, title: "test 2" },
  { videoId: 3, title: "test 3" },
];

const videoId3 = arr.find(x => x.videoId === 3)

console.log('videoId3', videoId3)