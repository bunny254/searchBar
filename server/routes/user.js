const express= require('express');
const {createUser,getAllUsers, searchUsers} = require('../controller/user');
const router= express.Router();

router.get('/users', getAllUsers);
router.post('/users/create', createUser);
router.get('/search/:key', searchUsers);


module.exports = router;