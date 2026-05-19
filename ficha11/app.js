var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// 1. Importar a Base de Dados e o Modelo
const db = require('./config/db');
const User = require('./models/user');

// 2. Importar as Rotas (ainda vamos criar a de auth)
var usersRouter = require('./routes/users');

var app = express();

// Sincronizar a Base de Dados
db.sync()
    .then(() => console.log('Tabelas sincronizadas com sucesso.'))
    .catch(err => console.log('Erro ao sincronizar: ' + err));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// 3. Definir as Rotas Principais
app.use('/users', usersRouter);

// 4. Tratamento de Erros Simples (para APIs)
app.use(function(req, res) {
    res.status(404).json({ message: "Rota não encontrada" });
});

module.exports = app;