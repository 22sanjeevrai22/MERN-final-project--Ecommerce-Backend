const User = require("../registerlogin/userSchema");


const contactsController = {
    contactsFunction : (req, res) =>{
        const {name, email, message} = req.body;
        User.findOne({_id : req.userID}, async (err, user) => {
            if(user){
                
                const userMessage = await user.addMessage(name, email, message);

                await user.save(err => {
                    if (err){
                        res.send(err)
                        }else{
                        res.status(201).send({message : 'Message Saved'})
                 }
            });


            }else{
                res.status(401).send({messsage : 'User not registered'})
            }

        })

    }
}




module.exports = contactsController;