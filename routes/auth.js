var express = require('express');
var router = express.Router();
var passport = require('passport');
var User = require('../models/user');

router.post('/signup', function(req, res) {
	User.register(new User({username: req.body.email}), req.body.password, function(req, user) {
		if (err)
			return res.json(500, err.message);
		user.name
		user.save( function(err, user) {
			res.json({ id: user.id });
		});
	});
});

module.exports = router;