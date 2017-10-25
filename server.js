var express = require('express')
var app = express()
var mongoose = require('mongoose')
var fs = require('fs')
var moment = require('moment')
var bodyParser = require('body-parser')

app.use(express.static('public'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}))

app.set('port',process.env.PORT || 3000);

// Setup database
mongoose.connect('mongodb://digitteekkari:skarttijakaikki@ds151208.mlab.com:51208/diginfo', {useMongoClient: true})

fs.readdirSync(__dirname + '/models').forEach(function(filename) {
	if (~filename.indexOf('.js')) require(__dirname + '/models/' + filename)
})

app.get('/meetings', function(req, res) {
	mongoose.model('meeting').find({}, function(err, meetings) {
		res.status(200).send(meetings)
	})
})

app.post('/meetings', function(req, res) {
	var meeting = {
		date: req.body.date,
		name: req.body.name
	}
	mongoose.connection.collection('meetings').insert(meeting)
	res.status(200).send('Added meeting')
})
// Require apis
require('./api/calendar')(app);
// require('./api/meetings')(app)

app.listen(app.get('port'), function () {
  console.log('Server listening!')
})
