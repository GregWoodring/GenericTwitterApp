const express = require('express');
const bodyParser = require('body-parser');
let todosController = require('./controllers/todos')


let app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.get('/todos', todosController.getList);
app.post('/todos', todosController.postListItem);
app.put('/todos/:id', todosController.editListItem);
app.delete('/todos/:id', todosController.deleteListItem);


app.listen(5000, () => {
    console.log('Im here on port 5000');
})