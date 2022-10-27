var express = require('express');
const dataUser = require('../Controllers/UserControlers');
var router = express.Router();

/* GET users listing. */
router.get('/', dataUser.GetUser);
router.get('/login', dataUser.LogintUser);
router.post('/', dataUser.PostUser);


module.exports = router;
