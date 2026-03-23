// Write node js script to fetch values from url given below and display output as asked.
// "https://www.google.com/exam.txt?c1=Hello&amp;c2=FSD2+T1+Test&amp;c3=
// Welcome+to+LJU#AllTheBest"
// 1) Data must be written as below in file named “exam.txt”. File name must be 
// fetched from
// the url given above.
// Output:
// Hello!
// Welcome to LJU FSD2 T1 Test
// #AllTheBest
const url = require('url');
var fs = require('fs');
const adr = "https://www.google.com/exam.txt?c1=Hello&c2=FSD2+T1+Test&c3=Welcome+to+LJU#AllTheBest"
process.noDeprecation = true; // Does not allow warning to come in terminal

const q = url.parse(adr, true);

console.log(q.query.c1 + "!")
console.log(q.query.c3 + "!")
console.log(q.query.c2 + "!")
console.log(q.path)
console.log(q.pathname)



fs.writeFileSync('.' + q.pathname, q.query.c1 + "!\n"+q.query.c3 + " "+q.query.c2 + "\n"+q.hash)

// ./file1.txt ----> here '.' represent current folder