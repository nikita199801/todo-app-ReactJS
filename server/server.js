import todos from "../src/todos.json";
const http = require('http')


http.createServer((req, res)=>{
    switch(req.method){
        case "POST":
            req.on('data', (data)=>{
                process.stdout.write(data)
            })
    }

}).listen(5000 ,`127.0.0.1`,()=>{
    console.log('server running...')
})