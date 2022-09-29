# Teste Desenvolvedor Agilezap

Desenvolvedor: Allan Gleison Santos

## API

Nessa API desenvolvida em NodeJs, é possível:

- Listar todos os TODOs.
- Adicionar um novo TODO.
- Alterar um TODO.
- Deletar um TODO.

## Pré Requisitos

1 - Ter instalado o cliente de banco de dados MYSQL ( Pode usar por exemplo o XAMPP que já vem com o MYSQL )

2 - Ter instalado o NODEJS

3 - Ter instalado o pacote NPM

4 - Use o Postman ou algum outro HTTP client para testar os métodos de requisição HTTP ( get, post, put, delete )

## Instruções

1 - Execute o MYSQL e crie um novo banco de dados com o nome: <strong>"todo"</strong>

2 - Pelo console, navegue até o diretório do projeto e execute o comando: <strong>"npm install"</strong> para atualização dos pacotes npm do projeto

3 - Ainda no diretório do projeto e, com o banco já criado, abra o console e execute o seguinte comando para criação da tabela e de alguns registros:

<pre>node src/Services/create-table.js</pre>

4 - O sistema deverá exibir as mensagens de sucesso na criação da tabela e dos primeiros registros !

5 - Execute o comando <strong>"npm i -g nodemon"</strong> para instalação do pacote nodemon apropriado para executar o servidor do node

6 - Após a instalação execute o comando <strong>"nodemon server.js"</strong> ( você deverá estar no diretório do projeto )

- Você deverá ver no console o seguinte resultado:

<pre>D:\DESENV\DEVNODEJS\teste-node>nodemon server.js
[nodemon] 2.0.20
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,json
[nodemon] starting `node server.js`
API funcionando em http://localhost:3000
</pre>

7 - Agora com o servidor em funcionamento, você poderá abrir o navegador e acessar a url "http://localhost:3000"

- Você deverá ver uma tela com os resultados dos registros cadastrados na tabela como a seguir:

<pre>
{"data":[{"ID":1,"nome":"tarefa 1","descricao":"execute a tarefa 1"},{"ID":2,"nome":"tarefa 2","descricao":"execute a tarefa 2"},{"ID":3,"nome":"tarefa 3","descricao":"execute a tarefa 3"}],"meta":{"page":1}}
</pre>

## Criando um novo registro na tabela ( Método POST )

Como alternativa ao HTTP CLIENT, ainda no diretório do projeto, execute o comando:

<pre>
curl -i -X POST -H 'Accept: application/json; charset=utf-8' -H 'Content-type: application/json; charset=utf-8' http://localhost:3000/todos --data '{"nome":"tarefa 4","descricao":"fazer tarefa 4"}'
</pre>

Você deverá receber o seguinte retorno:

<pre>
HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 43
ETag: W/"2b-zKo5blphiv49L2q9jgHO7POEP58"
Date: Thu, 29 Sep 2022 23:04:39 GMT
Connection: keep-alive

{"message":"Registro criado com sucesso !"}
</pre>

## Alterando um registro da tabela ( Método PUT )

Como alternativa ao HTTP CLIENT, ainda no diretório do projeto, execute o comando:

<pre>
curl -i -X PUT -H 'Accept: application/json; charset=utf-8' -H 'Content-type: application/json; charset=utf-8' http://localhost:3000/todos/3 --data '{"nome":"tarefa 3 alterada","descricao":"fazer tarefa 3 alterada"}'
</pre>

Você deverá receber o seguinte retorno:

<pre>
HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 45
ETag: W/"2d-jq0xFcfafr5hBk0uH5YGAuK2kRc"     
Date: Thu, 29 Sep 2022 23:08:12 GMT
Connection: keep-alive

{"message":"Registro alterado com sucesso !"}
</pre>

## Removendo um registro da tabela ( Método DELETE )

Como alternativa ao HTTP CLIENT, ainda no diretório do projeto, execute o comando:

<pre>
curl -i -X DELETE -H 'Accept: application/json; charset=utf-8' -H 'Content-type: application/json; charset=utf-8' http://localhost:3000/todos/3
</pre>

Você deverá receber o seguinte retorno:

<pre>
HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 45
ETag: W/"2d-eQpq55PixHsv8U65Y4Uzz3jy9Xc"     
Date: Thu, 29 Sep 2022 23:09:58 GMT
Connection: keep-alive

{"message":"Registro deletado com sucesso !"}
</pre>

## Dúvidas?

Quaisquer dúvidas que você venha a ter, entre em contato com stratosgrevas@gmail.com
