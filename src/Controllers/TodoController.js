// controlador com a definição dos métodos do recurso TODO

const db = require('../db/db');

// metodo post inicial
exports.post = (req, res, next) => {
    res.status(201).send('Rota POST!');
};

// metodo put inicial
exports.put = (req, res, next) => {
    let id = req.params.id;
    res.status(201).send(`Rota PUT com ID! --> ${id}`);
};

// metodo path inicial
exports.path = (req, res, next) => {
    let id = req.params.id;
    res.status(201).send(`Rota PATH com ID! --> ${id}`);
};

// metodo delete inicial
exports.delete = (req, res, next) => {
    let id = req.params.id;
    res.status(200).send(`Rota DELETE com ID! --> ${id}`);
};

// metodo get para listar os TODOS
exports.get = (req, res, next) => {
    db.query('SELECT * FROM tb_todos').then((dados) => {
        res.status(200).send( dados );
    });
};

// metodo get by ID inicial
exports.getById = (req, res, next) => {
    let id = req.params.id;
    res.status(200).send(`Rota GET com ID! ${id}`);
};