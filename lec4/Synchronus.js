var fs = require('fs')
// fs.writeFileSync('file1.txt', 'This is first Line 2')

// // var data = fs.readFileSync('file1.txt', 'utf-8')
// // console.log(data)

// //  or

// var data = fs.readFileSync('file1.txt')
// console.log(data.toString())

// fs.appendFileSync('file1.txt', '\nThis is line 2')
// fs.renameSync('file1.txt', 'rename.txt')

// fs.copyFileSync('rename.txt', 're2.txt')
// fs.unlinkSync('rename.txt')

// fs.mkdirSync('MyFolder')
// fs.rmdirSync('MyFolder')


// fs.mkdirSync("hello")
fs.appendFileSync("hello/abc.txt", "sample content")
