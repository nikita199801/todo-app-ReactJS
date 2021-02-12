// import todos from "../src/todos.json";
const http = require('http')
const fs = require('fs')

http.createServer((req, res)=>{
    switch(req.method){
        case "POST":{
            req.on('data', (data)=>{
                let todos = require("../src/todos.json")
                res.statusCode = 200
                res.statusMessage = 'DATA_RECIVED'
                res.end()
                todos.push(JSON.parse(data))
                console.log(todos)
                fs.writeFileSync('../src/todos.json', JSON.stringify(todos), err =>{
                    console.log(err)
                    fs.close()
                })
            })
        }
    }

}).listen(5000 ,`localhost`,()=>{
    console.log('server running...')
})