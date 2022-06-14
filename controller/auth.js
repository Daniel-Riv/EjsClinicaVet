const User = require('../models/user');


const singnUp = async (req, res) => {
    const {name,lastName,email, password,} = req.body;
    const erros = [];
        if (name.length < 0) {
            erros.push({
                text: 'El nombre es requerido'
            })
        }
        if (lastName.length < 0) {
            erros.push({
                text: 'El apellido es requerido'
            })
        }
        if (password.length <  4) {
            erros.push({text:'la contraseña debe tener mas de 4 caracteres'});
        }

        if (erros.length > 0) {
            res.render('/singnUp', {erros,name,lastName, email, password})
        }else{
        const validation = await User.findOne({email: email});
        if(validation){
            req.flash('error_msg', `User ${email} already exist `);
            res.redirect('/singIn');
        }
   
        const user  =  new User({name,lastName,email, password});
        user.password = await user.encryptPassword(password);
        await user.save();
        req.flash('success_msg', `User ${email} created`);
        res.redirect('/singIn');
    }
}



module.exports = {
    singnUp,
}