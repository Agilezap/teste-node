// Módulo para conexão e execução das queries em banco de dados

// requisições
const mysql = require('mysql2/promise');
const config = require('../../config');

// método para conexão e execução das queries
async function query(sql, params) {
  const connection = await mysql.createConnection(config.db);
  const [results, ] = await connection.execute(sql, params);

  return results;
}

module.exports = {
  query
}