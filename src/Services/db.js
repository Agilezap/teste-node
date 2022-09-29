/**
 * Módulo para conexão e execução das queries em banco de dados
 * Autor: Allan Gleison Santos
 */

// imports e requisições de arquivos do projeto
const mysql = require('mysql2/promise');
const config = require('../../config');

/**
 * método para conexão e execução das queries
 * @param {*} sql queries
 * @param {*} params parametros para queries
 * @returns results
 */
async function query(sql, params) {
  const connection = await mysql.createConnection(config.db);
  const [results,] = await connection.execute(sql, params);

  return results;
}

module.exports = {
  query
}