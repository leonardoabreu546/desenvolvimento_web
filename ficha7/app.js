const express = require('express');
const mysql = require('mysql2');
const swaggerUi = require('swagger-ui-express');

const app = express();
app.use(express.json());

let swaggerFile;

try {
    swaggerFile = require('./swagger_output.json');
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));
    console.log('Swagger ativo em /api-docs');
} catch (err) {
    console.log('Swagger não encontrado (executa node swagger.js)');
}

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'aula7_db'
});

db.connect((err) => {
    if (err) throw err;
    console.log('Ligado ao MySQL!');
});

app.listen(3000, () => {
    console.log('Servidor a correr em http://localhost:3000');
});

app.delete('/users/:id', (req, res) => {
    db.query('DELETE FROM Users WHERE Id = ?', [req.params.id], (err, result) => {
        if (err) return res.status(500).json(err);
        if (result.affectedRows === 0)
            return res.status(404).json({ erro: 'Utilizador não encontrado' });

        res.json({ linhasAfetadas: result.affectedRows });
    });
});

app.get('/users/:id', (req, res) => {
    db.query('SELECT * FROM Users WHERE Id = ?', [req.params.id], (err, results) => {
        if (err) return res.status(500).json(err);
        if (results.length === 0)
            return res.status(404).json({ erro: 'Utilizador não encontrado' });

        res.json(results[0]);
    });
});

app.get('/users/filter/search', (req, res) => {
    db.query(
        'SELECT * FROM Users WHERE Age = ? AND Profession = ?',
        [req.query.Age, req.query.Profession],
        (err, results) => {
            if (err) return res.status(500).json(err);
            if (results.length === 0)
                return res.status(404).json({ erro: 'Nenhum utilizador encontrado' });

            res.json(results);
        }
    );
});

app.put('/users/:id', (req, res) => {
    const { Firstname, Lastname, Profession, Age } = req.body;

    db.query(
        'UPDATE Users SET Firstname = ?, Lastname = ?, Profession = ?, Age = ? WHERE Id = ?',
        [Firstname, Lastname, Profession, Age, req.params.id],
        (err, result) => {
            if (err) return res.status(500).json(err);

            if (result.affectedRows === 0)
                return res.status(404).json({ erro: 'Utilizador não encontrado' });

            db.query(
                'SELECT * FROM Users WHERE Id = ?',
                [req.params.id],
                (err2, results) => {
                    if (err2) return res.status(500).json(err2);

                    res.json({
                        message: "Utilizador atualizado com sucesso",
                        user: results[0]
                    });
                }
            );
        }
    );
});