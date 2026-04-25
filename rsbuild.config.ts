import path from 'path'
import { defineConfig, loadEnv } from '@rsbuild/core'
import { pluginReact } from '@rsbuild/plugin-react'

const { publicVars } = loadEnv({ prefixes: ['REACT_APP_'] })

export default defineConfig({
  plugins: [pluginReact()],
  output: {
    distPath: {
      root: 'build',
    },
  },
  resolve: {
    alias: {
      '@config': path.resolve(__dirname, './src/config'),
      '@context': path.resolve(__dirname, './src/context'),
      '@clients': path.resolve(__dirname, './src/clients'),
      '@utils': path.resolve(__dirname, './src/utils'),
      '@hooks': path.resolve(__dirname, './src/hooks'),
      '@modules': path.resolve(__dirname, './src/modules'),
      '@layouts': path.resolve(__dirname, './src/layouts'),
      '@router': path.resolve(__dirname, './src/router'),
    },
  },
  source: {
    define: {
      // ensure REACT_APP_PHOTOS_URL is always inlined at build time (never left as a process.env reference)
      'process.env.REACT_APP_PHOTOS_URL': JSON.stringify(
        process.env.REACT_APP_PHOTOS_URL ?? '',
      ),
      ...publicVars,
    },
  },
  html: {
    template: './public/index.html',
  },
})
