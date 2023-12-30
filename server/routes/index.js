const Router = require('express')
const router = new Router()
const userRouter = require('./userRouter')
const categoryRouter = require('./categoryRouter')
const providerRoute = require('./providerRouter')
const productRouter = require('./productRouter')
const consalidationRouter = require('./consalidationRouter')
const carRouter = require('./carRouter')
const packageRouter = require('./packageRouter')

router.use('/user', userRouter)
router.use('/provider', providerRoute)
router.use('/category', categoryRouter)
router.use('/product', productRouter)
router.use('/consalidation', consalidationRouter)
router.use('/package', packageRouter)
router.use('/car', carRouter)

module.exports = router