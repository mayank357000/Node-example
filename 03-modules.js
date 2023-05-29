// CommonJS, every file is module (by default)
// Modules - Encapsulated Code banane ka way(only share minimum)
//same jaise ham react/js mai import export krte the


//like named import le liya 
const {john,peter}=require("./04-names");

//default import jaise liya so name same rakhna
const sayHi=require("./05-utils");
const data = require('./06-alternative-flavor')

//WHEN WE REQUIRE A MODULE , WE ACTUALLY INVOKE IT
//SO ANDR jo FUNCTION tha 07 ke wo  RUN HO JATA HAI
//same as es6, import pr import hote hi invoke bhi file 
require('./07-mind-grenade')
sayHi('susan')
sayHi(john)
sayHi(peter)

//EVERYU FILE IS A MODULE IN NODE.JS, and has a module object associated with it

//node is based on common.js
//so vanilla js wala import export nhi
//reuqire-module.exports wagerah use 
