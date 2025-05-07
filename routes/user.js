const express = require('express');
const userController=require('../controllers/user');
const authentication=require('../middlewares/authentication');
//const { limit, blockBannedIPs } = require('../middlewares/login_rate_limit');

const router = express.Router();
router.post('/signup', userController.postSignup);
router.post('/login', userController.postLogin);
router.post('/seller/signup',authentication,userController.postSignupAsSeller);
router.post('/seller/addshop',authentication,userController.addShop);
router.put('/seller/products/:productId',authentication,userController.editProduct);
router.post('/seller/shop/location/:id',authentication,userController.addLocation);
router.post('/seller/shop/phone/:id',authentication,userController.addPhone);
router.post('/seller/shop/bank_account/:id',authentication,userController.addBankAccount);
router.post('/seller/shop/addproduct/:id',authentication,userController.addProduct);
router.get('/products',authentication,userController.getProducts)
router.get('/shops',authentication,userController.getShops)
router.get('/shop/:id',authentication,userController.getShopById);
router.get('/products',authentication,userController.getAllProducts);
router.get('/product/:id',authentication,userController.getProductById);
router.get('/creditCard',authentication,userController.getCreditCard);
router.post('/add/creditCard',authentication,userController.postCreditCard);
router.get('/shop/products/:id',authentication,userController.getProductsByShopId);
router.post('/addcart',authentication,userController.postaddToCart);
router.get('/cart',authentication,userController.getCart);
module.exports = router;