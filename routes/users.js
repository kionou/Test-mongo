var express = require('express');
const dataUser = require('../Controllers/UserControlers');
const { requireAuth } = require('../middleware/jsonwebtoken');
var router = express.Router();


/* GET users listing. */
router.get('/', dataUser.GetUser);
router.get('/login', dataUser.LogintUser);
router.post('/', dataUser.PostUser);
router.post('/login', dataUser.LogintUserPost);
router.get('/acceuil',requireAuth, dataUser.Accueil);
router.get('/logout', dataUser.logout);
router.get('/editer/:id', dataUser.EditerGet);
router.post('/editer/', dataUser.EditerPost);
router.get('/delete/:id', dataUser.DeleteGet);






module.exports = router;
