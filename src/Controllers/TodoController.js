// controlador com a definição dos métodos do recurso TODO

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

// metodo get inicial
exports.get = (req, res, next) => {
    res.status(200).send('Rota GET!');
};

// metodo get by ID inicial
exports.getById = (req, res, next) => {
    let id = req.params.id;
    res.status(200).send(`Rota GET com ID! ${id}`);
};