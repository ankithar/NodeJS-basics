function sayHello(name){
    console.log('hello '+name)
}

setTimeout(sayHello,3000,"Ankitha");

/*const log = require ('./logger') ; //import
console.log(logger)
console.log(module)

// O/P  { log: [Function: log] }  object with a method
log("Log message")*/


//Path information
const path = require('path')
var pathObj = path.parse(__filename)
console.log(pathObj)

//OS related tasks
const os = require('os')
var totalMemory = os.totalmem()
var freeMemory =  os.freemem()
console.log('Total memory = '+totalMemory)
console.log('Free memory = '+freeMemory)


console.log(`total memory: ${totalMemory}`)
 console.log(`free memory : ${freeMemory}`)

 //File related
 const fs = require('fs')
 const files = fs.readdirSync('./')
 console.log(files)


 fs.readdir('./',function(err,files){
     if(err) console.log('Error', err)
     else console.log('Result',files)
 })

 //Events
 /*const EventEmitter = require('events')
 const emitter = new EventEmitter()

 //Register a listener
 //emitter.on('messageLogged',function(arg){
emitter.on('messageLogged',(arg)=>{
     console.log('Listener called',arg);
 });

 //Raise an event
 emitter.emit('messageLogged', {id:1, url:'http://'})  

 //Raise: logging (data:message)
emitter.on('logging',(arg)=>{
    console.log("message is ",arg)
})

emitter.emit('messageLogged',"message to be looged")*/

const EventEmitter = require('events')
//const emitter =  new EventEmitter()

//Register a listener
/*emitter.on('messageLogged',(arg)=>{
    console.log('Listener called', arg)
})

const log = require('./logger')
log('message')
*/
const Logger = require('./logger')
const logger = new Logger()
logger.on('messageLogged',(arg)=>{
    console.log('Listener called ',arg)
})
logger.log('message')


//HTTP

const http = require('http')

const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.write('Hello world')
        res.end()
    }
   if(req.url === '/api/courses/'){
       res.write(JSON.stringify([1,2,3]))
       res.end()
   }
})

server.on('connection',(socket)=>{
    console.log('New connection...')
})
server.listen(3000)
console.log('listening on port 3000')