const aboutUsController = require('./aboutUs.controller');
const aboutRouter = require('express').Router();


aboutRouter.get('/', aboutUsController.aboutUsFunction)


module.exports = aboutRouter;