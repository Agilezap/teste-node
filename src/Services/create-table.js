// Módulo para criação da tabela TB_TODOS
// Também popula a tabela com primeiros registros

// Siga as instruções para executar o comando para criação da tabela tb_todos:
// 1 - Entre no diretório do projeto pelo CONSOLE ou GITBASH
// 2 - Execute o comando: node src/Services/create-table.js
// 3 - O sistema deverá exibir as mensagens de sucesso !

// requisições
const mysql = require('mysql2');
const config = require('../../config');

// configuração da conexão com o banco de dados
const connection = mysql.createConnection(config.db);

// iniciando a conexão com o banco de dados
connection.connect((err) => {
    if (err) return console.log(err);
    console.log('banco de dados conectado com sucesso !');
    
    // chamada da função para criação da tabela tb_todos
    createTable(connection);

    // chamada da função para criação dos primeiros registros da tabela tb_todos
    addRows(connection);
})

// função para criação da tabela tb_todos
function createTable(conn) {
    const sql = `CREATE TABLE IF NOT EXISTS tb_todos(
                 ID int NOT NULL AUTO_INCREMENT,
                 nome varchar(150) NOT NULL,
                 descricao varchar(255) NOT NULL,
                 PRIMARY KEY (ID)
                 );`;

    conn.query(sql, (error) => {
        if (error) return console.log(error);
        console.log("tabela 'tb_todos' criada com sucesso !");
    });
}

// função para popular os primeiros registros da tabela tb_todos
function addRows(conn) {
    const sql = "INSERT INTO tb_todos(nome,descricao) VALUES ?";
    const values = [
        ['tarefa 1', 'execute a tarefa 1'],
        ['tarefa 2', 'execute a tarefa 2'],
        ['tarefa 3', 'execute a tarefa 3']
    ];
    conn.query(sql, [values], (error, results, fields) => {
        if (error) return console.log(error);
        console.log('primeiros registros adicionados com sucesso !');
        conn.end(); //finaliza a conexão
    });
}