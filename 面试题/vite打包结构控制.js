export default defineConfig({
  plugins: [vue()],
  build: {
    rollupOptions: {
      output: {
        entryFileNames: 'js/[name].[hash].js',
        chunkFileNames: 'js/[name].[hash].js',
        assetsFileNames(assetInfo) {
          if (assetInfo.name.endWith('.css')) {
            return 'css/[name].[hash].css'
          }

          if (['.png', '.jpg', '.jgep', '.webp', '.svg', '.gif'].some (ext => assetInfo.name.endWith(ext))) {
            return 'img/[name].[hash].[ext]'
          }

          return 'assets/[name].[hash].[ext]';
        }
      }
    }
  }
})