const userController = require('../controllers/User.Controller');
const Router = require('express').Router();


Router.post('/signup', userController.signup);
Router.post('/login', userController.login);

module.exports = Router;