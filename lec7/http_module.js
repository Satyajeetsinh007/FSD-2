var h = require('http')
// var h1 = h.createServer((req, res) => {
//     res.write('hello');
//     res.end()
// })

// var h2 = h.createServer((req, res) => {
//     res.write('world');
//     res.end()
// })

// h1.listen(3001, () => {
//     console.log("Your server is running on port 3001")
// })

// h2.listen(3002, () => {
//     console.log("Your server is running on port 3002")
// })

// var h1 = h.createServer((req, res) => {
//     res.write('<h1>hello</h1>'); //Not working
//     res.end()
// })

// var h2 = h.createServer((req, res) => {
//     res.writeHead(200, {
//         'Content-Type': 'text/html'
//     })
//     res.write('<h1 style="color:red">hello</h1>');
//     res.end()
// })

// h2.listen(3001, () => {
//     console.log("Your server is running on port 3001")
// })


// h.createServer((req, res) => {
//     res.writeHead(200, {
//         'Content-Type': 'text/json'
//     })
//     const data = {
//         "sub": 'FSD',
//         "Topic": 'Node'
//     };
//     res.end(JSON.stringify(data))
// }).listen(3002, () => {
//     console.log("Server on 3002")
// })


h.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/html'
    })
    if (req.url == "/") {
        res.write("<h1>This is Home Page</h1>")
        res.end();
    }
    if (req.url == "/about") {
        res.write("<h2>this is about page</about>")
        res.end();
    }
}).listen(3001, () => {
    console.log("Server on 3001")
})
