const http = require('http');

const port = 3003;


const server = http.createServer((req , res)=>{
  console.log('hello' , req.url , req.method)
  console.log('req')
});

server.listen(port ,()=>{
  console.log(`running at  http://localhost:${port}`)
})



const server1 = http.createServer((req , res)=>{
  res.setHeader("content-type" , "application/json")

  let obj1 = {
    _id:1,
    
  }
});

server1.listen(3004 ,()=>{
  console.log(`running at  http://localhost:${port}`)
})

