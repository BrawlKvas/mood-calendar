const express = require('express')
const config = require('config')
const mongoose = require('mongoose')

const app = express()

app.use(express.json({ extended: true }))

app.use('/api/auth', require('./routes/auth.routes'))
app.use('/api', require('./routes/main.routes'))

const PORT = config.get('port') || 5000

mongoose.connect(config.get('mongoUri'), {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
})
  .then(res => {
    app.listen(PORT, () => {
      console.log(`App has been started on port ${PORT}...`);
    })
  })
  .catch(e => { console.log(e) })

