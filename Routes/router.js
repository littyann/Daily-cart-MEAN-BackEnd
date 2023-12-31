const express = require('express')
const productController = require('../Controllers/productController')
const userController = require('../Controllers/userController')
const jwtMiddleware = require('../Controllers/jwtMiddleware')
const whishlistController = require('../Controllers/wishlistController')
const cartController = require('../Controllers/cartContoller')

const router = new express.Router()

// get all products
router.get('/products/all',productController.getProductController)

// register
router.post('/user/register',userController.registerController)

// login
router.post('/user/login',userController.loginController)

// get product
router.get('/product/get/:id',productController.getProductsController)

// addtowhishlist
router.post('/whishlist/add',jwtMiddleware,whishlistController.addTowishlistController)

// getwhishlist
router.get('/whishlist/get-allproducts',jwtMiddleware,whishlistController.getWhishlistController)


// removewishlist
router.delete('/wishlist/remove/:id',jwtMiddleware,whishlistController.removeWishlistItemController)

// addtocart
router.post('/cart/add',jwtMiddleware,cartController.addtocartController)

// getcart
router.get('/cart/get-all-products',jwtMiddleware,cartController.getCartController)




module.exports = router