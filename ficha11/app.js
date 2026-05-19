var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors'); // 1. IMPORTAÇÃO DO CORS

// 1. Outras Importações
const db = require('./config/db');
const User = require('./models/user');
const authRouter = require('./routes/auth');
const usersRouter = require('./routes/users');

var app = express();

// 2. Sincronizar a BD
db.sync()
    .then(() => console.log('Tabelas sincronizadas com sucesso.'))
    .catch(err => console.log('Erro ao sincronizar: ' + err));

// 3. Middlewares padrão
app.use(cors()); // 2. ATIVAÇÃO DO CORS (Deve vir antes das rotas)
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// 4. Definição das Rotas
app.use('/auth', authRouter);
app.use('/users', usersRouter);

// 5. Erro 404
app.use(function(req, res) {
    res.status(404).json({ message: "Rota não encontrada" });
});

module.exports = app;