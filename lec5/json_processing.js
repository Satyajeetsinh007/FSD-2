const student = [
    { 'name': 'ABC', 'age': '30' },
    { 'name': 'DEF', 'age': '28' }
]

var ps = require('fs');
ps.writeFileSync('student.txt', JSON.stringify(student))

data = ps.readFileSync('student.txt', 'utf-8')

b = JSON.parse(data)
console.log(b)