// we get back the class from requiring events module
// if want custom extend from class
// otherwise just for emitting and handling events create instance
const EventEmitter = require('events')
//just like browser mai click and other events
//yha can setup a event 
//emit/call krne se same name ka event
//callback called

const customEmitter=new EventEmitter();//made new instance

// on(listen krna) and emit(respond krna) methods
// keep track of the order
//emit before listening error nhi dega mgr hoga bhi nhi kuch
//emit jab krwaoge tab hoga 
// additional arguments
// built-in modules utilize it

customEmitter.on('response',(name,id)=>{//before emit listen krna , so code ke order mai updar likho isko
  console.log(`name hai ${name} and id hai ${id}`);
})

customEmitter.on('response', () => {
  console.log('some other logic here')
})

customEmitter.emit('response');//event called
