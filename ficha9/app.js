const express = require('express')
const app = express()
const port = 3000
const { Sequelize } = require('sequelize')

app.use(express.json())

// Ligação à base de dados (Sequelize)
const sequelize = new Sequelize(
  'ficha9',
  'root',
  'root',
  {
    host: 'localhost',
    dialect: 'mysql'
  }
)

// Teste de ligação à BD
sequelize.authenticate()
  .then(() => console.log('Ligado ao MySQL!'))
  .catch(err => console.error('Erro ao ligar ao MySQL:', err))

// Rota principal
app.get('/', (req, res) => {
  res.send('Servidor a funcionar')
})

// Iniciar servidor
app.listen(port, () => {
  console.log(`Servidor a correr em http://localhost:${port}`)
})