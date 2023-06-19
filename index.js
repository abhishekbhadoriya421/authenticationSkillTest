require('dotenv').config()
const express = require('express');
const app = express();
const port = 8000;
const session = require('express-session');
const Passport = require('passport');
const LocalStrategy = require('./config/passport-local-strategy');
const GoogleStrategy = require('./config/passport-google-strategy');
const mongo = require('connect-mongo');
const cookieParser = require('cookie-parser');
require('./config/mongoose');

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use(cookieParser());

// setting view engine
app.set('view engine','ejs');
app.set('views','./views');

// session Cookie
app.use(session({
    name:'Authentication',
    secret:process.env.secretKey,
    resave:false,
    saveUninitialized:false,
    cookie :{
        maxAge: (1000 * 60 * 100)
    },
    store: mongo.create({
        mongoUrl:process.env.DataBaseName,
        autoRemove:'disabled'
    },
        function(err){ console.log(err ||  'connect-mongodb setup ok');}
    ) 
}));


app.use(Passport.initialize());
app.use(Passport.session());
app.use(Passport.setAuthenticatedUser);

app.use('/',require('./route/index'));

app.listen(port,(err)=>{
    console.log('running at ', port);
});


