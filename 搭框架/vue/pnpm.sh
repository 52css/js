#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# echo "1.Typescript"
# pnpm create vite vite-project --template vue-ts

# 进入工程
cd vite-project

# echo "2.Alais"
# pnpm add -D @types/node
# echo "import { defineConfig } from 'vite'\nimport vue from '@vitejs/plugin-vue'\nimport path from 'path'\n\n// https://vitejs.dev/config/\nexport default defineConfig({\n  resolve: {\n    alias: {\n      '@': path.resolve(__dirname, 'src')\n    }\n  },\n  plugins: [vue()],\n})\n"> vite.config.ts
# echo "{\n  \"compilerOptions\": {\n    \"target\": \"ES2020\",\n    \"useDefineForClassFields\": true,\n    \"module\": \"ESNext\",\n    \"lib\": [\"ES2020\", \"DOM\", \"DOM.Iterable\"],\n    \"skipLibCheck\": true,\n\n    /* Bundler mode */\n    \"moduleResolution\": \"bundler\",\n    \"allowImportingTsExtensions\": true,\n    \"resolveJsonModule\": true,\n    \"isolatedModules\": true,\n    \"noEmit\": true,\n    \"jsx\": \"preserve\",\n\n    /* Linting */\n    \"strict\": true,\n    \"noUnusedLocals\": true,\n    \"noUnusedParameters\": true,\n    \"noFallthroughCasesInSwitch\": true,\n\n    \"paths\":{\n      \"@/*\": [\"./src/*\"],\n    },\n  },\n  \"include\": [\"src/**/*.ts\", \"src/**/*.d.ts\", \"src/**/*.tsx\", \"src/**/*.vue\"],\n  \"references\": [{ \"path\": \"./tsconfig.node.json\" }]\n}\n" > tsconfig.json

# echo "3. Linter / Formatter"
# echo "3.1 安装eslint"
# npm init @eslint/config
# npm pkg set scripts.lint="eslint --ext .ts,.vue,.js, --ignore-path .gitignore --fix src"

# echo "3.2. 增加prettier"
# pnpm add -D prettier
# echo "module.exports = {\n  printWidth: 80,\n  tabWidth: 2,\n  useTabs: false,\n  singleQuote: true,\n  semi: false,\n  trailingComma: \"none\",\n  bracketSpacing: true,\n  endOfLine: 'auto'\n}"> .prettierrc.cjs
# npm pkg set scripts.format="prettier --write"

# echo "3.3. ESLint + Prettier"
# pnpm add eslint-config-prettier eslint-plugin-prettier -D
# echo "module.exports = {\n  \"env\": {\n    \"browser\": true,\n    \"es2021\": true\n  },\n  \"extends\": [\n    \"eslint:recommended\",\n    \"plugin:@typescript-eslint/recommended\",\n    \"plugin:vue/vue3-essential\",\n    \"plugin:prettier/recommended\"\n  ],\n  \"overrides\": [\n    {\n      \"env\": {\n        \"node\": true\n      },\n      \"files\": [\".eslintrc.{js,cjs}\"],\n      \"parserOptions\": {\n        \"sourceType\": \"script\"\n      }\n    }\n  ],\n  \"parserOptions\": {\n    \"ecmaVersion\": \"latest\",\n    \"parser\": \"@typescript-eslint/parser\",\n    \"sourceType\": \"module\"\n  },\n  \"plugins\": [\n    \"@typescript-eslint\",\n    \"vue\",\n    \"prettier\"\n  ],\n  \"rules\": {\n    \"prettier/prettier\": \"error\",\n    \"arrow-body-style\": \"off\",\n    \"prefer-arrow-callback\": \"off\"\n  }\n}"> .eslintrc.cjs

# echo "3.4 给vscode增加格式化"
# echo "{\n  \"editor.tabSize\": 2, // Tab 的大小 2个空格\n  \"editor.formatOnSave\": true, // 保存是格式化\n  \"prettier.singleQuote\": true, // 单引号\n  \"editor.defaultFormatter\": \"esbenp.prettier-vscode\",\n  \"[vue]\": {\n    \"editor.defaultFormatter\": \"esbenp.prettier-vscode\"\n  },\n  \"editor.codeActionsOnSave\": {\n    \"source.fixAll.eslint\": true\n  }\n}\n"> .vscode/settings.json

