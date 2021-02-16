// import todos from "../src/todos.json";
const http = require('http')
const fs = require('fs')

let todos = require('../src/todos.json') 


http.createServer((req, res)=>{
    switch(req.method){
        case "POST":{
            if (req.url === '/new') {
                let toSave=[]
                req.on('data', (data)=>{
                    let newTodo = JSON.parse(data)
                    newTodo.id = newTodo.id = todos[todos.length-1].id+1
                    todos.forEach(todo => {
                        toSave.push(todo)
                    })
                    toSave.push(newTodo)
                    fs.writeFile('../src/todos.json', JSON.stringify(toSave, null, 2), () =>{
                        res.statusCode = 200
                        res.statusMessage = 'SAVED'
                        res.setHeader("Access-Control-Allow-Origin", '*')
                    })
                })
                res.end()
            }
 
            if (req.url === '/edit') {
                req.on('data', (data)=>{
                    dataToEdit = JSON.parse(data)
                    todos.forEach(todo => {
                        if (todo.id === dataToEdit.id){
                            todo.title = dataToEdit.newTitle
                        }
                    });
                    fs.writeFile('../src/todos.json', JSON.stringify(todos, null, 2), err =>{
                        res.statusCode = 200
                        res.statusMessage = 'DATA_RECIVED'
                        res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000")
                        res.end()
                    })
                    // console.log(todos)
                })
            }

            if(req.url === '/delete') {
                let toSave=[]
                req.on('data', (data)=>{
                    // console.log(JSON.parse(data))
                    dataToDelete = JSON.parse(data)
                    todos.forEach(todo => {
                        if(dataToDelete.id != todo.id){
                            toSave.push(todo)
                        }
                    })
                    fs.writeFile('../src/todos.json', JSON.stringify(toSave, null, 2), () =>{
                        res.statusCode = 200
                        res.statusMessage = 'DATA_RECIVED'
                        res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000")
                        res.end()
                    })
                })
            }
        }
        case "GET":{
            if (req.url === '/') {
                console.log(todos)
                res.statusCode = 200
                res.statusMessage = 'DATA_SEND'
                res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000")
                res.write(JSON.stringify(todos))
                res.end()
            }
        }
    }

}).listen(5000 ,`localhost`,()=>{
    console.log('server running...')
})