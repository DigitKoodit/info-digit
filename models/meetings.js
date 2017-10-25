var mongoose = require('mongoose')
var Schema = mongoose.Schema

var meetingSchema = new Schema({
	date: Number,
	name: String
})

mongoose.model('meeting', meetingSchema)