# echo "4. Husky + lint-staged"
# echo "4.1 安装husky"
# pnpm add -D husky
# npm pkg set scripts.prepare="husky install"
# npm run prepare
# npx husky add .husky/pre-commit "npm run lint"

# echo "4.2 安装lint-staged"
# pnpm add -D lint-staged
# npm pkg set lint-staged={} --json
# npm pkg set lint-staged["*.{ts,vue}"]=[] --json
# npm pkg set lint-staged["*.{ts,vue}"][0]="npm run lint"
# npm pkg set lint-staged["*.{ts,vue}"][1]="prettier --write"

# echo "5.AutoImport"
# echo "5.1 安装依赖包"
# pnpm add -D unplugin-auto-import
# pnpm add -D unplugin-vue-components
# echo "5.2 修改vite内容"
# echo "import { defineConfig } from 'vite';\nimport vue from '@vitejs/plugin-vue';\nimport path from 'path';\nimport AutoImport from 'unplugin-auto-import/vite';\nimport Components from 'unplugin-vue-components/vite';\nimport { ElementPlusResolver } from 'unplugin-vue-components/resolvers';\n\n// https://vitejs.dev/config/\nexport default defineConfig({\n  resolve: {\n    alias: {\n      '@': path.resolve(__dirname, 'src'),\n    },\n  },\n  plugins: [\n    vue(),\n    AutoImport({\n      imports: ['vue', 'vue-router'],\n      resolvers: [ElementPlusResolver()],\n      dts: 'src/types/auto-import.d.ts',\n      eslintrc: {\n        enabled: true,\n      },\n    }),\n    Components({\n      resolvers: [ElementPlusResolver()],\n      dts: 'src/types/components.d.ts',\n    }),\n  ],\n});\n" > vite.config.ts
# echo "5.3 修改.eslintrc.cjs"
# echo "module.exports = {\n  env: {\n    browser: true,\n    es2021: true\n  },\n  extends: [\n    'eslint:recommended',\n    'plugin:@typescript-eslint/recommended',\n    'plugin:vue/vue3-essential',\n    'plugin:prettier/recommended',\n    './.eslintrc-auto-import.json'\n  ],\n  overrides: [\n    {\n      env: {\n        node: true\n      },\n      files: ['.eslintrc.{js,cjs}'],\n      parserOptions: {\n        sourceType: 'script'\n      }\n    }\n  ],\n  parserOptions: {\n    ecmaVersion: 'latest',\n    parser: '@typescript-eslint/parser',\n    sourceType: 'module'\n  },\n  plugins: ['@typescript-eslint', 'vue', 'prettier'],\n  rules: {\n    'prettier/prettier': 'error',\n    'arrow-body-style': 'off',\n    'prefer-arrow-callback': 'off'\n  }\n}\n" > .eslintrc.cjs

# echo "6.SvgIcon"
# echo "6.1 安装依赖包"
# pnpm add vite-plugin-svg-icons -D
# echo "6.2 修改vite内容"
# echo "import { defineConfig } from 'vite'\nimport vue from '@vitejs/plugin-vue'\nimport path from 'path'\nimport AutoImport from 'unplugin-auto-import/vite'\nimport Components from 'unplugin-vue-components/vite'\nimport { ElementPlusResolver } from 'unplugin-vue-components/resolvers'\nimport { createSvgIconsPlugin } from 'vite-plugin-svg-icons'\n\n// https://vitejs.dev/config/\nexport default defineConfig({\n  resolve: {\n    alias: {\n      '@': path.resolve(__dirname, 'src')\n    }\n  },\n  plugins: [\n    vue(),\n    AutoImport({\n      imports: ['vue', 'vue-router'],\n      resolvers: [ElementPlusResolver()],\n      dts: 'src/types/auto-import.d.ts',\n      eslintrc: {\n        enabled: true\n      }\n    }),\n    Components({\n      resolvers: [ElementPlusResolver()],\n      dts: 'src/types/components.d.ts'\n    }),\n    createSvgIconsPlugin({\n      // 指定需要缓存的图标文件夹\n      iconDirs: [path.resolve(process.cwd(), 'src/icons')],\n      // 指定symbolId格式\n      symbolId: 'icon-[dir]-[name]'\n    })\n  ]\n})\n" > vite.config.ts
# echo "6.3 修改main内容"
# echo "import { createApp } from 'vue'\nimport './style.css'\nimport App from './App.vue'\nimport 'virtual:svg-icons-register'\n\ncreateApp(App).mount('#app')\n" > src/main.ts
# echo "6.4 增加svg-icon组件"
# echo "<script lang=\"ts\" setup>\nexport interface SvgIconProps {\n  prefix?: string\n  name: string\n  size?: string\n}\n\nconst props = withDefaults(defineProps<SvgIconProps>(), {\n  prefix: 'icon',\n  size: '1em'\n})\n\nconst symbolId = computed(() => '#' + props.prefix + '-' + props.name)\n</script>\n\n<template>\n  <svg\n    aria-hidden=\"true\"\n    class=\"svg-icon\"\n    :width=\"props.size\"\n    :height=\"props.size\"\n  >\n    <use :xlink:href=\"symbolId\" />\n  </svg>\n</template>" > src/components/svg-icon.vue

