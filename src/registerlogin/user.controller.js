const User = require("./userSchema");
const bcrypt = require('bcrypt');
const Userr = require("./userSchema");


const UserController = {
    loginUser :  (req, res) => {

        const {email, password} = req.body;
        Userr.findOne({email : email}, async (err, user) => {
            if(user){
                const isMatch = await bcrypt.compare(password, user.password);
                

                token = await user.generateAuthToken();
                res.cookie("jwtoken", token, {
                    expires : new Date(Date.now() + 60000000),
                    httpOnly : true,
                 });


                if(isMatch){
                    res.status(200).send({message : 'Login Successful'})
                }else{
                    res.status(400).send({message : 'Password or username do not match'})
                }

            }else{
                res.status(400).send({messsage : 'User not registered'})
            }

        })


},

registerUser : async (req, res) => {

    const {name, email, password} = req.body;

    Userr.findOne({email : email}, async (err, user)=>{
        if(user){
            res.send({message : 'User already registered'})

        }else{
            
        const user = new Userr({
        name : name,
        email : email,
        password : password,
        })

        await user.save(err => {
            if (err){
                console.log(err)
            }else{
                res.send({message : 'Successfully Registered'})
            }
        });



        }
    })

}
    
}

module.exports = UserController;