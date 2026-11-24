const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 6767;
const FILE = path.join(__dirname, 'index.html');

http.createServer((req, res) => {
  if (req.url !== '/' && !req.url.startsWith('/?') && req.url !== '/index.html') {
    res.writeHead(404); res.end(); return;
  }
  fs.readFile(FILE, (err, data) => {
    if (err) { res.writeHead(500); res.end('error'); return; }
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8', 'Cache-Control': 'no-store' });
    res.end(data);
  });
}).listen(PORT, () => console.log(`love.exe -> http://localhost:${PORT}`));
