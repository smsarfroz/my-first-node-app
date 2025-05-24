import {URL} from 'url';

const adr = 'http://localhost:8080/default.htm?year=2017&month=february';
const q = new URL(adr);

console.log(q.host);
console.log(q.pathname);
console.log(q.search);

const qdata = q.searchParams;
console.log(qdata);
console.log(qdata.year);
console.log(qdata['year']);
console.log(qdata[0]);
const {year, month} = Object.fromEntries(qdata);
console.log(year, month);

/*
localhost:8080
/default.htm
?year=2017&month=february
URLSearchParams { 'year' => '2017', 'month' => 'february' }
undefined
undefined
undefined
2017 february
*/