#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

echo "1.Typescript"
pnpm create vite vite-project --template vue-ts

# 进入工程
cd vite-project

echo "2.@"

pnpm add -D @types/node

echo "import { defineConfig } from 'vite'\nimport vue from '@vitejs/plugin-vue'\nimport path from 'path'\n\n// https://vitejs.dev/config/\nexport default defineConfig({\n  resolve: {\n    alias: {\n      '@': path.resolve(__dirname, 'src')\n    }\n  },\n  plugins: [vue()],\n})\n"> vite.config.ts

echo "{\n  \"compilerOptions\": {\n    \"target\": \"ES2020\",\n    \"useDefineForClassFields\": true,\n    \"module\": \"ESNext\",\n    \"lib\": [\"ES2020\", \"DOM\", \"DOM.Iterable\"],\n    \"skipLibCheck\": true,\n\n    /* Bundler mode */\n    \"moduleResolution\": \"bundler\",\n    \"allowImportingTsExtensions\": true,\n    \"resolveJsonModule\": true,\n    \"isolatedModules\": true,\n    \"noEmit\": true,\n    \"jsx\": \"preserve\",\n\n    /* Linting */\n    \"strict\": true,\n    \"noUnusedLocals\": true,\n    \"noUnusedParameters\": true,\n    \"noFallthroughCasesInSwitch\": true,\n\n    \"paths\":{\n      \"@/*\": [\"./src/*\"],\n    },\n  },\n  \"include\": [\"src/**/*.ts\", \"src/**/*.d.ts\", \"src/**/*.tsx\", \"src/**/*.vue\"],\n  \"references\": [{ \"path\": \"./tsconfig.node.json\" }]\n}\n" > tsconfig.json

# echo "3. Linter / Formatter"
# echo "3.1 安装eslint"
# npm init @eslint/config
# npm pkg set scripts.lint="eslint --ext .ts,.vue,.js, --ignore-path .gitignore --fix src"

# echo "3.2. 增加prettier"
# pnpm add -D prettier
# echo "module.exports = {\n  printWidth: 80,\n  tabWidth: 2,\n  useTabs: false,\n  singleQuote: true,\n  semi: false,\n  trailingComma: \"none\",\n  bracketSpacing: true\n}"> .prettierrc.cjs
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
# # # npm run prepare

# echo "4.2 安装lint-staged"
# pnpm add -D lint-staged
# npm pkg set lint-staged={} --json
# npm pkg set lint-staged["*.{ts,vue}"]=[] --json
# npm pkg set lint-staged["*.{ts,vue}"][0]="npm run lint"
# npm pkg set lint-staged["*.{ts,vue}"][1]="prettier --write"

# 启动
pnpm run dev
