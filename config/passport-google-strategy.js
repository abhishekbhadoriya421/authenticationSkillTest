const GoogleStrategy = require('passport-google-oauth20').Strategy;
const passport = require('passport');
const crypto = require('crypto');
const User = require('../module/User');

// Setting Google Strategy 
passport.use(new GoogleStrategy({
        clientID: process.env.googleClientID,
        clientSecret: process.env.googleClientSecret,
        callbackURL: process.env.googleCallbackURL
    },
    async (accessToken,refreshToken,profile,done)=>{
        try{
            
            const user = await User.find({email:profile.emails[0].value});

            //if user found the send this user 
            if(user.length !==0){
                return done(null,user[0]);
            }

            // if user not found then create new use
            // console.log(profile.displayName,profile.emails[0].value,crypto.randomBytes(20).toString('hex'))
                const newUser = new User({
                    name:profile.displayName,
                    email:profile.emails[0].value,
                    password:crypto.randomBytes(20).toString('hex')
                })
                        
                await newUser.save();
                return done(null,newUser);
            
        }catch(err){
            console.log('error in google strategy',err);
            done(err);
            return;
        }
    }
));


module.exports = passport;
