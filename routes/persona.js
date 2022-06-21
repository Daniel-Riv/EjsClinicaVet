const {Router} = require('express');
const router = Router();
const {createdPersona,getPersona,getPersonas,updatePerosna,deletePersona, viewDelete,viewUpdate} = require('../controller/persona');

router.get('/persona', (req, res) => {
    res.render('dataPerson/addPersona', {error_msg: req.flash('error_msg')[0]});  //Ruta principal
});

router.post('/add', createdPersona);

router.get('/dataPerson/AllPerson', getPersonas);
router.get('/onePersona/:id', getPersona);
router.post('/updateperson/:id', updatePerosna);
router.get('/deletePersona/:id', deletePersona);
router.get('/delete',viewDelete);
router.get('/update/:id',viewUpdate);




module.exports = router;  