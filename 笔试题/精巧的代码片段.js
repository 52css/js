// 复制文本到粘贴板
const copyTextToClipboard = (text) => navigator.clipboard.writeText(text);

// 获取第几天
const dayOfYear = (date) =>
  Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);

// 灰度算法
const gray = (r, g, b) => 0.299 * r + 0.587 * g + 0.114 * b;

// 解析URL参数
const getURLParameters = (url) =>
  (url.match(/([^?=&]+)(=([^&]*))/g) || []).reduce(
    (a, v) => (
      (a[v.slice(0, v.indexOf("="))] = v.slice(v.indexOf("=") + 1)), a
    ),
    {}
  );

// 对象属性筛选
const pick = (obj, arr) =>
  arr.reduce((acc, curr) => (curr in obj && (acc[curr] = obj[curr]), acc), {});

// 随机hex颜色
const randomHexColor = () =>
  `#${Math.floor(Math.random() * 0xffffff)
    .toString(16)
    .padEnd(6, "0")}`;

// 随机字符串
const randomStr = (length = 10) => Math.random().toString(36).substr(2, length);

// 移除标签
const removeTag = (fragment) => new DOMParser().parseFromString(fragment, "text/html").body.textContent || "";