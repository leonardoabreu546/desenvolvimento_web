const express = require('express')
const fs = require('fs')
const app = express()
const port = 3000

app.use(express.json())

function readFile(file) {
  var fileContent = fs.readFileSync(file, 'utf8')
  return JSON.parse(fileContent)
}

app.get('/person', function(req, res) {
  var data = readFile('person.json')
  res.json(data.persons)
})

function writeFile(data) {
  fs.writeFileSync('person.json', JSON.stringify(data, null, 2))
}

app.post('/person', function(req, res) {
  var data = readFile('person.json')
  var newPerson = { id: data.persons.length + 1, ...req.body }
  data.persons.push(newPerson)
  writeFile(data)
  res.json(data.persons)
})

app.delete('/person/:id', function(req, res) {
  var data = readFile('person.json')
  data.persons = data.persons.filter(p => p.id !== parseInt(req.params.id))
  console.log(data.persons)
  writeFile(data)
  res.json(data.persons)
})

app.get('/person/:id', function(req, res) {
  var data = readFile('person.json')

  var person = data.persons.find(p => p.id === parseInt(req.params.id))
  res.json(person)
})

app.put('/person/:id', function(req, res) {
  var data = readFile('person.json')
  var index = data.persons.findIndex(p => p.id === parseInt(req.params.id))
  data.persons[index] = { id: parseInt(req.params.id), ...req.body }
  writeFile(data)
  res.json(data.persons[index])
})

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`)
})

