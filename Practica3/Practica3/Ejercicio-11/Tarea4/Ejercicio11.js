"use strict";
class Mapa{
    constructor (){
        navigator.geolocation.getCurrentPosition(this.localizacion.bind(this));
    }
    localizacion(){
        var oviedo = { lat: 43.3634472, lng: -5.8459444 };
        var mapaO = new google.maps.Map(document.getElementById('mapa'), { zoom: 8, center: oviedo });
        var marcador = new google.maps.Marker({ position: oviedo, map: mapaO });
    }
}
var mapa = new Mapa();
