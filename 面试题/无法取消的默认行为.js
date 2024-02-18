function setNoWheel() {
  window.addEventListener('wheel', wheelHandler, {
    passive: false
  })
}

function setWheel() {
  window.removeEventListener('wheel', wheelHandler);
}

function wheelHandler(e) {
  e.preventDefault();
}

// 取消默认行为