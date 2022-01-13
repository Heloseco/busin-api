const express = require('express');
const router = express.Router();
const UserController = require('./../controller/UserController');
const passport = require('passport');

router.post('/add',UserController.AddUser);
router.get('/login',UserController.Login);
router.put('/changepassword',UserController.ChangePassword);
router.get('/user',UserController.GetUser);
router.get('/user/:id',UserController.GetUserById);

module.exports = router;
