const express = require('express');
const controller = require('../controllers/users.controller');

const router = express.Router();

router.get('/', controller.list);
router.get('/allprofiles', controller.ProfileList);
router.patch('/:id', controller.updateOne);

module.exports = router;
