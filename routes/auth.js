const {Router} = require('express');
const {singnUp} = require('../controller/auth'); //singnUp, singnIn
const router = Router();
const User = require('../models/user');
const passport = require('passport');



router.get('/singIn', (req, res) => {
    res.render('singIn');
});

router.post('/singin', passport.authenticate('local', {
    successRedirect: '/dataPerson/AllPerson',
    failureRedirect: 'singIn',
    failureFlash: true
}));

router.get('/singnUp', (req, res) => {
    res.render('singnUp');
});

router.post('/singnUp', singnUp);






module.exports = router;