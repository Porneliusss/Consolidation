const Router = require('express')
const router = new Router()
const consalidationController = require('../controllers/consalidationController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/create', checkRole('ADMIN'), consalidationController.create)
router.post('/updStatus/:id', checkRole('ADMIN'), consalidationController.updStatus)
router.get('/orderStatus/:id', consalidationController.getStatusByOrderId)
router.get('/', consalidationController.getAll)
router.get('/getAddresses', consalidationController.getAddresses)
router.get('/delete/:id', consalidationController.delete)
router.get('/wayBills/all', consalidationController.getAllBillsPackCar)

module.exports = router