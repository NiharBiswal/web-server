var express = require('express');
var app = express();

var PORT = process.env.PORT || 3000;

//var middleware = require('./middleware.js');
//app.use(middleware.logger);
//
//app.get('/about',middleware.requireAuthentication, function(req,res){
//    res.send("About US !!");
//});
//
//app.use(express.static(__dirname + "/public"));




var todos = [{
    id:1,
    desc: 'meet mom for lunch',
    completed:false
},{
    id:2,
    desc: 'Go to market',
    completed:false
},{
    id:3,
    desc: 'Feed the cat',
    completed:true
}];

app.get('/', function(req, res){
    res.send('Todo API Root');
});

app.get('/todos', function(req, res){
    res.json(todos);
});


// GET /todos/:id

app.get('/todos/:id', function (req,res){
    var todoId = parseInt(req.params.id,10);
    var matchedTodo;

    todos.forEach(function(todo){
        if (todoId === todo.id) {
            matchedTodo = todo;
        }
    });

    if (matchedTodo) {
        res.json(matchedTodo);
    } else {
        res.status(404).send();
    }

});

app.listen(PORT , function(){
    console.log("Express server started  at port... " + PORT);
});