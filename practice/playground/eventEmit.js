var events = require('events');
var hungryAnimalEventEmitter = new events.EventEmitter();

function emitHungryAnimalEvents()
{
    hungryAnimalEventEmitter.emit("HungryCat");
    hungryAnimalEventEmitter.emit("HungryDog");
    hungryAnimalEventEmitter.emit("Fed");
}

var meow = function meow()
{
  console.log('meow meow meow');
}

hungryAnimalEventEmitter.on('HungryCat', meow);

logAllEmitterEvents(hungryAnimalEventEmitter);

emitHungryAnimalEvents();

function logAllEmitterEvents(eventEmitter)
{
    var emitToLog = eventEmitter.emit;

    eventEmitter.emit = function () {
        var event = arguments[0];
        console.log("event emitted: " + event);
        emitToLog.apply(eventEmitter, arguments);
    }
}
