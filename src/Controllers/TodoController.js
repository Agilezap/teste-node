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
    try {
        db.query('SELECT * FROM tb_todos').then((dados) => {
            res.status(200).send(dados);
        });
    } catch (err) {
        console.error('Erro ao recuperar a lista de TODOS !', err.message);
        next(err);
    }
};

// metodo get para buscar TODO por um ID
exports.getById = (req, res, next) => {

    let filter = '';
    let id = req.params.id;

    if( id ) {
        filter = ' WHERE ID=' + parseInt(id);
    }

    try {
        db.query('SELECT * FROM tb_todos' + filter).then((dados) => {
            res.status(200).send(dados);
        });
    } catch (err) {
        console.error('Erro ao recuperar um TODO por ID !', err.message);
        next(err);
    }    
};