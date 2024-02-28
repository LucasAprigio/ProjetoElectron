const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

router.get('/', userController.getUsers);
router.post('/', userController.postUser);
router.put('/:id', userController.putUser);
router.delete('/:id', userController.deleteUser);

module.exports = router;