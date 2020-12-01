"use strict"
class Lugar{
    constructor(ciudad){
        this.key = "903c3a4283581cac2cfbef76c858d81a";
        this.ciudad = ciudad;
        this.codigo = "ES";
        this.unidades = "&units=metric";
        this.idioma = "&lang=es";
        this.url = "http://api.openweathermap.org/data/2.5/weather?q=" + this.ciudad + "," + this.codigo + this.unidades + this.idioma + "&APPID=" + this.key;
        this.valido = "¡Todo correcto! JSON ha sido recibido de <a href='http://openweathermap.org'>OpenWeatherMap</a>";
        this.tiempo = new Tiempo(this.url);
    }
    mostrar(){
        this.crear("h2","Datos en JSON desde <a href='http://openweathermap.org'>OpenWeatherMap</a>","footer");
        this.crear("h3",this.valido,"footer");
        this.crear("h4","JSON","footer");
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
            dataType: "json",
            url: this.url,
            method: 'GET',
            success: function(datos){
                $("pre").text(JSON.stringify(datos,null,2));
                var str = "<ul><li>Localidad: "+datos.name+"<img src=http://openweathermap.org/img/w/"+datos.weather[0].icon+".png></li>";
                str+="<li>Pais: "+datos.sys.country+"</li>";
                str+="<li>Latitud: "+datos.coord.lat+" grados</li>";
                str+="<li>Longitud: "+datos.coord.lon+" grados</li>";
                str+="<li>Temperatura: "+datos.main.temp+" grados Celsius</li>";
                str+="<li>Temperatura maxima: "+datos.main.temp_max+" grados Celsius</li>";
                str+="<li>Temperatura minima: "+datos.main.temp_min+" grados Celsius</li>";
                str+="<li>Presion: "+datos.main.pressure+" milibares</li>";
                str+="<li>Humedad: "+datos.main.humidity+" %</li>";
                str+="<li>Amanece a las: "+new Date(datos.sys.sunrise * 1000).toLocaleString()+"</li>";
                str+="<li>Oscurece a las: "+new Date(datos.sys.sunset * 1000).toLocaleString()+"</li>";
                str+="<li>Velocidad del viento: "+datos.wind.speed+" m/s</li>";
                str+="<li>Direccion del viento: "+datos.wind.deg+" grados</li>";
                str+="<li>Hora de la medicion: "+new Date(datos.dt * 1000).toLocaleTimeString()+" </li>";
                str+="<li>Fecha de la medicion: "+new Date(datos.dt * 1000).toLocaleDateString()+" </li>";
                str+="<li>Descripcion: "+datos.weather[0].description+"</li>";
                str+="<li>Visibilidad: "+datos.visibility+" metros</li>";
                str+="<li>Nubosidad: "+datos.clouds.all+" %</li></ul>";
                $("p").html(str);
            },
            error: function(){
                $("h3").html("¡Esta habiendo problemas! No se puede obtener JSON de <a href='http://openweathermap.org'>OpenWeatherMap</a>");
                $("h4").remove();
                $("pre").remove();
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