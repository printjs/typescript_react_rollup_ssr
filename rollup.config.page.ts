import * as rollup from 'rollup';
import WebSocket from 'ws';
import { universalPlugins } from './plugins';
const copy = require('rollup-plugin-copy-assets');
const watcher = rollup.watch({
  input: 'src/entry.tsx',
  watch: {
    clearScreen: true,
    include: ['src/**/*']
  },
  output: {
    dir: 'script',
    format: 'iife',
  },
  plugins: universalPlugins.concat([
    copy({
      assets: [
        'src/assets/fonts'
      ],
    }),
  ])
});
const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', (ws) => {
  ws.on('message', (message) => {
    console.log('received: %s', message);
    watcher.on('event', (event) => {
      if (event.code === 'END') {
        ws.send('The browser refresh');
      }
    });
  });
});
