import babel from 'rollup-plugin-babel'
import { uglify } from 'rollup-plugin-uglify'

export default {
  input: 'src/index.js',
  output: {
    format: 'cjs',
    file: 'dist/index.js',
    exports: 'named',
    name: process.env.npm_package_name,
  },
  plugins: [
    babel(),
    uglify(),
  ],
}
