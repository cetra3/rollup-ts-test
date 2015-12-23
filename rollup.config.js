import typescript from 'rollup-plugin-typescript';
import babel from 'rollup-plugin-babel';

export default {
  entry: 'app/main.ts',
  dest: 'bundle/output.js',

  plugins: [
    typescript()
  ]
}
