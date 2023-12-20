const Router = require('express')
const router = new Router()
const userController = require('../controllers/userController')
const authMiddleware = require('../middleware/authMiddleware')

router.post('/registration', userController.registration)
router.post('/login', userController.login)
router.post('/auth', authMiddleware, userController.ceck)
router.post('/advice/create', userController.createAdvice)
router.post('/order/create', authMiddleware, userController.createOrder)
router.get('/:id', authMiddleware, userController.getUserDataById)
router.get('/advice/all', authMiddleware, userController.getAllAdvice)
router.get('/advice/:id', authMiddleware, userController.getAdviceByUserId)
router.get('/advice/del/:id', authMiddleware, userController.delAdviceById)
router.get('/order/del', authMiddleware, userController.delOrder)



module.exports = router