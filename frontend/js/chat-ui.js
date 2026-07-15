const pregunta=document.getElementById("preguntaIA");

const respuesta=document.getElementById("respuestaIA");

const boton=document.getElementById("btnResponder");

boton.addEventListener("click",()=>{

if(respuesta.value==="") return;

const siguiente=

chat.responder(respuesta.value);

respuesta.value="";

if(siguiente){

pregunta.innerHTML=siguiente;

}else{

pregunta.innerHTML=

"✅ Entrevista inicial terminada.";

boton.disabled=true;

respuesta.disabled=true;

}

});
