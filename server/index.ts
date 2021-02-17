import React from 'react';
import ReactDOMServer from 'react-dom/server';
import fastify from 'fastify';
import { join } from 'path';
import template from 'art-template';
import open from 'open';
import pointOfView from 'point-of-view';

const server = fastify({ logger: true });

const { RoutesServerSide } = require('../script/server.side');

server.register(pointOfView, {
  engine: {
    'art-template': template,
  }
});

server.register(require('fastify-static'), {
  root: join(process.cwd(), 'script'),
  prefix: '/script',
});

server.get('*', async (request, reply) => {
  const app = ReactDOMServer.renderToString(React.createElement(RoutesServerSide, { location: request.url }));

  reply.view('/static/view.html', {
    app,
    script: ['/script/entry.js'],
    style: ['/script/styles/bundle.css'],
    title: process.env.NODE_ENV,
  });
});

async function start() {
  try {
    await server.listen(3000);
    open('http://localhost:3000');
  } catch (err) {
    server.log.error(err);
    process.exit(1);
  }
}

start();
