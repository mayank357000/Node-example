
// //PROMISE VERSION OF FS ASYNC FILE 11
// //readFile ek callback leta hai wo change nhi hota
// //promises se order bnana pdta hai function run
// //so callbacks remains the same
// const { readFile, writeFile } = require("fs");
// //promises ke liye import

// console.log('pINTED');

// const getText = (path) => {
//   return new Promise((resolve, reject) => {
//     readFile(path, "utf8", (err, data) => {
//       if (err) {
//         reject(err);
//       } else resolve(data);
//     });
//   });
// };

// getText("./first.txt")
//   .then((result) => console.log(result))
//   .catch((err) => console.log(err));
// // './content/first.txt'

////////////////await approach

// const start=async()=>{
//     try {
//         const first = await getText("../content/first.txt");
//         const second = await getText("../content/second.txt");
//         console.log(first,second);
//     } catch (error) {
//         console.log(error);
//     }
// }
// start();

//agr ab chahiye ki koi function by default promise return krey then can use


// const util = require('util')
// const readFilePromise = util.promisify(readFile)
// const writeFilePromise = util.promisify(writeFile)

//else better way to do this is like this, module ke aage .promsiese lga do
//and most of the time alreaady ext lib promises return kr rhi hogi so ye 
//bhi nhi krna pdega

const {readFile,writeFile}=require('fs').promises;

//callback nhi chahiye ab jo resolve reject krta phire, seedha data wapas aaega
//jaise pehle async function ko callback dena pdta tha ki data return krey kuch krke
//ab wo data expected as a promise khud hu return kr dega 
const start = async () => {
  try {
    const first = await readFile("../content/first.txt",'utf8');
    const second = await readFile("../content/second.txt",'utf8');
    await writeFile( '../content/result-mind-grenade.txt',
      `THIS IS AWESOME : ${first} ${second}`,
      { flag: 'a' })
    console.log(first, second);
  } catch (error) {
    console.log(error);
  }
};
start();