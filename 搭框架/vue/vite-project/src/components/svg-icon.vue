<script lang="ts" setup>
export interface SvgIconProps {
  prefix?: string
  name: string
  size?: string
}

const props = withDefaults(defineProps<SvgIconProps>(), {
  prefix: 'icon',
  size: '1em'
})

const symbolId = computed(() => '#' + props.prefix + '-' + props.name)
</script>

<template>
  <svg
    aria-hidden="true"
    class="svg-icon"
    :width="props.size"
    :height="props.size"
  >
    <use :xlink:href="symbolId" />
  </svg>
</template>
