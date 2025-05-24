import http from 'http';
import fs from 'fs';

fs.rename('mynewfile1.txt', 'myrenamefile.txt', err => {
    if(err) throw err;
    console.log('File Renamed!');
});