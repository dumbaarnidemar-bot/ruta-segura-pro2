class Chat {

    constructor(){

        this.pasos=[

            "¿Por qué saliste de tu país?",

            "¿Quién te hizo daño o te amenazó?",

            "¿Cuándo ocurrieron los hechos?",

            "¿Tienes pruebas?",

            "¿Por qué no puedes regresar?"

        ];

        this.actual=0;

        this.respuestas=[];

    }

    pregunta(){

        return this.pasos[this.actual];

    }

    responder(texto){

        this.respuestas.push(texto);

        this.actual++;

        if(this.actual>=this.pasos.length){

            return null;

        }

        return this.pasos[this.actual];

    }

}

const chat=new Chat();
