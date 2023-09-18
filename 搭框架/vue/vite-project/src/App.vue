<script setup lang="ts">
// import HelloWorld from '@/components/HelloWorld.vue'
</script>

<template>
  <div style="display: flex; gap: 20px">
    <router-link to="/">index</router-link>
    <router-link to="/about">about</router-link>
    <router-link to="/posts/123">posts/123</router-link>
    <router-link to="/posts/456">posts/456</router-link>
  </div>
  <router-view />
  <el-button type="primary">this is buttons</el-button>
  <i-ep-edit />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
