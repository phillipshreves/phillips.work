const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello World! Here is a change!'))
app.get('/test', (req, res) => res.send('This is a routing test'))

app.post('/', (req, res) => res.send('This was a POST test'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
