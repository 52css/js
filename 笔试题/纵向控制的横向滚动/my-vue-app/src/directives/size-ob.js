const map = new WeakMap();

const ob = new ResizeObserver((entries) => {
  for (const entry of entries) {
    // 调用 entry.target 对应的回调函数
    const handler = map.get(entry.target);
    handler &&
      handler({
        width: entry.borderBoxSize[0].inlineSize,
        height: entry.borderBoxSize[0].blockSize,
      });
  }
});

export default {
  mounted(el, binding) {
    map.set(el, binding.value);
    ob.observe(el);
  },
  unmounted(el) {
    ob.unobserve(el);
  },
};
