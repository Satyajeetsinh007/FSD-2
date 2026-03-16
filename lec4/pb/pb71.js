var ps = require('fs')

ps.writeFileSync("s1.txt", "30 -1 60 2 20 40 65")

data = ps.readFileSync("s1.txt", 'utf-8');
data = data.split(" ")
data.sort((a, b) => a - b)
console.log(data)

