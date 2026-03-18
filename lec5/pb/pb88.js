// Write a script to define two JSON objects named as “division1” and 
// “division2” having an array to store 5 integer numbers. Write this 
// object in a file named XYZ.txt using file system. Define third array  
// as result which gives output as explained below: Suppose first array 
// contains base value and second array contains power value and then 
// third array will give output as: a^b.For example: first array[0]=2 and 
// second array[0]=3 then it should return 8 in third array[0] .Also 
// append this result in XYZ.txt and as well as on console.

var fs = require("fs")

var division1 = { nums: [1, 2, 3, 4, 5] }
var division2 = { nums: [6, 7, 8, 9, 10] }
var res = { nums: [] }

for (var i = 0; i < division1.nums.length; i++) {
    res.nums.push(Math.pow(division1.nums[i], division2.nums[2]))
}
console.log(res)

fs.writeFileSync('xyz.txt', JSON.stringify(division1) + '\n' + JSON.stringify(division2) + '\n')
fs.appendFileSync('xyz.txt', JSON.stringify(res))