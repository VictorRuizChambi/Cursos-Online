var http = require('http');//traiga todo el módulo http de node.js para usarlo en dicha variable



/* 1ra Forma
var server = http.createServer(function(req, res){
    res.writeHead('200',{'content.type' : 'text/plain'});
    res.end('Hola Mundo');
}).listen(3000);
*/

/* 2da Forma
function miPeticion(req, res){
    res.writeHead('200',{'content.type' : 'text/plain'});
    res.end('Hola mi nuevo mundo de JS');
}
var server = http.createServer(miPeticion).listen(3000);
*/

/* 3ra Forma
var miPeticion = function(req, res){
    res.writeHead('200',{'content.type': 'text/plain'});
    res.end('Hola mundo: tercera Forma');
};

var server = http.createServer(miPeticion).listen(3000);
*/

var miPeticion = function(req, res){
    res.writeHead('200',{'content.type': 'text/plain'});

    if(req.url == '/'){
        res.end('Hola mundo con logica de servidor');
    }
    if(req.url == '/cursos/'){
        res.end('Esta es la url de cursos');
    }
};

var server = http.createServer(miPeticion).listen(3000);