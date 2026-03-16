// Write node.js script to copy content of one file to the other file. data 
//should be fetched from source.txt and insert to destination.txt

var fs = require('fs');

fs.writeFile('one.txt', "some content in one.js", (err) => {
    if (err) {
        throw err;
    }
    else {
        fs.copyFile('one.txt', 'two.txt', (err) => {
            if (err) {
                throw err;
            }
            else {
                fs.readFile('two.txt', (err, data) => {
                    if (err) {
                        throw err;
                    }
                    else {
                        console.log(data.toString())
                    }
                })
            }
        })
    }
})