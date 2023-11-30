const http = require('http');

// create server object
const server = http.createServer((request, response)=>{
    // access control... allows everything with *
    response.setHeader("Access-Control-Allow-Origin", "*")
    // create own small api object
    response.write("{\"Cars\": [\"Volvo\", \"Opel\", \"BMW\"]\}");    
    response.end()  // ends the response
})

// default port 8080
server.listen(8080)
console.log("our server is running")

