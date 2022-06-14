const {Router} = require('express');
const router = Router();
const {createdPersona,getPersona,getPersonas,updatePerosna,deletePersona} = require('../controller/persona');

router.get('/persona', (req, res) => {
    res.render('dataPerson/addPersona');
});

router.post('/add', createdPersona);

router.get('/dataPerson/AllPerson', getPersonas);
router.get('/onePersona/:id', getPersona);
router.put('/updateperson/:id', updatePerosna);
router.get('/deletePersona/:id', deletePersona);

module.exports = router;  