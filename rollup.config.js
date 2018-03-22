import commonjs from 'rollup-plugin-commonjs'
import nodeResolve from 'rollup-plugin-node-resolve'
import babel from 'rollup-plugin-babel'
import uglify from 'rollup-plugin-uglify'
import pkg from './package.json'

const isPro = process.env.NODE_ENV === 'production'
const ext = isPro ? '.min.js' : '.js'
const proPlugins = [uglify()]

export default {
  input: 'src/index.js',
  output: [
    {
      file: `lib/index.umd${ext}`,
      format: 'umd',
      name: 'vueMediaQuery',
      sourcemap: isPro
    },
    {
      file: `lib/index${ext}`,
      format: 'cjs',
      sourcemap: isPro
    },
    {
      file: `lib/index.es${ext}`,
      format: 'es',
      sourcemap: isPro
    }
  ],
  plugins: [
    babel({
      exclude: 'node_modules/**'
    }),
    commonjs(),
    nodeResolve(),
    ...proPlugins
  ],
  watch: {
    include: 'src/**',
    exclude: 'node_modules/**'
  }
}
