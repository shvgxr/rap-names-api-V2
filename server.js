const { response, json } = require('express')
const express = require('express')
const app = express()
const PORT = 8000

const rappers = {
    'enima': {
        'age':29,
        'birthName': 'Samir Slimani',
        'hood': 'STL'
    },
    'lost': {
        'age':27,
        'birthName': 'Jayson Elombo',
        'hood': 'Cartierville'
    },
    'unknown':{
        'age':0,
        'birthName': 'unknown',
        'hood': 'unknown'
    }
}

app.get('/', (req,res) => {
    res.sendFile(__dirname + '/index.html')
})
app.get('/api/:name',(req,res) => {
    const rapperName = req.params.name.toLocaleLowerCase()
    if(rappers[rapperName]){
        res.json(rappers[rapperName])
    } else {
        res.json(rappers.unknown)
    }
})


app.listen(PORT, () => {
    console.log(`The server is live on port ${PORT}`)
})