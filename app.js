const express = require('express')
const app = express()

// get the port from env variable
const PORT = process.env.PORT || 3001

app.use(express.static('dist'))

app.listen(PORT + 1, () => {
  // eslint-disable-next-line no-console
  console.log(`Server started on port ${PORT}`)
})

app.get('/version', (req, res) => {
  res.send('7') // change this string to ensure a new version deployed
})

app.get('/health', (req, res) => {
  res.send('ok')
})