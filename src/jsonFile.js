const express = require('express')
const fs = require('fs')
const path = require('path')

const app = express()
const port = process.argv[2]
const jsonFilePath = process.argv[3] || path.join(__dirname, '../example.json')

app.get('/books', (req, res) => {
  const objFromFile = JSON.parse(fs.readFileSync(jsonFilePath, 'utf8'))
  res.json(objFromFile)
})

app.listen(port || 3000)
