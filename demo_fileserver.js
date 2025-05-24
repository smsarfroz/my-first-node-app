import http from 'http';
import fs from 'fs';
import {URL} from 'url';

http.createServer((req, res) => {
    const baseURL = `http://${req.headers.host}`;
    const q = URL.parse(req.url, baseURL);
    const filename = "." + q.pathname;
    console.log(filename);
    fs.readFile(filename, (err, data) => {
        if (err) {
            res.writeHead(404, {'Content-Type': 'text/html'});
            return res.end("404 Not Found");
        }
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
    });
}).listen(8080);