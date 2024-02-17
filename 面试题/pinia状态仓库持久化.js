import { createApp } from 'vue';
import App from './App.vue';
import createPinia from 'pinia';
const pinia = createPinia();
const app = createApp(App);
const KEY_PREFIX = 'PINIA_STORE_';
export function persisPlugin(context) {
  const {store} = context;
  console.log('context', context)
  const KEY = `${KEY_PREFIX}${store.$id}`;

  // 存
  window.addEventListener('beforeunload', () => {
    localStorage.setItem(KEY, JSON.stringify(store.$state));
  });
  // 读

  try {
    const localData = localStorage.getItem(KEY);
    if (localData) {
      store.$patch(JSON.parse(localData));
    }
  } catch (ex) {
    console.error(ex);
  }
}


pinia.use(persisPlugin);
app.use(pinia);
app.mount('#app');