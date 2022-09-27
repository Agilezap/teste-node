// definição de todas as rotas do recurso TODO
const TodoController = require('../Controllers/TodoController');
module.exports = (app) => {
   app.post('/todo', TodoController.post);
   app.put('/todo/:id', TodoController.put);
   app.patch('/todo/:id', TodoController.path);
   app.delete('/todo/:id', TodoController.delete);
   app.get('/todos', TodoController.get);
   app.get('/todo/:id', TodoController.getById);
}