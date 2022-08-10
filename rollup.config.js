import commonjs from '@rollup/plugin-commonjs'
import eslint from '@rollup/plugin-eslint'
import autoExternal from 'rollup-plugin-auto-external'
import pkg from './package.json'

export default {
  input: 'src/index.js',
  output: [
    {
      format: 'es',
      file: pkg.module,
      sourcemap: true,
      exports: 'auto'
    },
    {
      format: 'cjs',
      file: pkg.main,
      sourcemap: true,
      exports: 'auto'
    }
  ],
  plugins: [
    eslint(),
    autoExternal(),
    commonjs()
  ]
}
