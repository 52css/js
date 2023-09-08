# 搭建vue框架

## 1. 安装vite

```shell
pnpm create vite
``

## 2. 通过vite安装 vue-ts

```shell
pnpm create vite my-vue-app --template vue-ts
```

## 3. 增加eslint

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

## 4. 增加prettier

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

## 5. ESLint + Prettier

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

## 6. Husky + lint-staged

```shell
yarn add husky -D
```

然后在 package.json 中添加脚本 prepare 并运行

```shell
npm pkg set scripts.prepare="husky install"

npm run prepare
```



