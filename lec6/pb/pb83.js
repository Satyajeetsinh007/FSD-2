// Write a nodeJS script to fire an event named calculate which 
// calculates the total marks of 5 subjects about of 25 marks and 
// displays the total marks on console as an output.The calculate event 
// fires another event name percentage which takes total marks as 
// argument and percentage should get displayed in console.


const EventEmitter = require('events');
const emitter = new EventEmitter();
var sub = { "sub1": 19, "sub2": 4, "sub3": 20, "sub4": 22, "sub5": 19 }

emitter.on('calculate', (sub) => {
    let x = sub.sub1 + sub.sub2 + sub.sub3 + sub.sub4 + sub.sub5
    console.log(`addition=:${x}`)
    emitter.emit('percentage', x)
})

emitter.on('percentage', (sub) => {
    console.log(`Percentage=:${(sub / 125) * 100}`)
})

emitter.emit('calculate', sub)
