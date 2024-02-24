<script setup lang="ts">
import XScroll from './components/x-scroll.vue'
</script>

<template>
  <div class="demo" style="height: 600px;">
    <div class="container">
      <XScroll>
        <div class="card-list">
          <div class="card">
            <img src="https://picsum.photos/960/540?random=1" />
          </div>
          <div class="card">
            <img src="https://picsum.photos/960/540?random=2" />
          </div>
          <div class="card">
            <img src="https://picsum.photos/960/540?random=3" />
          </div>
          <div class="card">
            <img src="https://picsum.photos/960/540?random=4" />
          </div>
          <div class="card">
            <img src="https://picsum.photos/960/540?random=5" />
          </div>
        </div>
      </XScroll>
    </div>
  </div>
</template>

<style scoped>
.demo {
  height: 500px;
}
.container {
  width: 100%;
  height: 100%;
}
.card-list {
  display: flex;
}
</style>
