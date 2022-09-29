/**
 * serviço com a definição dos métodos do recurso TODO
 * Autor: Allan Gleison Santos
 */

// imports e requisições de arquivos do projeto
const db = require('./db');
const helper = require('../../helper');
const config = require('../../config');

/**
 * metodo getTodos para listar os TODOS
 * @param {*} page para trabalhar com paginação.
 * @returns json com dados
 */
async function getTodos(page = 1) {
    const offset = helper.getOffset(page, config.listPerPage);
    const rows = await db.query(
        `SELECT * FROM tb_todos LIMIT ${offset},${config.listPerPage}`
    );
    const data = helper.emptyOrRows(rows);
    const meta = { page };

    return { data, meta }
}

/**
 * metodo create para criar um novo registro na tabela tb_todos
 * @param {*} data recebe o body da requisição
 * @returns message
 */
async function create(data) {
    const result = await db.query(
        `INSERT INTO tb_todos (nome, descricao) VALUES('${data.nome}','${data.descricao}')`
    );

    let message = 'Erro ao criar um novo registro !';

    if (result.affectedRows) {
        message = 'Registro criado com sucesso !';
    }

    return { message };
}

/**
 * metodo update para alterar um registro na tabela tb_todos
 * @param {*} id id do registro
 * @param {*} data recebe o body da requisição
 * @returns message
 */
async function update(id, data) {
    const result = await db.query(
        `UPDATE tb_todos SET nome='${data.nome}', descricao='${data.descricao}' WHERE ID=${id}`
    );

    let message = 'Erro ao atualizar registro !';

    if (result.affectedRows) {
        message = 'Registro alterado com sucesso !';
    }

    return { message };
}

/**
 * metodo remove para deletar um registro na tabela tb_todos
 * @param {*} id id do registro
 * @returns message
 */
async function remove(id) {
    const result = await db.query(
        'DELETE FROM tb_todos WHERE ID=' + parseInt(id)
    );

    let message = 'Erro ao deletar registro !';

    if (result.affectedRows) {
        message = 'Registro deletado com sucesso !';
    }

    return { message };
}

module.exports = {
    getTodos,
    create,
    update,
    remove
}