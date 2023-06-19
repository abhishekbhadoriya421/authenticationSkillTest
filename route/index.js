const HomePageController = require('../controller/homePageController');
const loginPageController = require('../controller/loginPageController');
const signUpPageController = require('../controller/signUpPageController');
const passport = require('passport');
const route = require('express').Router();

// Get Requests
route.get('/',loginPageController.loginPage);
route.get('/home',passport.checkAuthentication,HomePageController.homePage);
route.get('/signUp',signUpPageController.signUpPage);
route.get('/destroySession',loginPageController.destroySession);



// Post Requests
route.post('/create',signUpPageController.create);
route.post('/createSession',passport.authenticate(
    'local',
    {
        failureRedirect: '/'
    }
),loginPageController.createSession);

// Google Authentication
route.get('/auth/google',passport.authenticate(
    'google',
    {
        scope: ['profile', 'email']
    }
));

route.get('/auth/google/callback',passport.authenticate('google',{failureRedirect:'/'}),loginPageController.createSession);

// Update User
route.post('/update',signUpPageController.updateSession);

module.exports = route;


module.exports = route;