const express = require('express');
const routes = require('./routes');
const { errors } = require('celebrate');
const cors = require('cors');

const app = express();

app.use(cors());

app.use(express.json());

app.use(routes);

app.use(errors());

//Rota/Recurso

//MÉTODOS HTTP

//GET - Buscar/Listar uma informação do back-end

//POST - Criar uma informação no back-end

//PUT - Alterar uma informação no back-end

//DELETE - Deletar uma informação no back-end

//TIPOS DE PARÂMETRO

//Query Params - Parâmetros nomeados enviados na rota após o símbolo de ? (Filtros, paginação)

//Route Params - Parâmetros utilizados para identificar recursos (Busca um usuário com determinado id, por exemplo)

//Request Body - Corpo da requisição, utilizado para criar ou alterar recursos


/** 
 * SQL - MySQL, SQLite, PostgreeSQL, Oracle, Microsoft SQL Server
 * NoSQL - MongoDB, CouchDb, etc
*/

/**
 * Driver - SELECT * FROM users
 * Query Builder - table('users').select('*').where()
 */

module.exports = app;