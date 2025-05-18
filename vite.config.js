import vuePLugin from '@vitejs/plugin-vue'
import tailwindcss from 'tailwindcss'
import path from 'path'

export default {
  plugins: [
    vuePLugin(),
    tailwindcss()
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
      },
      // Uncomment these if using Web3 / crypto libraries that need Node polyfills
      //{ find: 'process', replacement: 'process/browser' },
      //{ find: 'stream', replacement: 'stream-browserify' },
      //{ find: 'zlib', replacement: 'browserify-zlib' },
      //{ find: 'util', replacement: 'util' },
    ]
  },
}