# echo "7.AutoRouter"
# echo "7.1 安装依赖包"
# pnpm add vue-router@4
# echo "7.2 写入src/router.ts"
# echo "import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'\n\nconst routeFiles = import.meta.glob('@/views/**/*.vue')\nconst autoRoutes: RouteRecordRaw[] = []\nconst fileNameReplace = (fileName: string) =>\n  fileName.replace(/\[([\w\-_]*)\]/g, (_, w) => ':' + w)\nexport interface PathToChildren {\n  [key: string]: RouteRecordRaw[]\n}\nconst pathToChildren: PathToChildren = {}\n\nfor (const filePath in routeFiles) {\n  const result = filePath.slice(11, -4)\n  const fileNameList = result.split('/')\n  const fileNameLen = fileNameList.length\n  let relativePath = ''\n  let routersParent = autoRoutes\n  const children: RouteRecordRaw[] = []\n  const path = fileNameList.map((x) => fileNameReplace(x)).join('/')\n\n  for (let i = 0; i < fileNameLen; i++) {\n    const rightIndex = fileNameLen - 1 - i\n    const left = fileNameList\n      .slice(0, rightIndex)\n      .map((x) => fileNameReplace(x))\n      .join('/')\n    const fileName = fileNameReplace(fileNameList[rightIndex])\n\n    if (i === 0) {\n      relativePath = fileName\n    } else {\n      relativePath = fileName + '/' + relativePath\n    }\n\n    if (i === fileNameList.length - 1) {\n      relativePath = '/' + relativePath\n    }\n\n    if (routeFiles['/src/views/' + left + '.vue']) {\n      routersParent = pathToChildren[left]\n      break\n    }\n  }\n\n  pathToChildren[path] = children\n\n  routersParent.push({\n    path: relativePath,\n    component: routeFiles[filePath],\n    children,\n  })\n}\n\n// 增加重定向\ninterface RedirectMap {\n  [key: string]: string\n}\nconst redirectMap: RedirectMap = {\n  '/': '/index',\n}\n\nObject.keys(redirectMap).forEach((path) => {\n  const redirect = redirectMap[path]\n  autoRoutes.push({\n    path,\n    redirect,\n  })\n})\n\nconst router = createRouter({\n  history: createWebHistory(),\n  routes: autoRoutes,\n})\n\nexport default router\n" > src/router.ts
# echo "7.3 写入src/main.ts"
# echo "import { createApp } from 'vue'\nimport './style.css'\nimport App from './App.vue'\nimport 'virtual:svg-icons-register'\nimport router from './router'\n\ncreateApp(App).use(router).mount('#app')\n" > src/main.ts

