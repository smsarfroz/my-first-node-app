import http from 'http';
import fs from 'fs';

fs.appendFile('mynewfile1.txt', 'This is my text.', err => {
    if (err) throw err;
    console.log('Saved!');
});

