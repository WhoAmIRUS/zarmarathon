import Hapi from '@hapi/hapi';
import path from 'path';
import fs from 'fs';
import handlebars from 'handlebars';
import ReactDOM from 'react-dom/server';
import { setPath } from 'hookrouter';
import React from 'react';
import App from '../App/App';

const init = async () => {
  const server = Hapi.server({
    port: 3000,
    host: 'localhost',
  });

  await server.register(require('@hapi/inert'));

  server.route({
    method: 'GET',
    path: '/main.js',
    handler: (request, h) => h.file(path.join(process.cwd(), 'dist', 'main.js')),
  });

  server.route({
    method: 'GET',
    path: '/{any*}',
    handler: (request, h) => {
      setPath(request.path);
      const pathIndexHTML = path.join(process.cwd(), 'dist', 'index.html');
      const template = handlebars.compile(fs.readFileSync(pathIndexHTML, 'utf8'));
      const result = ReactDOM.renderToString(<App />);
      const page = template({
        content: result,
      });

      return page;
    },
  });

  await server.start();
  console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {
  console.log(err);
  process.exit(1);
});

init();
