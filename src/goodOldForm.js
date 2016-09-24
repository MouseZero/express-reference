const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.get('/fillform', (req, res) => {
  res.writeHeader(200, {'Content-Type': 'text/html'})
  res.end('<form method="POST" action="form"><input name="str"></input><button type="submit">submit</button></form>')
})

const flipString = function (req, res, next) {
  req.body.str = req.body.str.split('').reverse().join('')
  next()
}

app.use(bodyParser.urlencoded({extended: false}))
app.use(flipString)

app.post('/form', (req, res) => {
  res.end(req.body.str)
})

app.listen(process.argv[2])
