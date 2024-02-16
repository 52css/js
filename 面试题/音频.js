const audioEle = document.createElement("audio");
const cvs = document.createElement("canvas");
const ctx = cvs.getContext("2d");
// 初始化canvas的尺寸
function initCanvas() {
  cvs.width = window.innerWidth * devicePixelRatio;
  cvs.height = (window.innerHeight / 2) * devicePixelRatio;
}

initCanvas();

let isInit = false;
let analyser;
let dataArray;
audioEle.onplay = function () {
  if (isInit) return;

  // 初始化
  const audioCtx = new AudioContext(); // 创建一个音频上下文
  const source = audioCtx.createMediaElementSource(audioEle); // 创建音频源节点
  analyser = audioCtx.createAnalyser(); // 创建分析器节点

  analyser.fftSize = 512; // 设置fft大小
  const bufferLength = analyser.frequencyBinCount; // 获取频率数据长度
  dataArray = new Uint8Array(bufferLength); // 创建一个无符号字节数组

  source.connect(analyser);
  analyser.connect(audioCtx.destination);

  isInit = true;
};

// 把分析出的波形毁之到canvas上
function draw() {
  requestAnimationFrame(draw);
  // 请求画布
  const { width, height } = cvs;
  ctx.clearRect(0, 0, width, height);
  if (!isInit) return;
  // 让分析器节点分析出数据到数组中
  analyser.getByteFrequencyData(dataArray);
  const len = dataArray.length;
  const barWidth = width / len / 2;
  ctx.fillStyle = "#78c5f7";
  for (let i = 0; i < len; i++) {
    const data = dataArray[i]; // < 256
    const barHeight = (data / 255) * height;
    const x1 = i * barWidth + width / 2;
    const x2 = width / 2 - (i + 1) * barWidth;
    const y = height - barHeight;
    ctx.fillRect(x1, y, barWidth - 2, barHeight);
    ctx.fillRect(x2, y, barWidth - 2, barHeight);
  }
}

draw();
