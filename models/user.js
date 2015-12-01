var mongoose = require('mongoose'),
		Schema = mongoose.Schema,
		passportLocalMongoose = require('passport-local-mongoose');

var UserSchema = new Schema({
	name: {
		type: String
	},
	username: {
		type: String
	},
	password: {
		type: String
	},
	avatar: {
		type: String,
		default: 'avatars/avatar0.png'
	},
	admin: {
		type: Boolean,
		default: false
	},
	questions: [{
		type: Schema.Types.ObjectId,
		ref: 'Question'
	}],
	useranswers: [String]
});

UserSchema.plugin(passportLocalMongoose, {
	populateFields: 'questions'
});

var User = mongoose.model('User', UserSchema);
module.exports = User;