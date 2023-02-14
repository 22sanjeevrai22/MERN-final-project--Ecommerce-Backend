const logoutRouter = require('express').Router();

logoutRouter.get('/', (req, res) => {
    res.clearCookie('jwtoken')
    res.status(200).send({message : 'User Logged Out'})
})

module.exports = logoutRouter;