// const EventEmitter = require('events');
// const emitter = new EventEmitter();

// // Listener
// emitter.on('greet', (name) => {
//     console.log(`Hello, ${name}!`);
// });
// emitter.on('greet', () => {
//     console.log(`Hello, Students`);
// });

// // Emit event(Trigger)
// emitter.emit('greet', 'Alice');
// emitter.emit('greet')

// ---------------------

const order = {
    'id': 1,
    "email": "abc@gmail.com",
    'customer': 'John Cena'
}
const EventEmitter = require('events');
const emitter = new EventEmitter();

emitter.on('orderplaced', (order) => {
    console.log(`email sent to ${order.email}.Your order ${order.id} is confirmed`)
})
emitter.on('orderplaced', (order) => {
    console.log(`Database updated:order ${order.id} saved for ${order.customer}`)
})

function place_order(order) {
    console.log('Order is being placed')
    emitter.emit('orderplaced', order)
}

place_order(order);