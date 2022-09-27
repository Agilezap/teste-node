// configuração da conexão com o banco de dados
const config = {
    db: {
      host: "localhost", // servidor do banco de dados
      user: "root", // usuário do banco de dados
      password: "", // senha do banco de dados
      database: "todo", // banco de dados
    },
  };

  // exportando esse módulo para acesso em outros arquivos
  module.exports = config;