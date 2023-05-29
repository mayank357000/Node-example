const {readFile,writeFile}=require('fs');

//async hai toh callback hoga
//jaise dom mai event ke baad kya krna hai callback

//koi cheez kro aur phir dusri ko call by callback
//callback hell hai ye is example main

console.log('task started');

readFile('./content/first.txt','utf8',(err,result)=>{
  if(err)
  {
    console.log(err)
    return;
  }
  const first=result;
  readFile("./content/second.txt", "utf8", (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    const second = result;
    writeFile(
      "./content/result-async.txt",
      "Here is the result:" + first + second
    ,{flag:'a'},(err,result)=>{
      if(err)
      console.log(err)
      else
      console.log('Reading ab khatmhui, offload hota hai async task milte hi '+
      'non blocking');
    });
  });
})

console.log('last statement reached ')