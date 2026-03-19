// Write a node.js script to create two listeners for a common event call 
// their respective callbacks. Print number of events associated with an 
// emitter. Remove one of the listeners & call remaining listners again. 
// Print number of remaining listners also.

const EventEmitter = require('events');
const emitter = new EventEmitter();

let listner1 = () => {
    console.log("hi 1");
}
emitter.on('eve1', listner1)
const listner2 = emitter.on('eve1', () => {
    console.log("hi 2");
})

emitter.emit('eve1')
console.log(emitter.listenerCount('eve1'))
emitter.removeListener('eve1', listner1)
console.log(emitter.listenerCount('eve1'))
