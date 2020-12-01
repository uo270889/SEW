"use strict"
class Ejercicio{
    constructor(){

    }

    permitirDropeo(e){
        e.preventDefault();
    }

    dropear(e){
        e.preventDefault();
        var datos = e.dataTransfer.getData("text");
        e.target.appendChild(document.getElementById(datos));
    }

    drag(e){
        e.dataTransfer.setData("text", e.target.id);
    }

    procesar(archivos){
        var archivo = archivos[0];
        var tipo = /image.*/;
        if(archivo.type.match(tipo)){
            var reader = new FileReader();

            reader.onload = function(e){
                $("input").remove();
                var imagen = document.createElement('img');
                imagen.setAttribute("draggable","true");
                imagen.setAttribute("ondragstart","e.drag(event)");
                imagen.setAttribute("width","400");
                imagen.setAttribute("height","150");
                imagen.setAttribute("id","drag2");
                imagen.src = reader.result;
                document.body.appendChild(imagen);
            }
            reader.readAsDataURL(archivo);
        }
    }
    
}
var e = new Ejercicio();