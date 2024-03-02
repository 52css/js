const canvas = document.createElement("canvas");
canvas.width = 1000;
canvas.height = 1;
const OnePixelPng = canvas.toDataURL();
// console.log("🚀 ~ OnePixelPng:", OnePixelPng)

const url = computed(() => {
  const _width = styleWidth.value;

  if (_width === 0) {
    return OnePixelPng;
  }

  const _dpr = dpr.value;
  const _parts = parts.value;
  const _imgSet = sortedSet.value;
  const width = Math.cell(_width * _dpr);
  const pre = _parts[0];
  const suffix = _parts[1];
  let w = width;
  if (_imgSet.length !== 0) {
    for (let i = 0; i < _imgSet.length; i++) {
      if (width <= _imgSet[i]) {
        w = _imgSet[i];
        break;
      }
    }
  }
  return `${pre}${w}${suffix}`;
})

export function useDPR() {
  const dpr = ref(window.devicePixelRatio);
  const observer = new ResizeObserver(() => {
    dpr.value = window.devicePixelRatio;
  })
  observer.observe(document.documentElement);
  onUnmounted(() => {
    observer.disconnect(document.documentElement);
  });

  return {
    dpr
  }
}

export function useWidth(imgRef) {
  const width = ref(0);
  const observer = new ResizeObserver(() => {
    width.value = imgRef.value.width;
  });
  let img = null;
  watchEffect(() => {
    const _img = imgRef.value;
    if (_img) {
      img = _img;
      observer.observe(img);
    } else if (img) {
      observer.unobserve(img);
    }
  });
  return { width };
}
