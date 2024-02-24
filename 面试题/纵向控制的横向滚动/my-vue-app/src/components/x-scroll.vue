<script lang="ts">
import { reactive } from 'vue';
export interface XScrollProps {
  prop1?: string
}
export interface XScrollEmits {
  (event: 'event1'): void
}
export default {
  name: 'XScroll',
}
</script>
<script setup lang="ts">
withDefaults(defineProps<XScrollProps>(), {})
defineEmits<XScrollEmits>()
const s = reactive({
  w: 0,
  h: 0
})
const onSizeChange = ({width, height}) => {
  s.w = width;
  s.h = height;
}
</script>

<template>
  <div v-size-ob="onSizeChange" class="scroll-container">
    <div class="v-scroll">
      <div class="content">
        <slot />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.scroll-container {
  width: 100%;
  height: 100%;
}
.v-scroll {
  --w: calc(v-bind('s.w')* 1px);
  --h: calc(v-bind('s.h')* 1px);
  width: var(--h);
  height: var(--w);
  overflow: auto;
  position: relative;
  transform-origin: top left;
  transform: translateY(var(--h)) rotate(-90deg);
}
.content {
  height: var(--h);
  position: absolute;
  top: 0;
  left: var(--h);
  transform-origin: left top;
  transform: rotate(90deg);
}
</style>
