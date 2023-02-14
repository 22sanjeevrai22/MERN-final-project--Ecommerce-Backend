const User = require("../registerlogin/userSchema");

const cartController = {
    cartFunction : (req, res) => {
        const cart = req.body;

        User.findOne({_id : req.userID}, async (err, user) => {
            if(user){
                
                const userCart = await user.storeCart(cart);

                await user.save(err => {
                    if (err){
                        res.send(err)
                        }else{
                        res.status(201).send('Cart Saved')
                 }
            });

            console.log(userCart)
                

            }else{
                res.status(401).send({messsage : 'User not registered'})
            }

        })
    }
}


module.exports = cartController;