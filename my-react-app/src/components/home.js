require('dotenv').config()
const express = require('express')
const app = express()


app.get('/', (req, res) => {
  res.send('Welcome to Junk Joint Classics')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})