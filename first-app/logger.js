const EventEmitter = require('events')
//const emitter = new EventEmitter() 

var url = "http://mylogger.io/log" //dummy

/*function log(message){
    //Send dummy HTTP request
    console.log(message);

    //Raise an event
    emitter.emit('messageLogged',{1: 1, url: 'http://'})
}

module.exports= log;*/

class Logger extends EventEmitter{
    log(message){
        console.log(message)
        this.emit('messageLogged',{id:1, url:'http://'})
    }
    
}

module.exports = Logger