//os is a built in module
//so don't sstart with ./ to require

const os=require('os');

const user=os.userInfo();
console.log(user);

console.log(`the system uptime is ${os.uptime()} seconds`);

const currentOSInfo={
  name:os.type(),
  release:os.release(),
  totalMem:os.totalmem(),
  freeMem:os.freemem()
};

console.log(currentOSInfo);
