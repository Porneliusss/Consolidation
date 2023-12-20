const Router = require('express')
const router = new Router()
const providerController = require('../controllers/providerController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/create', checkRole('ADMIN'), providerController.create)
router.get('/', providerController.getAll)
router.get('/delete/:id', providerController.delete)

module.exports = router