// por defecto siempre existe en todos los scripts de NodeJs
// var exports = {}
// a este objeto se le puede agregar todos los atributos que queramos
//y lo podemos utilizar en cualquier otro módulo
var arreglo1 = ['jean', 'carlos'],
    arreglo2 = [1,2,3,4];

//aqui mismo al objeto export le definimos los nombres de los atributos

/* 1era forma de exportar
exports.arreglo1 = arreglo1;
exports.arreglo2 = function (){
    return arreglo2.length;
};
*/

// 2da forma de exportar
    module.exports = arreglo1;
