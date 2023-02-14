const googleLoginRouter = require('express').Router();
const {OAuth2Client} = require('google-auth-library');
const Userr = require('../registerlogin/userSchema');



const authClient = new OAuth2Client({
    clientId:"330918037634-i4f9aeovosbu8vvgqg2lui2vpgmu9ul4.apps.googleusercontent.com",
    clientSecret: "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",
    redirectUri : 'http://localhost'
})

googleLoginRouter.post('/googlelogin', async(req, res, next) =>{
    const {payload} = await authClient.verifyIdToken({idToken : req.body.idToken})
    req.user = payload
    next()
}, async (req, res)=>{
    const googleUser = req.user;


    const user = await Userr.findOne({email : googleUser.email})
    if(user){
        if(user.googleLogin){
            //Generate the token and sign in the user
            const loggedInUser = JSON.parse(JSON.stringify(user))

            token = await user.generateAuthToken();
            res.cookie("jwtoken", token, {
                    expires : new Date(Date.now() + 60000000),
                    httpOnly : true,
                 });


            return res.status(200).json({message : 'logged in successfully',
            data : {
                user : loggedInUser
            }
        }) }

        //associate google id with the user and sign in the user
        user.googleLogin = true;
        
        return res.status(409).json({message : 'User already present, please use different email.'})
    }
    
    //sign in the user
        let username = googleUser.email.split("@")[0];
        const registeredUser = new Userr({
        name : username,
        email : googleUser.email,
        googleLogin : true,
    
    })

    console.log('here', username)
    await registeredUser.save(err => {
            if (err){
                res.send(err)
            }else{
                res.send({message : 'Successfully Registered'})
            }
        });
    
    
})

module.exports = googleLoginRouter;