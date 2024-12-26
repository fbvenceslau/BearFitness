import express from 'express'
import { productsController } from './controllers/productsController'
import { authController } from './controllers/authController'
import { ensureAuth } from './middlewares/auth'
import { favoritesController } from './controllers/favoritesController'
import { likesController } from './controllers/likesController'
import { usersController } from './controllers/usersController'
import { ordersController } from './controllers/ordersController'

export const router = express.Router()

router.post('/auth/register', authController.register)
router.post('/auth/login', authController.login)

router.get('/products', productsController.index)
router.get('/products/popular',productsController.popular)
router.get('/products/:id', productsController.show)

router.get('/orders', ensureAuth, ordersController.index)
router.get('/orders/search', ordersController.search)

router.get('/favorites', ensureAuth, favoritesController.index)
router.post('/favorites', ensureAuth, favoritesController.save)
router.delete('/favorites/:id', ensureAuth, favoritesController.delete)

router.post('/likes', ensureAuth, likesController.save)
router.delete('/likes/:id', ensureAuth, likesController.delete)

router.get('/users/current', ensureAuth, usersController.show)
router.put('/users/current', ensureAuth, usersController.update)
router.put('/users/current/password', ensureAuth, usersController.updatePassword)