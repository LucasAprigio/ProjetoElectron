const express = require('express');
const employeeController = require('../controllers/employeeController');

const router = express.Router();

router.get('/', employeeController.getEmployees);
router.post('/', employeeController.postEmployee);
router.put('/:id', employeeController.putEmployee);
router.delete('/:id', employeeController.deleteEmployee);

module.exports = router;