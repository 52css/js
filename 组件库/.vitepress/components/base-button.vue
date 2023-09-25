<script lang="ts">
import { ref, defineProps } from 'vue'
export interface BaseButtonProps {
  onClick?: () => void
}

const isPromise = (obj: any) => {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  const AsyncFunction = (async () => {}).constructor;
  return obj instanceof Promise || obj instanceof AsyncFunction === true;
};

export function useOnClick(props, loading) {
  return () => {
    if (!props.onClick || loading.value) {
      return
    }

    loading.value = true
    if (isPromise(props.onClick)) {
      props.onClick().finally(() => {
        loading.value = false
      })
    } else {
      props.onClick()
      setTimeout(() => {
        loading.value = false
      }, 300)
    }
  }
}

export default {
  name: 'BaseButton',
}
</script>
<script setup lang="ts">
const props = withDefaults(defineProps<BaseButtonProps>(), {})
const loading = ref(false)
const onClick = useOnClick(props, loading)
</script>

<template>
  <el-button :loading="loading" @click="onClick" v-bind="$attrs">
    <slot />
  </el-button>
</template>

<style scoped lang="scss">
</style>
