import typescript from "@rollup/plugin-typescript"
import json from "@rollup/plugin-json"
import { terser } from "rollup-plugin-terser"
import commonjs from '@rollup/plugin-commonjs';

const isWatchMode = !!process.env.ROLLUP_WATCH;

const plugins = [
	typescript({
		sourceMap: !isWatchMode,
	}), 
	json(),
	commonjs()
]

if (!isWatchMode) {
	plugins.push(terser())
}

export default [
  {
    input: './src/index.ts',
    output: {
      file: './dist/index.cjs',
      format: 'cjs',
			banner: "#!/usr/bin/env node",
			sourcemap: !isWatchMode ? 'inline' : false
    },
		plugins
  }
];