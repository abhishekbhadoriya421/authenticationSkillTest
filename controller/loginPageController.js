const Passport =  require('passport');
module.exports.loginPage = async(req,res)=>{
    return res.status(200).render('loginPage');
}

// CreateSession
module.exports.createSession = (req,res)=>{
    return res.status(200).redirect('/home');
}


// Destroy Session
module.exports.destroySession = (req,res)=>{
    req.logout(function(err) {
        if (err) {
            console.log(err);
            return
        }
        return res.redirect('/');
    });
}