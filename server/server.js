const http = require('http')
const fs = require('fs')
const url = require('url')
http.createServer((req, res)=>{
    let uri = url.parse(req.url, true) 
    switch(req.method){
        case "POST":{
            if (uri.query.action === 'create') {
                let toSave=[]
                req.on('data', (data)=>{
                    res.statusCode = 200
                    res.statusMessage = 'SAVED'
                    res.setHeader("Access-Control-Allow-Origin", '*')
                    let newTodo = JSON.parse(data)
                    todos = JSON.parse(fs.readFileSync('../src/todos.json'))
                    if (todos.length === 0){
                        newTodo.id = 0
                    }else {
                        newTodo.id = todos[todos.length-1].id+1
                    }
                    todos.push(newTodo)
                    fs.writeFile('../src/todos.json', JSON.stringify(todos, null, 2), () =>{
                    })
                    res.end()
                })
            }
 
            if (uri.query.action === 'update') {
                req.on('data', (data)=>{
                    dataToEdit = JSON.parse(data)
                    res.statusCode = 200
                    res.statusMessage = 'DATA_RECIVED'
                    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000")
                    todos = JSON.parse(fs.readFileSync('../src/todos.json'))
                    todos.forEach(todo => {
                        if (todo.id === dataToEdit.id){
                            if(dataToEdit.newTitle){
                                todo.title = dataToEdit.newTitle
                                todo.color = dataToEdit.color
                            }
                            todo.completed = dataToEdit.completed
                        }
                    });
                    fs.writeFile('../src/todos.json', JSON.stringify(todos, null, 2), err =>{
                    })
                    res.end()
                })
            }

            if(uri.query.action === 'delete') {
                let toSave=[]
                req.on('data', (data)=>{
                    dataToDelete = JSON.parse(data)
                    res.statusCode = 200
                    res.statusMessage = 'DATA_RECIVED'
                    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000")
                    content = fs.readFileSync('../src/todos.json')
                    JSON.parse(content).map(todo => {
                        if(dataToDelete.id != todo.id){
                            toSave.push(todo)
                        }
                    })
                    fs.writeFile('../src/todos.json', JSON.stringify(toSave, null, 2), () =>{
                    })
                    res.end()
                })
            }
        }
        case "GET":{
            if (uri.query.action === 'read') {
                res.statusCode = 200
                res.statusMessage = 'DATA_SEND'
                res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000")
                fs.readFile('../src/todos.json', (err, data)=>{
                    res.write(JSON.stringify(JSON.parse(data)))
                    res.end()
                })
            }
        }
    }

}).listen(5000 ,`localhost`,()=>{
    console.log('server running...')
})