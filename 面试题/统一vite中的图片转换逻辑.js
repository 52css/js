import fs from 'node:fs';
const myPlugin = (limit = 4096) => {
  return {
    name: 'my-plugin',
    async transform(code, id) {
      if (process.env.NODE_ENV === 'production') {
        return;
      }

      if (!id.endsWith('.png')) {
        return;
      }

      const state = await fs.promises.stat(id)
      // console.log('state.size', state.size)
      if (state.size > limit) {
        return;
      }

      const buffer = await fs.promises.readFile(id)
      const base64 = buffer.toString('base64')
      const dataUrl = `export default "data:image/png;base64,${base64}"`
      return {
        code: `export default "${dataUrl}"`,
      }
    }
  }
}

export default defineConfig({
  plugins: [vue()],
  build: {
    assetsInlineLimit: 4096, // 修改成0，所有的资源都内联
  }
})