# echo "7.AutoRouter-new"
# echo "7.1 安装依赖包"
# pnpm add vue-router@4
# pnpm add unplugin-vue-router -D
# echo "7.2 写入src/router.ts"
# echo "import { createRouter, createWebHistory } from 'vue-router/auto'\nimport { routes } from 'vue-router/auto/routes'\n\nconst router = createRouter({\n  history: createWebHistory(),\n  routes\n})\n\nexport default router\n" > src/router.ts
# echo "7.3 写入src/main.ts"
# echo "import { createApp } from 'vue'\nimport './style.css'\nimport App from './App.vue'\nimport 'virtual:svg-icons-register'\nimport router from './router'\n\ncreateApp(App).use(router).mount('#app')\n" > src/main.ts
# echo "7.4 写入vite.config.ts"
# echo "import { defineConfig } from 'vite'\nimport vue from '@vitejs/plugin-vue'\nimport path from 'path'\nimport AutoImport from 'unplugin-auto-import/vite'\nimport Components from 'unplugin-vue-components/vite'\nimport { ElementPlusResolver } from 'unplugin-vue-components/resolvers'\nimport { createSvgIconsPlugin } from 'vite-plugin-svg-icons'\nimport VueRouter from 'unplugin-vue-router/vite'\nimport { VueRouterAutoImports } from 'unplugin-vue-router'\n\n// https://vitejs.dev/config/\nexport default defineConfig({\n  resolve: {\n    alias: {\n      '@': path.resolve(__dirname, 'src')\n    }\n  },\n  plugins: [\n    vue(),\n    AutoImport({\n      imports: ['vue', 'vue-router', VueRouterAutoImports],\n      resolvers: [ElementPlusResolver()],\n      dts: 'src/types/auto-import.d.ts',\n      eslintrc: {\n        enabled: true\n      }\n    }),\n    Components({\n      resolvers: [ElementPlusResolver()],\n      dts: 'src/types/components.d.ts'\n    }),\n    createSvgIconsPlugin({\n      // 指定需要缓存的图标文件夹\n      iconDirs: [path.resolve(process.cwd(), 'src/icons')],\n      // 指定symbolId格式\n      symbolId: 'icon-[dir]-[name]'\n    }),\n    VueRouter({\n      /* options */\n      routesFolder: 'src/views',\n      dts: 'src/types/typed-router.d.ts'\n    })\n  ]\n})\n" > vite.config.ts

echo "8.加载Element-plus"
echo "8.1 安装依赖"
pnpm add element-plus
pnpm add @element-plus/icons-vue
echo "8.2 安装自动加载icon"
pnpm add unplugin-icons -D
echo "8.3 添加vite.config.ts配置"
echo "import { defineConfig } from 'vite'\nimport vue from '@vitejs/plugin-vue'\nimport path from 'path'\nimport AutoImport from 'unplugin-auto-import/vite'\nimport Components from 'unplugin-vue-components/vite'\nimport { createSvgIconsPlugin } from 'vite-plugin-svg-icons'\nimport VueRouter from 'unplugin-vue-router/vite'\nimport { VueRouterAutoImports } from 'unplugin-vue-router'\nimport { ElementPlusResolver } from 'unplugin-vue-components/resolvers'\nimport Icons from 'unplugin-icons/vite'\nimport IconsResolver from 'unplugin-icons/resolver'\n\n// https://vitejs.dev/config/\nexport default defineConfig({\n  resolve: {\n    alias: {\n      '@': path.resolve(__dirname, 'src')\n    }\n  },\n  plugins: [\n    vue(),\n    AutoImport({\n      imports: ['vue', 'vue-router', VueRouterAutoImports],\n      resolvers: [\n        ElementPlusResolver(),\n        // 自动导入图标组件\n        IconsResolver({\n          prefix: 'Icon'\n        })\n      ],\n      dts: 'src/types/auto-import.d.ts',\n      eslintrc: {\n        enabled: true\n      }\n    }),\n    Components({\n      resolvers: [\n        ElementPlusResolver(),\n        // 自动注册图标组件\n        IconsResolver({\n          enabledCollections: ['ep']\n        })\n      ],\n      dts: 'src/types/components.d.ts'\n    }),\n    createSvgIconsPlugin({\n      // 指定需要缓存的图标文件夹\n      iconDirs: [path.resolve(process.cwd(), 'src/icons')],\n      // 指定symbolId格式\n      symbolId: 'icon-[dir]-[name]'\n    }),\n    VueRouter({\n      /* options */\n      routesFolder: 'src/views',\n      dts: 'src/types/typed-router.d.ts'\n    }),\n    Icons({\n      autoInstall: true\n    })\n  ]\n})\n" > vite.config.js


# 启动
pnpm run dev
