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
                    editted  = []
                    todos.map(todo => {
                        if (todo.id !== dataToDelete.id ){
                            editted.push(todo)
                        }
                    })
                    // let indexOfTodoToDelete = todos.indexOf(dataToDelete)
                    // console.log(indexOfTodoToDelete)
                    // editted = todos.slice(0, indexOfTodoToDelete - 1).concat(todos.slice(indexOfTodoToDelete + 1))
                    // console.log(editted)
                    fs.truncate('../src/todos.json', 0, ()=>{
                        fs.writeFile('../src/todos.json', JSON.stringify(editted), err =>{
                            console.log(err)
                        })
                    })
                    res.end()
                })
            }
        }
    }

}).listen(5000 ,`localhost`,()=>{
    console.log('server running...')
})