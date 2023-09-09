#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 安装模板
pnpm create vite vite-project --template vue-ts

# 安装eslint
cd vite-project
npm init @eslint/config
npm pkg set scripts.lint="eslint --ext .ts,.vue,.js, --ignore-path .gitignore --fix src"

# 安装prettier
pnpm add -D prettier
echo "module.exports = {\n  printWidth: 80,\n  tabWidth: 2,\n  useTabs: false,\n  singleQuote: true,\n  semi: false,\n  trailingComma: \"none\",\n  bracketSpacing: true\n}"> .prettierrc.cjs
npm pkg set scripts.format="prettier --write"

# 安装ESLint + Prettier
pnpm add eslint-config-prettier eslint-plugin-prettier -D
echo "module.exports = {\n  \"env\": {\n    \"browser\": true,\n    \"es2021\": true\n  },\n  \"extends\": [\n    \"eslint:recommended\",\n    \"plugin:@typescript-eslint/recommended\",\n    \"plugin:vue/vue3-essential\",\n    \"plugin:prettier/recommended\"\n  ],\n  \"overrides\": [\n    {\n      \"env\": {\n        \"node\": true\n      },\n      \"files\": [\".eslintrc.{js,cjs}\"],\n      \"parserOptions\": {\n        \"sourceType\": \"script\"\n      }\n    }\n  ],\n  \"parserOptions\": {\n    \"ecmaVersion\": \"latest\",\n    \"parser\": \"@typescript-eslint/parser\",\n    \"sourceType\": \"module\"\n  },\n  \"plugins\": [\n    \"@typescript-eslint\",\n    \"vue\",\n    \"prettier\"\n  ],\n  \"rules\": {\n    \"prettier/prettier\": \"error\",\n    \"arrow-body-style\": \"off\",\n    \"prefer-arrow-callback\": \"off\"\n  }\n}"> .eslintrc.cjs

# 安装Husky
pnpm add -D husky
npm pkg set scripts.prepare="husky install"
# npm run prepare

# 安装lint-staged
pnpm add -D lint-staged
npm pkg set lint-staged={} --json
npm pkg set lint-staged["*.{ts,vue}"]=[] --json
npm pkg set lint-staged["*.{ts,vue}"][0]="npm run lint"
npm pkg set lint-staged["*.{ts,vue}"][1]="prettier --write"

# 安装vscode插件配置
echo "{\n  \"editor.tabSize\": 2, // Tab 的大小 2个空格\n  \"editor.formatOnSave\": true, // 保存是格式化\n  \"prettier.singleQuote\": true, // 单引号\n  \"editor.defaultFormatter\": \"esbenp.prettier-vscode\",\n  \"[vue]\": {\n    \"editor.defaultFormatter\": \"esbenp.prettier-vscode\"\n  },\n  \"editor.codeActionsOnSave\": {\n    \"source.fixAll.eslint\": true\n  }\n}\n"> .vscode/settings.json

# 启动
pnpm run dev
