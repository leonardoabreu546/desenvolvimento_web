const express = require('express')
const app = express()
const port = 3000

const { Sequelize, DataTypes } = require('sequelize')
const swaggerUi = require('swagger-ui-express')
const swaggerFile = require('./swagger_output.json')

app.use(express.json())

const sequelize = new Sequelize(
  'ficha9',
  'root',
  'root',
  {
    host: 'localhost',
    dialect: 'mysql'
  }
)

sequelize.authenticate()

const Cars = sequelize.define('Cars', {
  Brand: DataTypes.STRING,
  Model: DataTypes.STRING,
  LicensePlate: DataTypes.STRING,
  Color: DataTypes.STRING,
  Year: DataTypes.INTEGER,
  Power: DataTypes.INTEGER,
  Displacement: DataTypes.FLOAT
})

sequelize.sync().then(async () => {
  await Cars.bulkCreate([
    {
      Brand: 'Toyota',
      Model: 'Corolla',
      LicensePlate: 'AA-01-AA',
      Color: 'White',
      Year: 2020,
      Power: 120,
      Displacement: 1.8
    },
    {
      Brand: 'BMW',
      Model: '320i',
      LicensePlate: 'BB-02-BB',
      Color: 'Black',
      Year: 2022,
      Power: 180,
      Displacement: 2.0
    },
    {
      Brand: 'Audi',
      Model: 'A3',
      LicensePlate: 'CC-03-CC',
      Color: 'Grey',
      Year: 2021,
      Power: 150,
      Displacement: 1.5
    }
  ])
})

app.get('/cars', async (req, res) => {
  const cars = await Cars.findAll()
  res.json(cars)
})

app.post('/cars', async (req, res) => {
  const car = await Cars.create(req.body)
  res.json({ id: car.id })
})

app.delete('/cars', async (req, res) => {
  const result = await Cars.destroy({ where: { id: req.body.id } })
  res.json({ affectedRows: result })
})

app.delete('/cars/:plate', async (req, res) => {
  const result = await Cars.destroy({ where: { LicensePlate: req.params.plate } })
  if (result === 0) return res.status(404).json({ message: 'Not found' })
  res.json({ affectedRows: result })
})

app.get('/car', async (req, res) => {
  const car = await Cars.findByPk(req.query.id)
  if (!car) return res.status(404).json({ message: 'Not found' })
  res.json(car)
})

app.get('/cars/:brand/:model', async (req, res) => {
  const cars = await Cars.findAll({
    where: {
      Brand: req.params.brand,
      Model: req.params.model
    }
  })
  if (cars.length === 0) return res.status(404).json({ message: 'Not found' })
  res.json(cars)
})

app.put('/cars/:id', async (req, res) => {
  await Cars.update(req.body, { where: { id: req.params.id } })
  const updated = await Cars.findByPk(req.params.id)
  if (!updated) return res.status(404).json({ message: 'Not found' })
  res.json(updated)
})

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile))

app.listen(port)