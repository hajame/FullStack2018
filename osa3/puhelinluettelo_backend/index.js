const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.json())

let persons = [
    {
        id: 1,
        number: "040-123456",
        name: "Arto Hellas"
    },
    {
        id: 2,
        number: "040-123456",
        name: "Martti Tienari"
    },
    {
        id: 3,
        number: "040-123456",
        name: "Arto Järvinen"
    },
    {
        id: 4,
        number: "040-123456",
        name: "Lea Kutvonen"
    }
]

app.get('/info', (req, res) => {
    res.send(`
    <p>puhelinluettelossa ${persons.length} henkilön tiedot</p>
    <p>${new Date()}</p>
    `)
})

app.get('/api/persons', (req, res) => {
    console.log('persons')
    res.json(persons)
})

// const generateId = () => {
    //     const maxId = persons.length > 0 ? persons.map(p => p.id)
//         .sort((a, b) => a - b).reverse()[0] : 1
//     return maxId + 1
// }

// app.post('/api/persons', (request, response) => {
//     const body = request.body
//     if (body.name === undefined) {
//         return response.status(400).json({ error: 'name missing' })
//     }

//     const person = {
//         name: body.content,
//         number: body.number,
//         id: generateId()
//     }

//     persons = persons.concat(person)
//     response.json(person)
// })

// app.delete('/api/persons/:id', (request, response) => {
//     const id = Number(request.params.id)
//     notes = persons.filter(pers => pers.id !== id)

//     response.status(204).end()
// })

// app.get('/api/persons/:id', (request, response) => {
//     const id = Number(request.params.id)
//     const note = persons.find(pers => pers.id === id)
//     if (person) {
//         response.json(person)
//     } else {
//         response.status(404).end()
//     }
// })


const PORT = 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})