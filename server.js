const express = require('express');
const axios = require('axios')
const cors = require('cors')
const app = express()
app.use(cors())
app.get('/', async(req, res) =>{
    const { data } = await axios("https://jsonplaceholder.typicode.com/users")
    return res.json(data)
})
app.listen('4567')


