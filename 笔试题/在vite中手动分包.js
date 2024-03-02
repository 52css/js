export default defineConfig({
  plugins: [vue()],
  build: {
    // manualChunks(id) {
    //   if (id.includes('node_modules')) {
    //     return 'vender'
    //   }
    // }
    manualChunks: {
      lodash: ['lodash'],
      vue: ['vue'],
    }
  }
})