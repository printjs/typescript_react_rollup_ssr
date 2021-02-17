import commonjs from '@rollup/plugin-commonjs';
import nodeResolve from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';
import rollupTypescript from '@rollup/plugin-typescript';
import analyze from 'rollup-plugin-analyzer';

const scss = require('rollup-plugin-scss');
const imagemin = require('rollup-plugin-imagemin');

const { content } = require('./write.styles');

export const universalPlugins = [
  commonjs(),
  nodeResolve({
    extensions: ['.ts', '.tsx'],
    dedupe: ["react", "react-dom", "react-router-dom"]
  }),
  replace({
    'process.env.NODE_ENV': JSON.stringify('production'),
  }),
  analyze({
    stdout: true,
  }),
  rollupTypescript({
    exclude: ['**/*.png'],
    typescript: require('typescript'),
  }),
  imagemin.default({
    publicPath: 'assets/images',
  }),
  scss({
    include: ['./src/**/*.css', './src/**/*.scss', './src/**/*.sass'],
    output: (styles: string) => {
      content('bundle.css', styles);
    },
  })
];
