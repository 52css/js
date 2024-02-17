import { createStore } from 'vuex';
import counter from './counter';
import text from './text';

const KEY = 'vuex-store';
export function persisPlugin(store) {
  console.log('store', store)
  // 保存仓库数据到本地存储
  window.addEventListener('beforeunload', () => {
    localStorage.setItem(KEY, JSON.stringify(store.state));
  })
  // 恢复仓库数据到本地
  try {
    const localData = localStorage.getItem(KEY);

    if (localData) {
      store.replaceState(JSON.parse(localData));
    }
  } catch (ex) {
    console.error(ex);
  }
}

const store = createStore({
  modules: {
    counter,
    text
  },
  plugins: [
    persisPlugin,
  ]
})