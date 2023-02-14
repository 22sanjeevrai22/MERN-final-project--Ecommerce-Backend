const { default: mongoose } = require("mongoose")
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { array, boolean } = require("zod");
SECRET_KEY = 'MYNAMEISSANJEEVRAIWHATISYOURNAME'

const userSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
     email : {
        type : String,
        required : true,
    },
     password : {
        type : String,
    },
    googleLogin : {
        type : Boolean,
    },

    tokens : [
        {
            token : {
                type : String,
                required : true
            }
        }
    ],
    messages : [
        {
            name : {
            type : String,
            required : true
             },
             email : {
             type : String,
             required : true,

            },
             message : {
            type : String,
             required : true
            },

        }
    ],
    cart : {
        type : Array,
    },
 },
    {
        timestamps : true,
    }

)

 //Hashing with Bcrypt

 userSchema.pre('save', async function(next){
    if(this.isModified('password')){
        this.password = await bcrypt.hash(this.password, 12);
    }
    next();
 });

userSchema.methods.generateAuthToken = async function(){
    try{
        let token = jwt.sign({_id : this._id}, SECRET_KEY);
        this.tokens = this.tokens.concat({ token : token});
        await this.save();
        return token;
    }catch(err){
        console.log(err)
    }
}

//storing the message
userSchema.methods.addMessage = async function(name, email, message){
    try {
        this.messages = this.messages.concat({name:name, email:email, message:message})
        await this.save();
        return this.messages;
    }catch(err){
        console.log(err)
    }
}

//Storing the cart
userSchema.methods.storeCart = async function(cart){
    try{
        this.cart = this.cart.concat({cart : cart})
        await this.save();
        return this.cart;
    }catch(err){
        console.log(err)
    }
}

const Userr = new mongoose.model('Userr', userSchema)

module.exports = Userr;
