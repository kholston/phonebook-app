const { request } = require('express')
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const Person = require('./models/person')
const app = express()

app.use(express.static('build'))
app.use(express.json())
app.use(cors())


morgan.token('content', (request)=>{
  return JSON.stringify(request.body)
})

app.use(morgan(':method :url :status :res[content-length] - :response-time ms :content'))

app.get('/info', (request, response)=>{
  response.send(`<p>Phonebook has info for ${persons.length} people.</p><p>${new Date()}</p>`)
})

app.get('/api/persons', (request,response)=>{
  Person.find({}).then(persons=>{
    response.json(persons)
  })
})

app.get('/api/persons/:id', (request, response)=>{
  Person.findById(request.params.id).then(person=>{
    response.json(person)
  })
})

app.delete('/api/persons/:id', (request,response)=>{
  Person.findByIdAndDelete(request.params.id)
    .then(result => {
      response.status(204).end()
    })
})


app.post('/api/persons',(request, response)=>{
  const body = request.body
  if(!body.name || !body.number){
    return response.status(400).json({
      error: "both name and number required"
    })
  }

  const person = new Person({
    name: body.name,
    number: body.number,
  })

  person.save().then(savedPerson=>{
    response.json(savedPerson)
  })
})


const PORT = process.env.PORT
app.listen(PORT, ()=>{
  console.log(`Server running on port ${PORT}`)
})