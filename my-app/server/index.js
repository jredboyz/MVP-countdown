const express = require('express')
const { addUpdateUser, getUser }  = require('./db.js');
const app = express()
const port = 4000;
// app.use(express.static('./public/index.html'));
app.use(express.json())

app.get('/api', (req, res) => {
  console.log(req.query, 'REQ.QUERY')
  getUser(req.query, (err, result) => {
    if (err) { console.log(err, 'ERROR in get request - index.js') }
    else { res.send(result)}
  })
})

app.post('/api', (req, res) => {
  console.log(req.body)
  addUpdateUser(req.body, (err, result) => {
    if (err) { console.log(err, 'ERROR in post - index.js') }
    else { res.status(201).send(result) }
  })
})

app.listen(port, () => {
  console.log(`listening on port ${port}`)
})