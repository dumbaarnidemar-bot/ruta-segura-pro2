const form=document.getElementById("expedienteForm");

const resumen=document.getElementById("resumen");

const barra=document.getElementById("progressBar");

form.addEventListener("submit",(e)=>{

e.preventDefault();

const expediente={

nombre:document.getElementById("nombre").value,

pais:document.getElementById("pais").value,

salida:document.getElementById("salida").value,

ingreso:document.getElementById("ingreso").value,

hechos:document.getElementById("hechos").value

};

Storage.guardar("expediente",expediente);

mostrarResumen(expediente);

});

function mostrarResumen(datos){

const analisis=IA.analizar(datos.hechos);

resumen.innerHTML=`

<h3>Resumen</h3>

<p><b>Nombre:</b> ${datos.nombre}</p>

<p><b>País:</b> ${datos.pais}</p>

<p><b>Salida:</b> ${datos.salida}</p>

<p><b>Ingreso:</b> ${datos.ingreso}</p>

<hr>

<h3>Evaluación</h3>

<p><b>Claridad:</b> ${analisis.claridad}%</p>

<p><b>Nivel de riesgo detectado:</b> ${analisis.riesgo}</p>

<p><b>Palabras relevantes:</b></p>

${analisis.coincidencias.join(", ")}

<hr>

<h3>Observaciones</h3>

<ul>

${analisis.observaciones.map(o=>`<li>${o}</li>`).join("")}

</ul>

`;

actualizarProgreso(datos);

}

function actualizarProgreso(datos){

let puntos=0;

Object.values(datos).forEach(v=>{

if(v!=="") puntos++;

});

barra.style.width=((puntos/5)*100)+"%";

}

const guardado=Storage.leer("expediente");

if(guardado){

mostrarResumen(guardado);

}
