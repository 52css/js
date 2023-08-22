let videos = [
  { videoId: 1, title: "test 1", status: 0, },
  { videoId: 2, title: "test 2", status: 1, },
  { videoId: 3, title: "test 3", status: 1, },
]

videos.sort((a, b) => b.videoId - a.videoId);

console.log(videos);