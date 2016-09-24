const express = require('express')
const path = require('path')

const app = express()

app.set('views', path.join(__dirname, '../jade'))
app.set('view engine', 'jade')
app.get('/home', (req, res) => {
  res.render('index', {
    date: new Date().toDateString()
  })
})

const port = process.argv[2]
app.listen(port)
