const {Router} = require('express');
//const {singnUp, singnIn} = require('../controller/auth'); //singnUp, singnIn
const router = Router();
const passport = require('passport');


router.get('/', (req, res) => {
    res.render('index');  //Ruta principal
});

router.get('/', (req, res) => {
    res.render('singIn');  //Ruta principal
});
router.get('/', (req, res) => {
    res.render('singnUp');  //Ruta principal
});


module.exports = router;