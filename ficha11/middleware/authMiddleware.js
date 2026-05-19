const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    // Vai buscar o token ao cabeçalho (header)
    const token = req.headers['authorization'];

    // Se não houver token, dá erro
    if (!token) return res.status(401).json({ error: "Acesso negado" });

    try {
        // Verificar se o token é válido
        const verified = jwt.verify(token.split(" ")[1], process.env.TOKEN_SECRET);
        req.user = verified;
        next();
    } catch (err) {
        res.status(400).json({ error: "Token inválido" });
    }
};