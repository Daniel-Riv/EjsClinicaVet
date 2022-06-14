const express = require('express');
const path = require('path');
const morgan = require('morgan');
const flash = require('connect-flash');
const session = require('express-session');
const passport = require('passport');
//require('bootstrap');

require('dotenv').config();
require('./database/database')

//Inicializations
const app = express()
app.use(express.static(path.join(__dirname,'public')))
require('./passport/passport');

//Settings
app.set('port', process.env.PORT || 3000)
app.set('views', path.join(__dirname,'views'))
app.set('view engine', 'ejs')

//Middlewares

app.use(express.urlencoded({extended:false}));//resivir datos del cliente
app.use(morgan('dev'));
app.use(express.json());
app.use(session({
    secret: 'clinicaVeterinaria',
    resave: true,
    saveUninitialized: true
}));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());

//Routes
app.use('/',require('./routes/index'));
app.use(require('./routes/auth'));
app.use(require('./routes/persona'));


//Start server
app.listen(app.get('port'), () => {
    console.log(`Server listen at port ${app.get('port')}`)
})


