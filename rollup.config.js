import babel from 'rollup-plugin-babel'
import { uglify } from 'rollup-plugin-uglify'

export default {
  entry: 'src/index.js',
  format: 'umd',
  output: {
    exports: 'named',
  },
  moduleName: process.env.npm_package_name,
  plugins: [
    babel({
      exclude: 'node_modules/**',
    }),
    uglify(),
  ],
  dest: 'dist/index.js',
}
