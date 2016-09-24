const path = require('path')
const express = require('express')

const port = process.argv[2]
const servePath = process.argv[3]
const app = express()
console.log(servePath)
app.use(express.static(servePath || path.join(__dirname, 'public')))

app.listen(port)
