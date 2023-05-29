// GLOBALS  - NO WINDOW !!!!

// __dirname  - path to current directory
// __filename - file name
// require    - function to use modules (CommonJS)
// module     - info about current module (file)
// process    - info about env where the program is being executed

//window(fetch,dom) nhi hai mgr ye upar wale object use kr skte hai gloablly
//alos setIntervala and setTimeout bhi availaible

console.log(__dirname)
setInterval(() => {
  console.log('hello world')
}, 1000)
