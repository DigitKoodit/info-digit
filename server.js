var express = require('express')
var app = express()

// Require api
require('./api/map')(app);

app.use(express.static('build'))

app.set('port',process.env.PORT || 3000);

app.listen(app.get('port'), function () {
  console.log('Server listening on port 3000!')
})