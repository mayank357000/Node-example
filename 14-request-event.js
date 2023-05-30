//Boht saari built in modules uses this Event Emitter API
//jaise ye server.on('request ) bhi wahi hai
//ye bhi and hi andr uska code use kr rhi hai 
//koi class extend kr rhi hogi eventEmitter class and would
//be using it

const http = require('http')

// const server = http.createServer((req, res) => {
//   res.end('Welcome')
// })

// Using Event Emitter API
const server = http.createServer();//isne ek instance bnaya 
// emits request event
// subcribe to it / listen for it / respond to it
server.on('request', (req, res) => {//listening chalu hui aur badme and emit called internally
  res.end('Welcome')
})

server.listen(5000)

//so normally ham events nhi banaenge mgr
//boht se modules use krte hai unka internally