var fs = require("fs");
fs.writeFileSync("s1.txt", JSON.stringify({ d: { a: 10, b: 20, c: [30, 10] } }))
var data = fs.readFileSync('s1.txt', 'utf-8')
var b = JSON.parse(data)
console.log(b.d.a + b.d.b);