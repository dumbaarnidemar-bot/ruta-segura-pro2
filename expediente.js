const form=document.getElementById("expedienteForm");

const resumen=document.getElementById("resumen");

const barra=document.getElementById("progressBar");

form.addEventListener("submit",(e)=>{

e.preventDefault();

const expediente={

nombre:

document.getElementById("nombre").value,

pais:

document.getElementById("pais").value,

salida:

document.getElementById("salida").value,

ingreso:

document.getElementById("ingreso").value,

hechos:

document.getElementById("hechos").value

};

Storage.guardar(

"expediente",

expediente

);

mostrarResumen(expediente);

});

function mostrarResumen(datos){

resumen.innerHTML=`

<b>Nombre:</b> ${datos.nombre}<br><br>

<b>País:</b> ${datos.pais}<br><br>

<b>Salida:</b> ${datos.salida}<br><br>

<b>Ingreso:</b> ${datos.ingreso}<br><br>

<b>Relato:</b><br>

${datos.hechos}

`;

actualizarProgreso(datos);

}

function actualizarProgreso(datos){

let puntos=0;

Object.values(datos).forEach(v=>{

if(v!=="") puntos++;

});

const porcentaje=(puntos/5)*100;

barra.style.width=porcentaje+"%";

}

const guardado=Storage.leer("expediente");

if(guardado){

mostrarResumen(guardado);

}
