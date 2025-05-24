import http from 'http';
import fs from 'fs';

fs.writeFile('mynewfile3.txt', 'This is my text', err => {
    if(err) throw err;
    console.log('Saved!');
});