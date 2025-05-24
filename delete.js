import http from 'http';
import fs from 'fs';

fs.unlink('mynewfile2.txt', err => {
    if(err) throw err;
    console.log('File deleted!');
});