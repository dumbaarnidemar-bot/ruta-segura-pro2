const Storage={

guardar(clave,valor){

localStorage.setItem(

clave,

JSON.stringify(valor)

);

},

leer(clave){

const dato=

localStorage.getItem(clave);

return dato

?JSON.parse(dato)

:null;

}

};
