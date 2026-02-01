const express = require('express')

const app = express()


app.get('/', (req, res) => {
    res.json({
        status: 200,
        message: "hello world from India"
    })
})

app.listen(7070, () => {
    console.log('server running on port 7070')
})