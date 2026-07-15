class AnalizadorExpediente {

    constructor() {

        this.palabrasProteccion = [

            "amenaza",
            "golpe",
            "detención",
            "detenido",
            "policía",
            "militares",
            "gobierno",
            "persecución",
            "tortura",
            "violencia",
            "miedo",
            "asesinar",
            "matar",
            "secuestro",
            "pandilla",
            "cartel",
            "discriminación"

        ];

    }

    analizar(texto){

        const resultado = {

            palabras:0,

            coincidencias:[],

            claridad:0,

            riesgo:"Bajo",

            observaciones:[]

        };

        const textoMin = texto.toLowerCase();

        this.palabrasProteccion.forEach(p=>{

            if(textoMin.includes(p)){

                resultado.palabras++;

                resultado.coincidencias.push(p);

            }

        });

        if(texto.length>600)

            resultado.claridad=95;

        else if(texto.length>350)

            resultado.claridad=80;

        else if(texto.length>150)

            resultado.claridad=60;

        else

            resultado.claridad=30;

        if(resultado.palabras>=8)

            resultado.riesgo="Alto";

        else if(resultado.palabras>=4)

            resultado.riesgo="Medio";

        else

            resultado.riesgo="Bajo";

        if(resultado.claridad<70){

            resultado.observaciones.push(

                "Describe los hechos con mayor detalle."

            );

        }

        if(resultado.coincidencias.length===0){

            resultado.observaciones.push(

                "No se detectan hechos relacionados con persecución."

            );

        }

        return resultado;

    }

}

const IA = new AnalizadorExpediente();
