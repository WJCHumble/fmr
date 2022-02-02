import { defineConfig } from 'tsup'

export default defineConfig({
  name: 'tsup',
  target: 'node12.20.0',
  dts: {
    resolve: true,
    entry: './src/index.ts',
  },
})
