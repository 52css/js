// 函数防抖三个条件
// 1. 高频
// 2. 耗时
// 3. 以最后一个调用为准

function debounce(func, duration = 500) {
  let timer = null;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, duration);
  };
}

const d_layout = debounce(layout, 500);

window.onresize = d_layout;