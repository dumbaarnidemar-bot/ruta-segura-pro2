class Timeline {

    generar(texto){

        const eventos=[];

        const regex=/\b(19|20)\d{2}\b/g;

        const encontrados=texto.match(regex);

        if(encontrados){

            encontrados.forEach((anio)=>{

                eventos.push({
                    anio:anio,
                    descripcion:"Evento mencionado en el relato."
                });

            });

        }

        return eventos;

    }

}

const timeline=new Timeline();
