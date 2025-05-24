import events from 'events';
const eventEmitter = new events.EventEmitter();

const myEventHandler = () => {
    console.log('I hear a scream!');
}

eventEmitter.on('scream', myEventHandler);

eventEmitter.emit('scream');