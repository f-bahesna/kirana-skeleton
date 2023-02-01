import vuePLugin from '@vitejs/plugin-vue'
import path from 'path'

export default {
  plugins: [
    vuePLugin()
  ],
  server: {
    port: 8080,
    hmr: {
      host: 'localhost'
    }
  },
  resolve: {
    alias: [
      {
        find: '@',
        replacement: path.resolve(__dirname, 'src')
      }
    ]
  },
}
