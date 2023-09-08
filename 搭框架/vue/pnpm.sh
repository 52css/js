#!/usr/bin/env zsh

# 确保脚本抛出遇到的错误
set -e

# 安装模板
#pnpm create vite vite-project --template vue-ts

# 安装eslint
cd vite-project
npm init @eslint/config
# npm pkg set scripts.lint="eslint --ext .ts,.vue,.js, --ignore-path .gitignore --fix src"

# 安装prettier
# pnpm add -D prettier
# echo "module.exports = {\n  printWidth: 80,\n  tabWidth: 2,\n  useTabs: false,\n  singleQuote: true,\n  semi: false,\n  trailingComma: "none",\n  bracketSpacing: true\n}"> .prettierrc.cjs
# npm pkg set scripts.format="prettier --write"

# 安装ESLint + Prettier
# pnpm add eslint-config-prettier eslint-plugin-prettier -D
