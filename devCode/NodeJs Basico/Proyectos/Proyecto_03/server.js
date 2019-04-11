var express = require('express'),
    swig = require('swig'),
    passport = require('passport'),
    session = require('express-session'),
    cookieParser = require('cookie-parser');
var server = express();

swig.setDefaults({
    cache : false
})

// Conf de cookies antes de las sesiones de parser
server.use(cookieParser());

// Conf de express
// se debe hacer antes de la configuración de passport
server.use(session({secret : 'mi clave'}));

//Config passport
server.use( passport.initialize());
server.use( passport.session());

//Serializadores de las sesiones de passport
//para serializar la sesión del usuario cuando llegue una petición de autenticación
passport.serializeUser(function(user, done){
    done(null, user);// se va a guardar en una variable llamada req.user
});
//para deserializar
passport.deserializeUser(function(user, done){
    done(null, user);
});

//config swig
server.engine('html',swig.renderFile);
server.set('view engine', 'html');
server.set('views',__dirname + '/app/views');

//configuraicón para que pueda servir archivos estaticos
server.use(express.static('./public'));

// controllers
require('./app/controllers/home')(server);
require('./app/controllers/user')(server);

//connections
require('./app/connections/facebook')(server);
require('./app/connections/twitter')(server);
server.listen(8000);