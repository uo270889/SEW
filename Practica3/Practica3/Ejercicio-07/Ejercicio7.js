"use strict"
class Ejercicio7{
    constructor(){

    }
    espanol(){
        $("#modificable").text("El sistema solar es el sistema planetario en el que se encuentran la Tierra y otros objetos astronómicos que giran directa o indirectamente en una órbita alrededor de una única estrella conocida como el Sol.");
    }
    ingles(){
        $("#modificable").text("The solar system is the planetary system in which the Earth and other astronomical objects are located, and they rotate directly or indirectly in an orbit around a single star known as the Sun.");
    }
    ocultar(){
        $("p").hide();
    }
    mostrar(){
        $("p").show();
    }
    añadir(){
        $("#añadido").append("<h3>Otros planetas</h3> \n");
        $("#añadido").append("Se añade un planeta nuevo \n");      
    }
    eliminar(){
        $("#añadido").remove();
    }
    recorrer(){
        $("*", document.body).each(function(){
            var aux = $(this).parent().get(0).tagName;
            $(this).prepend(document.createTextNode("Etiqueta padre: <"+aux+"> elemento : <"+ $(this).get(0).tagName+">valor: "));
        });
    }
    sumar(){
        var n = 0;
        $("table tr").each(function(){
            n++;
        });
        n--;
        alert("Valor de filas= "+n+" Valor de las columnas= 4");
    }
}
var ejercicio = new Ejercicio7();