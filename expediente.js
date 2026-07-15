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

const analisis = IA.analizar(datos.hechos);

const eventos = timeline.generar(datos.hechos);

const cronologia = document.getElementById("cronologia");

if(eventos.length===0){

    cronologia.innerHTML="No se detectaron fechas en el relato.";

}else{

    cronologia.innerHTML=eventos.map(e=>`

        <p><strong>${e.anio}</strong> - ${e.descripcion}</p>

    `).join("");

}
if(eventos.length===0){

    cronologia.innerHTML="No se detectaron fechas en el relato.";

}else{

    cronologia.innerHTML=eventos.map(e=>`

        <p><strong>${e.anio}</strong> - ${e.descripcion}</p>

    `).join("");

}
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
