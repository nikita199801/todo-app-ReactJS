// import todos from "../src/todos.json";
const http = require('http')
const fs = require('fs')

http.createServer((req, res)=>{
    switch(req.method){
        case "POST":{
            if (req.url === '/new') {
                req.on('data', (data)=>{
                    let todos = require("../src/todos.json")
                    res.statusCode = 200
                    res.statusMessage = 'DATA_RECIVED'
                    res.setHeader("Access-Control-Allow-Origin", '*')
                    todos.push(JSON.parse(data))
                    // console.log(todos)
                    fs.writeFileSync('../src/todos.json', JSON.stringify(todos), err =>{
                        console.log(err)
                    })
                    res.end()
                })
            }
 
            if (req.url === '/edit') {
                req.on('data', (data)=>{
                    dataToEdit = JSON.parse(data)
                    let todos = require("../src/todos.json")
                    res.statusCode = 200
                    res.statusMessage = 'DATA_RECIVED'
                    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000")
                    todos.forEach(todo => {
                        if (todo.id === dataToEdit.id){
                            todo.title = dataToEdit.newTitle
                        }
                    });
                    fs.writeFileSync('../src/todos.json', JSON.stringify(todos), err =>{
                        console.log(err)
                    })
                    res.end()
                    // console.log(todos)
                })
            }

            if(req.url === '/delete') {
                req.on('data', (data)=>{
                    dataToDelete = JSON.parse(data)
                    console.log(dataToDelete)
                    let todos = require("../src/todos.json")
                    res.statusCode = 200
                    res.statusMessage = 'DATA_RECIVED'
                    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000")
                    editted  = []
                    todos.forEach(todo => {
                        if(dataToDelete.id !== todo.id){
                            editted.push(todo)
                        }
                    })
                    fs.writeFile('../src/todos.json', JSON.stringify(editted), err =>{
                        console.log("DATA: ",editted)
                    })
                    res.end()
                }) 
            }
        }
        case "GET":{
            if (req.url === '/') {
                res.statusCode = 200
                res.statusMessage = 'DATA_SEND'
                res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000")
                todos = require('../src/todos.json')
                res.write(JSON.stringify(todos))
                res.end()
            }
        }
    }

}).listen(5000 ,`localhost`,()=>{
    console.log('server running...')
})