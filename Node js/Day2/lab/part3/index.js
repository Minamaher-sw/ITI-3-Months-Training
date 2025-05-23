import express from 'express'

const app = express()

app.get('/', (req, res) => {
    res.send('Hello World')
    console.log(req);
})

app.listen(3000)