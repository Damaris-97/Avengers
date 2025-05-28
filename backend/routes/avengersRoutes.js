// backend/routes/avengersRoutes.js
const express = require('express');
const router = express.Router();
const controller = require('../controllers/avengersController');

router.get('/', controller.getAllAvengers);
router.post('/', controller.addAvenger);
router.get('/:id', controller.getAvengerById);
router.put('/:id', controller.updateAvenger);
router.delete('/:id', controller.deleteAvenger);


module.exports = router;
