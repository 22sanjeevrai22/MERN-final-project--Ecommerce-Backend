const cartController = require('./cart.controller');
const cartRouter = require('express').Router();


cartRouter.post('/', cartController.cartFunction)

module.exports = cartRouter;