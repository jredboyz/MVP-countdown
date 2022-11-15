const express = require('express')
const { addUpdateUser }  = require('./db.js');
const app = express()
const port = 4000;
// app.use(express.static('./public/index.html'));
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/api', (req, res) => {
  console.log(req.body)
  addUpdateUser(req.body, (err, result) => {
    if (err) {console.log(err, 'ERROR in ')}
    else {res.status(201).send(result)}
  })
})

app.listen(port, () => {
  console.log(`listening on port ${port}`)
})