const User = require("../registerlogin/userSchema");
const jwt = require('jsonwebtoken');

SECRET_KEY = 'MYNAMEISSANJEEVRAIWHATISYOURNAME'

const authenticate = async (req, res, next) =>{
    try{
        const token = req.cookies.jwtoken;
        const verifyTokenPerson = jwt.verify(token, SECRET_KEY);
        const rootUser = await User.findOne({_id : verifyTokenPerson._id, 'tokens.token' : token});

        if (!rootUser){
            throw new Error('User not found')
        }else{
            req.token = token;
            req.rootUser = rootUser;
            req.userID = rootUser._id;
        }

        next();


    }catch(err){
        res.status(400).send('Unauthorised no token provided')
        console.log(err)
    }

}


module.exports = authenticate;