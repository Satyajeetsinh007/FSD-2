var fs = require('fs');
fs.writeFile('hello/abc.txt', 'hello Node js', (err) => {
    if (err) {
        throw err;
    }
    else {
        console.log("file written")
    }
})

fs.readFile('hello/abc.txt', 'utf-8', (err, datas) => {
    if (err) {
        throw err;
    }
    else {
        console.log(datas);
    }
})

fs.rename("hello/abc.txt", "hello/abcNew.txt", (err) => {
    if (err) {
        throw err
    }
    else {
        console.log("rename")
    }
})

fs.appendFile('hello/abc.txt', 'New js', (err) => {
    if (err) {
        throw err;
    }
    else {
        console.log("file appended")
    }
})

fs.copyFile('hello/abcNew.txt', 'hello/lkj.txt', (err) => {
    if (err) {
        throw err;
    }
    else {
        console.log(" copy file Created")
    }
})
console.log("hii")
