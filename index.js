// #!/usr/bin/env node

// import http from 'http';
// import dt from './myfirstmodule.js';
// import { URL } from 'url';

// http.createServer(function (req, res) {
//     res.writeHead(200, {'content-type': 'text/html'});
//     // res.write("The date and time are currently: " + dt() + "\n");
//     console.log(req.url);
//     // const url = new URL('/?year=2017&month=July', 'http://localhost:8080');
//     // console.log(url);
//     // const q = url.searchParams.get("query");
//     // console.log(q);
//     // const txt = q.year + " " + q.month;
//     // res.end(txt);
// }).listen(8080);


import http from 'http';
import { URL } from 'url';

const server = http.createServer((req, res) => {
  // Parse the URL
  const baseURL = `http://${req.headers.host}/`;
  const parsedUrl = new URL(req.url, baseURL);
  
  // Get query parameters
  const { year, month } = Object.fromEntries(parsedUrl.searchParams);
  
  // Set response headers
  res.writeHead(200, { 'Content-Type': 'text/html' });
  
  // Send the response
  res.end(`${year || ''} ${month || ''}`);
});

server.listen(8080, () => {
  console.log('Server running at http://localhost:8080/');
});

/*
const entries = [['name', 'John'], ['age', 30], ['city', 'New York']];
const obj = Object.fromEntries(entries);

console.log(obj);
// Output: { name: 'John', age: 30, city: 'New York' }
 */