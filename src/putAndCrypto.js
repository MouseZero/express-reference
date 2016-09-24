const express = require('express')
const app = express()

app.put('/message/:id', (req, res) => {
  const id = req.params.id
  const hash = require('crypto')
    .createHash('sha1')
    .update(new Date().toDateString() + id)
    .digest('hex')
  res.end(hash)
})

app.listen(process.argv[2])
