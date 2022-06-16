const Pesona = require('../models/persona');

const createdPersona = async (req, res) => {
    const { name, lastName, phone, direction,nameMascot,razaMascot,descriptionMascot} = req.body;
    const erros = [];
        if (name.length <= 0) {
            erros.push({
                text: 'El nombre es requerido'
            })
        }
        if (lastName.length < 0) {
            erros.push({
                text: 'El apellido es requerido'
            })
        }
        if (phone.length < 0) {
            erros.push({
                text: 'El telefono es requerido'
            })
        }
        if (direction.length < 0) {
            erros.push({
                text: 'La direccion es requerida'
            })
        }
        if (nameMascot.length < 0) {
            erros.push({
                text: 'El nombre de la mascota es requerido'

            })
        }
        if (razaMascot.length < 0) {
            erros.push({
                text: 'La raza de la mascota es requerida'
            })
        }
        if (descriptionMascot.length < 0) {
            erros.push({
                text: 'La descripcion de la mascota es requerida'
            })
        }
        if (erros.length > 0) {
            req.flash('error_msg', 'Error al crear persona; Ingrese todos los campos');
            res.redirect('/persona');
        }else{
            const persona = new Pesona({name,lastName,phone,direction,nameMascot,razaMascot,descriptionMascot});
            await persona.save();
            req.flash('success_msg', 'Persona creada correctamente');
            res.redirect('dataPerson/Allperson');
        }
}

const getPersonas = async (req, res) => {
    const personas = await Pesona.find();
    res.render('dataPerson/AllPerson', {personas, success_msg: req.flash('success_msg')[0]});
    
}

const getPersona = async (req, res) => {
    const persona = await Pesona.findById(req.params.id);
    res.render('dataPerson/onePersona', {persona});
}

const updatePerosna = async (req, res) => {
    const { name, lastName, phone, direction,nameMascot,razaMascot,descriptionMascot} = req.body;
    const persona = await Pesona.findByIdAndUpdate(req.params.id, {name,lastName,phone,direction,nameMascot,razaMascot,descriptionMascot});
    await persona.save();
    console.log(persona);
    req.flash('success_msg', 'Persona actualizada correctamente');
    res.redirect('/dataPerson/AllPerson');
}

const deletePersona = async (req, res) => {
    await Pesona.findByIdAndDelete(req.params.id);
    req.flash('success_msg', 'Persona eliminada correctamente');
    console.log('se elimino');
    res.redirect('/dataPerson/AllPerson');
}

const viewDelete = async (req, res) => {
    const personas = await Pesona.find();
    res.render('dataPerson/deletePersona', {personas});
    
}

const viewUpdate = async (req, res) => {
    const {id} = req.params;
    const persona = await Pesona.find({_id:id});
    res.render('dataPerson/updateperson', {persona});
    
}

module.exports = {
    createdPersona,
    getPersonas,
    getPersona,
    updatePerosna,
    deletePersona,
    viewDelete,
    viewUpdate

}