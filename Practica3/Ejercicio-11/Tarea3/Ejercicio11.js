"use strict";
class Mapa{
    constructor (){
        navigator.geolocation.getCurrentPosition(this.getPosicion.bind(this),this.errores.bind(this));
    }
    getPosicion(posicion){
        this.menssaje ="Se ha realizado correctamente la peticion"
        this.longitud         = posicion.coords.longitude; 
        this.latitud          = posicion.coords.latitude;  
        this.precision        = posicion.coords.accuracy;
        this.altitud          = posicion.coords.altitude;
        this.precisionAltitud = posicion.coords.altitudeAccuracy;
        this.rumbo            = posicion.coords.heading;
        this.velocidad        = posicion.coords.speed;       
    }
    errores(error){
        switch(error.code){
            case error.PERMISSION_DENIED:
                this.mensaje = "El usuario no permite la geolocalización"
                break;
            case error.POSITION_UNAVALIABLE:
                this.mensaje ="Informacion no disponible"
                break;
            case error.TIMEOUT:
                this.mensaje = "La peticion ha caducado"
                break;
            case error.UNKNOWN_ERROR:
                this.mensaje ="Erro desconocido"
                break;
        }
    }
    getLongitud() {
        return this.longitud;
    }

    getLatitud() {
        return this.latitud;
    }

    getAltitud() {
        return this.altitud;
    }
    mostrar(dondeVerlo){
        var ubicacion=document.getElementById(dondeVerlo);
        var datos='<ul><li>Longitud: '+this.longitud +' grados</li>'; 
        datos+='<li>Latitud: '+this.latitud +' grados</li>'; 
        datos+='<li>Precisión de la latitud y longitud: '+ this.precision +' metros</li>';
        datos+='<li>Altitud: '+ this.altitud +' metros</li>';
        datos+='<li>Precisión de la altitud: '+ this.precisionAltitud +' metros</li>'; 
        datos+='<li>Rumbo: '+ this.rumbo +' grados</li>'; 
        datos+='<li>Velocidad: '+ this.velocidad +' metros/segundo</li></ul>';
        ubicacion.innerHTML = datos;
    }
    getMapa(dondeVerlo){
        var ubicacion = document.getElementById(dondeVerlo);
        var api ="&key=AIzaSyC6j4mF6blrc4kZ54S6vYZ2_FpMY9VzyRU";
        var url ="https://maps.googleapis.com/maps/api/staticmap?";
        var centro = "center=" + this.latitud + "," + this.longitud;
        var zoom = "&zoom=15";
        var tamaño = "&size=800x600";
        var marcador = "&markers=color:red%7Clabel:S%7C" + this.latitud + "," + this.longitud;
        var sensor = "&sensor=false";
        this.imagen = url + centro + zoom + tamaño + marcador + sensor + api;
        ubicacion.innerHTML="<img src='" + this.imagen + "'/>";
    }
}
var lugar = new Mapa();
