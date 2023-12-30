const Router = require('express');
const router = new Router();
const carController = require('../controllers/carController');

router.post('/create', carController.create);
router.get('/getAll', carController.getAll);
router.get('/del/:id', carController.delete);
router.get('/nonzero-status', carController.getByNonZeroStatus);

module.exports = router;