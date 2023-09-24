import DefaultTheme from "vitepress/theme";
import "vitepress-theme-demoblock/dist/theme/styles/index.css";
import { useComponents } from "./use-components";
import ElementPlus from "element-plus";
import Components from "../components";
import "element-plus/dist/index.css";

export default {
  ...DefaultTheme,
  enhanceApp(ctx) {
    DefaultTheme.enhanceApp(ctx);
    useComponents(ctx.app);
    ctx.app.use(ElementPlus).use(Components);
  },
};
