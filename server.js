const express = require('express');
const cors = require('cors');
const app = express();

// definição da porta padrão da api
const port = 3000;

// liberando acesso as rotas da api
require('./src/Routes/index')(app);
 
// configuração para aceitar requisições de qualquer origem
app.use(cors());

// configuração para retornar tudo em JSON
app.use(express.json());

//iniciando o servidor
app.listen(port);
console.log('API funcionando!');