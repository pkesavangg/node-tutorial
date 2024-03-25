const EventEmitter = require('events')

const customEmitter = new EventEmitter()


customEmitter.on('response', (name, id) => {
    console.log('data received', name, id)
})

customEmitter.on('response', (name, id) => {
    console.log('Some other logic', name, id)
})

customEmitter.emit('response', 'John', 34)
