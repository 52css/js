function highlight(id) {
  document
    .querySelectorAll('a.highlight')
    .forEach((el) => el.classList.remove('highlight'));

  if (id instanceof HTMLElement) {
    id.classList.add('highlight');
    return;
  }

  if (id.startsWith('#')) {
    id = id.slice(1);
  }

  document.querySelector(`#${id}`).classList.add('highlight');
}

const links = document.querySelectorAll('.toc a[href^="#"]');
const titles = []

for (const link of links) {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    highlight(link);
  });
  const url = new URL(link.href);
  const dom = document.querySelector(url.hash);

  if (dom) {
    titles.push(dom);
  }
}

function debounce(fn, delay) {
  let timer = null;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}

const scrollHandler = debounce(() => {
  console.log('scroll')
  const rects = titles.map((el) => el.getBoundingClientRect());
  const topRange = 300;
  for (let i = 0; i < titles.length; i++) {
    const title = titles[i]; // 标题的dom
    const rect = rects[i]; // 标题的位置信息

    if (rect.top >= 0 && rect.top <= topRange) {
      highlight(title.id);
      break;
    } else if (rect.top < 0 && rects[i + 1] && rects[i + 1].top > document.documentElement.clientHeight) {
      highlight(title.id);
      break;
    }
  }
}, 100);

window.addEventListener('scroll', scrollHandler);