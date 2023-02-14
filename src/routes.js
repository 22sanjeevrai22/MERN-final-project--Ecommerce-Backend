const aboutRouter = require('./aboutUs');
const cartRouter = require('./cart');
const categoryRouter = require('./categories/category.routes');
const contactsRouter = require('./contacts');
const googleLoginRouter = require('./googleLogin/googleLogin');
const logoutRouter = require('./logout');
const authenticate = require('./middleware/authenticate');
const getDataRouter = require('./middleware/getData');
const productRoute = require('./products/products.routes');
const registerLoginRouter = require('./registerlogin');

const router = require('express').Router();

router.use('/categories', categoryRouter)
router.use('/products', productRoute)
router.use('/', registerLoginRouter)
router.use('/about', authenticate, aboutRouter)
router.use('/getData', authenticate, getDataRouter)
router.use('/contacts', authenticate, contactsRouter)
router.use('/logout', logoutRouter)
router.use('/cart', authenticate, cartRouter)
router.use('/', googleLoginRouter)

module.exports = router;