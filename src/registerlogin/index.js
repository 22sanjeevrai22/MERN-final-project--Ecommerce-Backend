const UserController = require('./user.controller');
const registerLoginRouter = require('express').Router();


registerLoginRouter.post('/login', UserController.loginUser)

registerLoginRouter.post('/register',UserController.registerUser)





module.exports = registerLoginRouter;