const chatContainer=document.getElementById("chatContainer");
const input=document.getElementById("respuestaIA");
const boton=document.getElementById("btnResponder");

agregarMensaje("assistant",chat.pregunta());

boton.onclick=enviar;

input.addEventListener("keypress",(e)=>{

    if(e.key==="Enter") enviar();

});

function enviar(){

    if(input.value.trim()==="") return;

    agregarMensaje("user",input.value);

    const siguiente=chat.responder(input.value);

    input.value="";

    if(siguiente){

        agregarMensaje("assistant",siguiente);

    }else{

        agregarMensaje("assistant",
        "Perfecto. Ya tengo la información inicial.");

    }

    actualizarDashboard({

        claridad:75,

        coherencia:82,

        cronologia:60,

        evidencias:35

    });

}

function agregarMensaje(tipo,texto){

    const div=document.createElement("div");

    div.className="message "+tipo;

    div.textContent=texto;

    chatContainer.appendChild(div);

    chatContainer.scrollTop=
        chatContainer.scrollHeight;

}

});
