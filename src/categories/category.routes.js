const CategoryController = require('./category.controller');
const categoryValiadator = require('./category.validator');
const categoryRouter = require('express').Router();

categoryRouter.post('/', categoryValiadator.validateCreateCategory, CategoryController.createCategory);

categoryRouter.get('/', CategoryController.getAllCategories);


module.exports = categoryRouter;