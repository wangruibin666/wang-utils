import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import json from 'rollup-plugin-json';
import commonjs from 'rollup-plugin-commonjs';
import { uglify } from 'rollup-plugin-uglify';


export default {
  input : 'src/index.js',
  output: {
    file   : 'dist/wang_utils.js',
    format : 'umd',
    name   : 'wang',
    sourcemap: false
  },
  plugins : [
    json(),
    resolve(),
    babel({
      runtimeHelpers: true,
      exclude       : ['node_modules/**']
    }),
    commonjs(),
    uglify()
  ]
};
