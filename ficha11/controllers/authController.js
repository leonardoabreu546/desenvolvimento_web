const jwt = require('jsonwebtoken');
const User = require('../models/user');
require('dotenv').config();

// Função para gerar o token
const generateToken = (user) => {
    return jwt.sign(
        { id: user.id, email: user.email }, 
        process.env.TOKEN_SECRET, 
        { expiresIn: '24h' }
    );
};

// Função para Signup (Criar conta)
exports.signup = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.create({ email, password });
        const token = generateToken(user);
        res.status(201).json({ token: token });
    } catch (error) {
        res.status(500).json({ error: "Erro ao criar utilizador" });
    }
};

// Função para Login (Autenticar)
exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ where: { email, password } });

        if (user) {
            const token = generateToken(user);
            res.status(200).json({ token: token });
        } else {
            res.status(401).json({ error: "Credenciais inválidas" });
        }
    } catch (error) {
        res.status(500).json({ error: "Erro no servidor" });
    }
};