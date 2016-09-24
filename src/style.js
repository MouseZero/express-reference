const express = require('express')
const path = require('path')

const app = express()
const assetPath = process.argv[3]

app.use(require('stylus').middleware(assetPath || path.join(__dirname, '../styleProject')))
app.use(express.static(assetPath || path.join(__dirname, '../styleProject')))
console.log(assetPath)
// app.get('/', (req, res) =>{
//   res.writeHeater(200, {'Content-Type': 'text/html'})
//   res.end(process.argv[3].toString())
// })

app.listen(process.argv[2])
