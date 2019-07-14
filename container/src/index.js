const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

//Setup application
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//Define Route
app.get('/', (req, res) => res.render('index'));
app.get('/test', (req, res) => res.send('This is a routing test'));

app.post('/', (req, res) => res.send('This was a POST test'));

app.listen(port, () => console.log(`App listening on port ${port}!`));
