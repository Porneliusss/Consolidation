const Router = require('express');
const router = new Router();
const packageController = require('../controllers/packageController');

router.post('/create', packageController.create);
router.post('/carPack', packageController.connectToCar)
router.post('/wayBill/create', packageController.createWayBill);
router.post('/updStatus/:id', packageController.updStatus)

router.get('/getAll', packageController.getAll);
router.get('/del/:id', packageController.delete);
router.get('/getInit', packageController.getInit);
router.get('/user/:id', packageController.getByUserId);
router.get('/carPack/:id', packageController.getAllConnectedCar);

module.exports = router;