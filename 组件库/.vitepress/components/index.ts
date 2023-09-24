import { App } from "vue";
import BaseButton from "./base-button.vue";

export default {
  install(app: App) {
    app.component(BaseButton.name, BaseButton);
  },
};
