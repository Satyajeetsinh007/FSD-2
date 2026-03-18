// Write a Node.Js program for following action
// 1.Write a file having five random elements separated by white 
// space in .txt file.
// 2.append sorted array of these 5 elements in same file along with 
// message : “Sorted array:” in new line.
// 3.Find maximum number from that and append with message 
// “maximum number=” in same file. 

var fs = require('fs');

fs.writeFile('Random.txt', '21 1 90 29 45 55 2 5', (err) => {
    if (err) {
        throw err
    }
    else {
        fs.readFile('Random.txt', 'utf-8', (err, data) => {
            if (err) {
                throw err
            }
            else {
                data = data.split(" ")
                data.sort((a, b) => a - b)
                fs.appendFile('Random.txt', '\nSorted Array:' + data, (err) => {
                    if (err) {
                        throw err
                    }
                    else {
                        fs.appendFile('Random.txt', '\nMaximum no=' + data[data.length - 1], (err) => {
                            if (err) {
                                throw err
                            }
                            else {
                                console.log("Operations completed")
                            }
                        })
                    }
                })
            }
        })
    }
});
