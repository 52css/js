# 搭建vue框架

## 1. Typescript

```shell
pnpm create vite my-vue-app --template vue-ts
```

## 2. Linter / Formatter

### 2.1 安装eslint

```shell
npm init @eslint/config
````

![Alt text](image.png)

按需选择完配置后，选择立即安装，就可一键安装相关依赖。安装成功后 ESLint 帮我们创建了 .eslintrc.cjs 配置文件（cjs 是指 CommonJS 格式）

```js
module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:vue/vue3-essential"
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "parser": "@typescript-eslint/parser",
        "sourceType": "module"
    },
    "plugins": [
        "@typescript-eslint",
        "vue"
    ],
    "rules": {
    }
}

```

在 `package.json` 的 `script` 中添加命令

```json
{
  "scripts": {
    "lint": "eslint --ext .ts,.vue,.js, --fix --quiet ./"
  },
}
```

### 2.2. 增加prettier

```shell
yarn add prettier -D
```

然后再根目录创建 .prettierrc.js 配置文件

```js
module.exports = {
  printWidth: 80,
  tabWidth: 2,
  useTabs: false,
  singleQuote: true,
  semi: false,
  trailingComma: "none",
  bracketSpacing: true
}
```

测试prettier是否生效，在 `package.json` 的 `script` 中添加命令

```json
{
  "scripts": {
    "prettier":"prettier --write ./src/App.vue"
  },
}
```

### 2.3. ESLint + Prettier

在eslint校验中加入Prettier格式化，安装依赖

```shell
yarn add eslint-config-prettier eslint-plugin-prettier -D
```

更改 Eslint 的配置文件 `.eslintrc.cjs`, 在里面加入 Prettier 相关配置

```js
module.exports = {
  "env": {
    "browser": true,
    "es2021": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended", 
    "plugin:vue/vue3-essential",
+    "plugin:prettier/recommended"
  ],
  "overrides": [
    {
      "env": {
        "node": true
      },
      "files": [".eslintrc.{js,cjs}"],
      "parserOptions": {
        "sourceType": "script"
      }
    }
  ],
  "parserOptions": {
    "ecmaVersion": "latest",
    "parser": "@typescript-eslint/parser",
    "sourceType": "module"
  },
  "plugins": [
    "@typescript-eslint", 
    "vue",
+    "prettier"
  ],
  "rules": {
+    "prettier/prettier": "error",
+   "arrow-body-style": "off",
+   "prefer-arrow-callback": "off"
  }
}

```

### 2.4 给vscode增加格式化

然后在 `.vscode/settings.json` 添加相关配置。

```json
{
  "editor.tabSize": 2, // Tab 的大小 2个空格
  "editor.formatOnSave": true, // 保存是格式化
  "prettier.singleQuote": true, // 单引号
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "[vue]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```

## 3. Husky + lint-staged

### 3.1 安装husky

```shell
pnpm add husky -D
```

然后在 package.json 中添加脚本 prepare 并运行

```shell
npm pkg set scripts.prepare="husky install"

npm run prepare
```

### 3.2 安装lint-staged

```shell
pnpm add lint-staged -D
```

然后在 `package.json` 添加相关配置。

```json
{
  "lint-staged": {
    "*.{ts,vue}": [
      "npm run lint",
      "prettier --write"
    ]
  }
}
```

## 4. @

在`vite.config.js`的`defineConfig`增加

```js
// 头部饮用
import path from 'path'

// 增加到defineConfig下
{
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
}
```

在`tsconfig.json`的`compilerOptions`增加

```json
{
  "paths":{
     "@/*": ["./src/*"],
   },
}
```



## 5. SvgIcon

## 6. AutoImport

## 7. Router

## 8. Pinia

## 9. Commitlint
