"use strict";
class Procesador{
    constructor(){

    }

    archivos(files){
        this.soporte();
        var numByt = 0;
        for(var i=0; i<files.length; i++){
            var archivo = files[i];
            this.crear("p","Archivo nº: " + i, "footer");
            this.propiedades(archivo);
            numByt += archivo.size;
            var txt = /text.*/;
            var json = /application.json/;
            if(archivo.type.match(txt)||archivo.type.match(json)){
                this.contenido(archivo);
            }
        }
        document.getElementById("numero").innerHTML = files.length;
        document.getElementById("tamaño").innerHTML = numByt + "bytes";
    }

    propiedades(archivo){
        this.crear("p","Nombre del archivo: " + archivo.name, "footer");
        this.crear("p","Tamaño del archivo: " + archivo.size + "bytes","footer");
        this.crear("p","Tipo del archivo: " + archivo.type, "footer");
        this.crear("p","Ultima modificacion: " + archivo.lastModifiedDate, "footer");
    }

    contenido(archivo){
        this.crear("p","Contenido del archivo:","footer");
        var reader = new FileReader();
        reader.onload = function(){
            var elem = document.createElement("pre");
            elem.innerHTML = reader.result;
            $("footer").before(elem);
        }
        reader.readAsText(archivo);
    }

    soporte(){
        if(window.File && window.FileReader && window.FileList && window.Blob){
            document.getElementById("cosas").innerHTML ="<p>Este navegador SI soporta API File </p>";
        }
        else{
            document.getElementById("cosas").innerHTML ="<p>Este navegador NO soporta API File y puede dar errores y no funcionar correctamente</p>";
        }
    }

    crear(tipElem, txt, insert){
        var elem = document.createElement(tipElem);
        elem.innerHTML = txt;
        $(insert).before(elem);
    }
}

var procesado = new Procesador();