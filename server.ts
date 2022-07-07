import http from 'http';
import {defaults} from '@nrk/fargerik-defaults'

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end(`<pre>${JSON.stringify(defaults, null, 2)}</pre>`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});