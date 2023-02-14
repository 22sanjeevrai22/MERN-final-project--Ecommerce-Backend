const contactsController = require('./contacts.controller');
const contactsRouter = require('express').Router();


contactsRouter.post('/', contactsController.contactsFunction)

module.exports = contactsRouter;