
let StaticServer = require('static-server')

let server = new StaticServer({
    rootPath: './build',
    port: 8080
})

server.start(function () {
    console.log(`Server Listening on Port ${server.port}`)
    console.log(`Local Server: 127.0.0.1/${server.port}`)
})