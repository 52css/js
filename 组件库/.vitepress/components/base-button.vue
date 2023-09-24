<script lang="ts">
import { ref, defineProps } from 'vue'
export interface BaseButtonProps {
  onClick?: (event: Event) => void
}

const isPromise = (obj: any) => {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    const AsyncFunction = (async () => {}).constructor;
    return obj instanceof Promise || obj instanceof AsyncFunction === true;
  };

export function useOnClick(props: BaseButtonProps, loading) {
  return () => {
    const fn = props.onClick;
    if (!fn || loading.value) {
      return;
    }

    loading.value = true;

    const execFn = fn.call(null, event);

    if (isPromise(execFn)) {
      execFn.finally(() => {
        loading.value = false;
      });
    } else {
      // 延迟300ms，关闭loading
      setTimeout(() => {
        loading.value = false;
      }, 300);
    }
  }
}

export default {
  name: 'BaseButton',
}
</script>
<script setup lang="ts">
const props = defineProps<BaseButtonProps>()
const loading = ref(false)
console.log('props', props)
const handleClick = useOnClick(props, loading)
</script>

<template>
  <el-button :loading="loading" @click="handleClick">
    <slot />
  </el-button>
</template>

<style scoped lang="scss">
</style>

