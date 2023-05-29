// local
const secret = 'SUPER SECRET'
// sharing this ones
const john = 'john'
const peter = 'peter'

console.log(module);

//hr file ke pass module object hota hai
//module ki property hai export(common js syntax)
//toh jo bhejo iske andr obj,function,variable
//wo wiase hi require se mil jaega

//same as named export 
module.exports = { john, peter }
