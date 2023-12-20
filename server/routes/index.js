const Router = require('express')
const router = new Router()
const userRouter = require('./userRouter')
const categoryRouter = require('./categoryRouter')
const providerRoute = require('./providerRouter')
const productRouter = require('./productRouter')
const consalidationRouter = require('./consalidationRouter')

router.use('/user', userRouter)
router.use('/provider', providerRoute)
router.use('/category', categoryRouter)
router.use('/product', productRouter)
router.use('/consalidation', consalidationRouter)

module.exports = router