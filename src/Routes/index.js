// definição de todas as rotas da api
const TodoRoute = require('./TodoRoute');
module.exports = (app) => {
   TodoRoute(app) // aqui vamos liberar o acesso às rotas do recurso TODO
}