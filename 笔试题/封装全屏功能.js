const enterFullScreenName = getPropertyName(
  [
    "requestFullscreen",
    "mozRequestFullScreen",
    "webkitRequestFullscreen",
    "msRequestFullscreen",
  ],
  document.documentElement
);
function getPropertyName(names, target) {
  return names.find((name) => name in target);
}
// 进入全屏
export function enter(ele) {
  enterFullScreenName && ele[enterFullScreenName]();
}

// 退出全屏
const exitFullScreenName = getPropertyName(
  [
    "exitFullscreen",
    "mozCancelFullScreen",
    "webkitExitFullscreen",
    "msExitFullscreen",
  ],
  document
);
export function exit() {
  exitFullScreenName && document[exitFullScreenName]();
}

// 判断元素是否处于全屏
const fullEleName = getPropertyName(
  [
    "fullscreenElement",
    "mozFullScreenElement",
    "webkitFullscreenElement",
    "msFullscreenElement",
  ],
  document
);

export function fullEle() {
  return document[fullEleName] || false;
}

export function isFull() {
  return !!fullEle();
}

export function toggle(ele) {
  if (isFull()) {
    exit();
  } else {
    enter(ele);
  }
}