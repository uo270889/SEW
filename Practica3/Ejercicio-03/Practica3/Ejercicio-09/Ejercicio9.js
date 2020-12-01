"use strict"
class Lugar{
    constructor(ciudad){
        this.key = "903c3a4283581cac2cfbef76c858d81a";
        this.ciudad = ciudad;
        this.tipo = "&mode=xml";
        this.unidades = "&units=metric";
        this.idioma = "&lang=es";
        this.url = "http://api.openweathermap.org/data/2.5/weather?q=" + this.ciudad + this.tipo + this.unidades + this.idioma + "&APPID=" + this.key;
        this.valido = "¡Todo correcto! JSON ha sido recibido de <a href='http://openweathermap.org'>OpenWeatherMap</a>";
        this.tiempo = new Tiempo(this.url);
    }
    mostrar(){
        this.crear("h2","Datos en XML desde <a href='http://openweathermap.org'>OpenWeatherMap</a>","footer");
        this.crear("h3",this.valido,"footer");
        this.crear("h4","XML","footer");
        this.crear("pre","","footer");
        this.crear("h4","Datos","footer");
        this.crear("p","","footer");
        this.tiempo.cargar();
        $("button").attr("disabled","disabled");
    }
    crear(tipo,texto,insertar){
        var elem = document.createElement(tipo);
        elem.innerHTML = texto;
        $(insertar).before(elem);
    }
}
class Tiempo{
    constructor(url){
        this.url = url;
    }
    cargar(){
        $.ajax({
            dataType: "xml",
            url: this.url,
            method: 'GET',
            success: function(datos){
                $("h5").text((new XMLSerializer()).serializeToString(datos));
                var nodosTotales = $('*',datos).length;
                var icono = $('weather',datos).attr("icon");
                var lugar = $('city',datos).attr("name");
                var longitud = $('coord', datos).attr("lon");
                var latitud = $('coord', datos).attr("lat");
                var pais = $('country',datos).text();
                var amanecer = $('sun',datos).attr("rise");
                var minutos = new Date().getTimezoneOffset();
                var amanecerMili = Date.parse(amanecer);
                amanecerMili = amanecerMili-(minutos*60*1000);
                var amanecerL = (new Date(amanecerMili)).toLocaleTimeString("es-ES");
                var oscurecer = $('sun',datos).attr("set");
                var oscurecerMili = Date.parse(oscurecer);
                oscurecerMili = oscurecerMili-(minutos*60*1000);
                var oscurecerL = (new Date(oscurecerMili)).toLocaleTimeString("es-ES");
                var temperatura = $('temperature',datos).attr("value");
                var minTemp = $('temperature',datos).attr("min");
                var maxTemp = $('temperature',datos).attr("max");
                var unitTem = $('temperature',datos).attr("unit");
                var humedad = $('humidity',datos).attr("value");
                var unitHum = $('humidity',datos).attr("unit");
                var presion = $('pressure',datos).attr("value");
                var unitPre = $('pressure',datos).attr("unit");
                var windVel = $('speed',datos).attr("value");
                var windNam = $('speed',datos).attr("name");
                var windDir = $('direction',datos).attr("value");
                var windCod = $('direction',datos).attr("code");
                var windNom = $('direction',datos).attr("name");
                var nubes = $('clouds',datos).attr("value");
                var nubesNom = $('clouds',datos).attr("name");
                var vision = $('visibility',datos).attr("value");
                var lluvia = $('precipitation',datos).attr("value");
                var lluviaMod = $('precipitation',datos).attr("mode");
                var descripcion = $('weather',datos).attr("value");
                var hora = $('lastupdate',datos).attr("value");
                var horaMili = Date.parse(hora);
                var horaMili = horaMili-(minutos*60*1000);

                var horaL = (new Date(horaMili)).toLocaleTimeString("es-ES");
                var fechaL = (new Date(horaMili)).toLocaleTimeString("es-ES");

                var str = "<ul><li>Numero de elementos del XML: "+nodosTotales+"</li>";
                str+="<ul><li>Poblacion: "+lugar+"<img src=http://openweathermap.org/img/w/" + icono + ".png></li>";
                str+="<li>Longitud: "+longitud+" grados</li>";
                str+="<li>Latitud: "+latitud+" grados</li>";
                str+="<li>Pais: "+pais+"</li>";
                str+="<li>Amanece a las: "+amanecerL+"</li>";
                str+="<li>Oscurece a las: "+oscurecerL+"</li>";
                str+="<li>Temperatura: "+temperatura+" grados Celsius</li>";
                str+="<li>Temperatura maxima: "+maxTemp+" grados Celsius</li>";
                str+="<li>Temperatura minima: "+minTemp+" grados Celsius</li>";
                str+="<li>Temperatura (uds): "+unitTem+"</li>";
                str+="<li>Presion: "+presion+" "+unitPre+"</li>";
                str+="<li>Humedad: "+humedad+" "+unitHum+" %</li>";
                str+="<li>Velocidad del viento: "+windVel+" m/s</li>";
                str+="<li>Nombre del viento: "+windNam+"</li>";
                str+="<li>Direccion del viento: "+windDir+" grados</li>";
                str+="<li>Codigo del viento: "+windCod+"</li>";
                str+="<li>Nombre de direccion del viento: "+windNom+" grados</li>";
                str+="<li>Nubosidad: "+nubes+"</li>";
                str+="<li>Nombre nubosidad: "+nubesNom+"</li>";
                str+="<li>Visibilidad: "+vision+" metros</li>";
                str+="<li>Precipitacion valor: "+lluvia+"</li>";
                str+="<li>Precipitacion modo: "+lluviaMod+"</li>";
                str+="<li>Descripcion: "+descripcion+"</li>";
                str+="<li>Hora de la medicion: "+horaL+" </li>";
                str+="<li>Fecha de la medicion: "+fechaL+" </li>";
                
                $("p").html(str); 
            },
            error: function(){
                $("h3").html("¡Esta habiendo problemas! No se puede obtener XML de <a href='http://openweathermap.org'>OpenWeatherMap</a>");
                $("h4").remove();
                $("h5").remove();
                $("p").remove();
            }
        });
    }
}
var lugar1 = new Lugar("Teverga");
var lugar2 = new Lugar("Gijón");
var lugar3 = new Lugar("Oviedo");
var lugar4 = new Lugar("Santiago de Compostela");
var lugar5 = new Lugar("Finisterre");