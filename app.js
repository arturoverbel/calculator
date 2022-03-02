const express = require('express')

const app = express()
const PORT = process.env.PORT || 8080
console.log('My first repo')

app.get('/', (req, res) => {
    const date = new Date().toLocaleTimeString()
    console.log('Request ', date)
    res.send('Response ' + date)
})

app.listen(PORT, err => {
    if(err) console.log("ERROR: ", err)
    console.log(`Listeing ${PORT} ...`)
} )
