/**
 * Map 的巧用
 * 【代码示例】
 */
let prices = ['1', '2', '3', '4', '5']
prices = prices.map(x => parseInt(x))

console.log(prices)


let timestamps = [1692608360860, 1692460800000, 1689868800000]

timestamps = timestamps.map(x => new Date(x).toLocaleDateString())

console.log(timestamps)

let videos = [
  {videoId: 1, title: 'Funmoji title 1', isAddedToQue: false},
  {videoId: 2, title: 'Funmoji title 2', isAddedToQue: false},
  {videoId: 3, title: 'Funmoji title 3', isAddedToQue: false},
]

let titles = videos.map(x => x.title)

console.log(titles)

let videoIds = videos.map(x => x.videoId)

console.log(videoIds)