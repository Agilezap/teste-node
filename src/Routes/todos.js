/**
 * definição de todas as rotas do recurso TODO
 * Autor: Allan Gleison Santos
 */

// imports e requisições de arquivos do projeto
const express = require('express');
const router = express.Router();
const todos = require('../Services/todo');

/* GET todos. */
router.get('/', async function (req, res, next) {
    try {
        res.json(await todos.getTodos(req.query.page));
    } catch (err) {
        console.error(`Erro ao recuperar a lista de TODOS `, err.message);
        next(err);
    }
});

/* POST todo */
router.post('/', async function (req, res, next) {
    try {
        res.json(await todos.create(req.body));
    } catch (err) {
        console.error(`Erro ao criar registro em tb_todos`, err.message);
        next(err);
    }
});

/* PUT todo */
router.put('/:id', async function (req, res, next) {
    try {
        res.json(await todos.update(req.params.id, req.body));
    } catch (err) {
        console.error(`Erro ao atualizar registro em tb_todos`, err.message);
        next(err);
    }
});

/* DELETE todo */
router.delete('/:id', async function (req, res, next) {
    try {
        res.json(await todos.remove(req.params.id));
    } catch (err) {
        console.error(`Erro ao deletar registro em tb_todos`, err.message);
        next(err);
    }
});

module.exports = router;