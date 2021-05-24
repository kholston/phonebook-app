const mongoose = require('mongoose')

const password = process.argv[2]
const inputName = process.argv[3]
const inputNumber = process.argv[4]

if(process.argv.length > 5){
  console.log('Please enclose name in quotes: node mongo.js <password> "<name>" <number>')
}

const url =
`mongodb+srv://backend:${password}@dev-phonebook.belnr.mongodb.net/persons?retryWrites=true&w=majority`

mongoose.connect(url, { useNewUrlParser:true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })


const personSchema = new mongoose.Schema({
  name: String,
  number: String
})

const Person = mongoose.model('Person', personSchema)



if(process.argv.length === 3){
  Person.find({}).then(result => {
    console.log('phonebook:')
    result.forEach(person => {
      console.log(`${person.name} ${person.number}`)
    })
    mongoose.connection.close()
  })
} else {
  const person = new Person({
    name: inputName,
    number: inputNumber
  })

  person.save().then(result => {
    console.log(`added ${inputName} number ${inputNumber} to phonebook`)
    mongoose.connection.close()
  })
}