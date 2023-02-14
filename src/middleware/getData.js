const getDataRouter = require('express').Router();


getDataRouter.get('/', (req, res) =>{
    res.send(req.rootUser)
})

module.exports = getDataRouter;