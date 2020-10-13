const express = require('express')
const cors = require('cors')
const scraper = require('./scraper')
const app = express();

app.get('/', cors({
  origin: (process.env.ALLOWED_ORIGINS || '')
    .split(',')
    .map(origin => origin.trim())
}), (req, res) => {
  scraper.youtube(req.query.q, req.query.page)
    .then(x => res.json(x))
    .catch(e => res.send(e))
})

app.listen(process.env.PORT || 8080, function () {
  console.log('Listening on port 8080')
})

module.exports = app
