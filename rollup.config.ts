import * as rollup from 'rollup';
import { universalPlugins } from './plugins';

async function build() {
  // create a bundle
  const bundle = await rollup.rollup({
    input: 'src/routes/server.side.tsx',
    plugins: universalPlugins,
  });

  // console.log(bundle.watchFiles); // an array of file names this bundle depends on

  // generate output specific code in-memory
  // you can call this function multiple times on the same bundle object
  const { output } = await bundle.generate({
    dir: 'script',
    format: 'cjs',
  });

  for (const chunkOrAsset of output) {
    if (chunkOrAsset.type === 'asset') {
      console.log('Asset', chunkOrAsset);
    } else {
      console.log('Chunk', chunkOrAsset.modules);
    }
  }

  // or write the bundle to disk
  await bundle.write({
    dir: 'script',
    format: 'cjs',
  });

  // closes the bundle
  await bundle.close();
}

build();

// export default [{
//   input: 'src/routes/server.side.jsx',
//   output: {
//     dir: 'script',
//     format: 'cjs',
//   },
//   plugins: [
//     commonjs(),
//     resolve({
//       extensions: ['.js', '.jsx']
//     }),
//     replace({
//       'process.env.NODE_ENV': JSON.stringify('production'),
//     }),
//     babel({ babelHelpers: 'bundled' }),
//     imagemin({
//       publicPath: 'assets/images',
//     }),
//     scss({
//       include: ['./src/**/*.css', './src/**/*.scss', './src/**/*.sass'],
//       output: (styles: string) => {
//         content('bundle.css', styles);
//       },
//     }),
//   ]
// }];
