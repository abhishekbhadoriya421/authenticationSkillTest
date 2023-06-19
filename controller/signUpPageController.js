const User =  require('../module/User');
module.exports.signUpPage = (req,res)=>{
    return res.status(200).render('signUpPage');
}

// Function to check if password and confirm password are same or not
function isBothPasswordsAreSame(password,confirmPassword){
    if(password!==confirmPassword){
        return false;
    }
    return true;
}

// create
module.exports.create = async(req,res)=>{
    try{
        const user = req.body;
        if(!isBothPasswordsAreSame(user.password,user.confirm_password)){
            console.log('Password are not same');
            return res.redirect('back');
        }

        const isUserExist = await User.findOne({email: user.email});

        // If user Already have account then we let user know that he has Registered Account
        if(isUserExist){
            console.log('user is having Already an account');
            return res.redirect('/');
        }

        // If user don't have account then create new one
        const newUser = new User(user);
        await newUser.save();
        console.log('user is created');

        return res.redirect('/');
    }catch(err){
        console.log('error While CreatingSession ',err);

    }
}  


// Update User

module.exports.updateSession = async (req,res)=>{
    try{
        const updateValue = req.body;
        console.log(updateValue)
        const user = await User.findByIdAndUpdate(req.user.id,updateValue,{new:true});
        console.log('Updated Successfully')
        return res.redirect('/home');
    }catch(err){

    }
}