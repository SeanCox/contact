const express = require('express')
const app = express()
const mongoose = require('mongoose')

mongoose.connect('mongodb://test:test@ds139267.mlab.com:39267/living_contacts')
const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
console.log('mongodb connectd')
})


app.use('/', express.static('public'))

const port = 1337

app.listen(port, () => {
  console.log(`Contact is listening on port ${port}`)
})
