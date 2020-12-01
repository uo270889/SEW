"use strict";
class Mapa{
    constructor (){
        this.map = new Map();
        this.inicializar();
    }
    inicializar(){
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition(this.datos.bind(this),this.errores.bind(this));
        }
        else{
            alert('No soportada la geolocalizacion por el ordenador')
        }
    }
    datos(dat){
        geolocalizacion.map.set('accuracy', dat.coords.accuracy);
        geolocalizacion.map.set('altitude', dat.coords.altitude);
        geolocalizacion.map.set('altitudeAccuracy', dat.coords.altitudeAccuracy);
        geolocalizacion.map.set('heading', dat.coords.heading);
        geolocalizacion.map.set('latitude', dat.coords.latitude);
        geolocalizacion.map.set('longitude', dat.coords.longitude);
        geolocalizacion.map.set('speed', dat.coords.speed);
        geolocalizacion.pintar();
    }
    pintar(){
        const localizacion = {
            lat: this.map.get("latitude"),
            lng: this.map.get("longitude")
        };
        const map = new google.maps.Map($('main')[0],{
            zoom: 14, 
            center: localizacion
        });
        const marker = new google.maps.Marker({
            position: localizacion, 
            map: map
        });
    }
    errores(e){
        alert('Error: '+e.code+''+e.message);
    }
}
const geolocalizacion = new Mapa();
