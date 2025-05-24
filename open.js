import http from 'http';
import fs from 'fs';

fs.open('mynewfile2.txt', 'w', (err, file) => {
    if(err) throw err;
    console.log('Saved!');
});