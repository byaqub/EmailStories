const AuthenticationController = require('./controllers/authentication');
const StoryController = require('./controllers/story');
const EmailController = require('./controllers/email');
const passportService = require('./passport');
const passport = require('passport');

const requireSignin = passport.authenticate('local', { session: true });

module.exports = (app) => {
	app.post('/api/signup', AuthenticationController.signup);
	app.post('/api/signin', requireSignin, AuthenticationController.signin);
	app.get('/api/logout', AuthenticationController.signout);

	app.post('/api/story', StoryController.save);
	app.get('/api/stories', StoryController.findStoriesFromUser);

	app.post('/api/email', EmailController.save);
	app.post('/api/email/update', EmailController.update);
	app.get('/api/emails', EmailController.findEmailsFromUser);
};
