# BaseButton 按钮组件

## 点击防重

描述

:::demo

```vue
<script lang="ts" setup>
const onClick = () => {
  return new Promise((resolve) => {
    setTimeout(resolve, 3000)
  })
}
</script>
<template>
  <base-button @click="onClick">Default</base-button>
  <base-button type="primary" @click="onClick">Primary</base-button>
  <base-button type="success" @click="onClick">Success</base-button>
  <base-button type="info" @click="onClick">Info</base-button>
  <base-button type="warning" @click="onClick">Warning</base-button>
  <base-button type="danger" @click="onClick">Danger</base-button>
</template>
```

:::