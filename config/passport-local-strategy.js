const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../module/User');

// Initializing Passport
passport.use(new LocalStrategy({usernameField:'email'},async (email,password,done)=>{
    try{
        const user = await User.findOne({email:email});
        if(!user || user.password != password){
            done(null,false);
        }
        done(null,user);
    }catch(err){
        done(err,false);
        console.log(err);
    } 
}));

// serializing
passport.serializeUser(function(user,done){
    done(null,user.id);
})


// deserializing
passport.deserializeUser(async(id,done)=>{
    try{
        const newUser = await User.findById(id);
       return done(null,newUser);
    }catch(err){
        console.log(err);
        return done(err);
    }
});


// check Authentication
passport.checkAuthentication = (req,res,next)=>{
    if(req.isAuthenticated()){
       return next();
    }
    return res.redirect('/');
}

// setAuthentication

passport.setAuthenticatedUser = (req,res,next)=>{
    if(req.isAuthenticated()){
        res.locals.user = req.user;
    }
     next();
}

module.exports = passport;