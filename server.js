/**
 * Arquivo server para inicialização do servidor da API
 * Autor: Allan Gleison Santos
 */

// imports e requisições de arquivos do projeto
const express = require("express");
const app = express();

// definição da porta padrão da api
const port = 3000;

// variável para liberar acesso as rotas do recurso TODOS
const todosRouter = require("./src/Routes/todos");

// configuração para retornar tudo em JSON
app.use(express.json());

app.use(
    express.urlencoded({
        extended: true,
    })
);

// liberando as rotas da api 
app.get("/", (req, res) => {
    res.json({ message: "rotas em funcionamento !" });
});

// liberando acesso as rotas do recurso TODOS
app.use("/todos", todosRouter);

/* Error handler middleware */
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    console.error(err.message, err.stack);
    res.status(statusCode).json({ message: err.message });
    return;
});

//iniciando o servidor
app.listen(port, () => {
    console.log(`API funcionando em http://localhost:${port}`);
});