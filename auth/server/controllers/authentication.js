const jwt = require("jwt-simple");

const config = require("../config");
const User = require("../models/user");

function authToken(user) {
	const timestamp = new Date().getTime();
	return jwt.encode({ sub: user.id, iat: timestamp }, config.secret);
}

exports.signup = function(req, res, next) {
	const email = req.body.email;
	const password = req.body.password;	
	
	if(!email || !password){
		return res.status(422).send({ error: "Email and password required" });
	}
	
	// Check if user exists
	User.findOne({ email: email }, function(err, existingUser) {
		if(err) return next(err);
		
		if(existingUser) {
			return res.status(422).send({ error: "Email is in use" });
		}
		
		// Create new user
		const user = new User({
			  email: email
			, password: password
		});
		
		user.save(function(err) {
			if(err) return next(err);
		});
		
		// Success
		res.json({ token: authToken(user) });
	});
}
