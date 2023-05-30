const http = require('http')

//IS SECTION PR HTTP FILE 12 KE BAAD ANA 

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end('Home Page')
  }
  if (req.url === '/about') {
    // blocking code
    //so try to aboid synchronous code
    //event loop use mai nhi aaega 
    //upar se bs /about nhi ,every request like / is being hampered and taking time
    for (let i = 0; i < 1000; i++) {
      for (let j = 0; j < 1000; j++) {
        console.log(`${i} ${j}`)
      }
    }
    res.end('About Page')
  }
  res.end('Error Page')
})

server.listen(5000, () => {
  console.log('Server listening on port : 5000....')
})
