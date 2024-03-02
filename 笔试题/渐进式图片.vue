<script lang="ts">
export interface ProgressiveImageProps {
  placeholder?: string
  origin: string
}
export interface ProgressiveImageEmits {
  (event: 'event1'): void
}
export default {
  name: 'ProgressiveImage',
}
</script>
<script setup lang="ts">
withDefaults(defineProps<ProgressiveImageProps>(), {})
defineEmits<ProgressiveImageEmits>()
const onLoad = (e) => {
  e.target.parentElement.classList.add('loaded')
}
</script>

<template>
  <div class="progressive-image">
    <img :src="placeholder" class="img placeholder">
    <img @load="onLoad" class="img origin" :src="origin" />
  </div>
</template>

<style scoped lang="scss">
.progressive-image {
  position: relative;
}
img {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
  transition: 0.6s;
}
.origin {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  opacity: 0;
  filter: blur(10px);
}
.loaded .origin {
  opacity: 1;
  filter: blur(0);
}
</style>
