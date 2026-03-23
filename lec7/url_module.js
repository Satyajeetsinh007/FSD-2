let url = require('url');
let adr = 'http://localhost:8080/default.htm?year=2017&month=february#523';
process.noDeprecation = true; // Does not allow warning to come in terminal
let q = url.parse(adr, true); //by default-->False ,if true it returns in object format otherwise it returns in string format

console.log(q)
// console.log(q.host);
// console.log(q.pathname);
// console.log(q.search);

// let qdata = q.query;
// console.log(qdata.month);

// console.log(q.protocol)
// console.log(q.port)
// console.log(q.query.year)
// console.log(q.hash)




