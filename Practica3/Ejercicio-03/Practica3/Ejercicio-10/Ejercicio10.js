"use strict"
class Imagen{
    constructor(ciudad){
        this.cuidad = ciudad;
    }
    mostrar(){
        var flickrAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
        $.getJSON(flickrAPI,{
            tags: this.ciudad,
            tagmode: "any",
            format: "json"
        })
        .done(function(data){
            $.each(data.items, function(i,item){
                $("<img>").attr( "src", item.media.m).appendTo( "#imagenes" );
                if(i===40){
                    return false;
                }
            });
        });
    }
}

var lugar1 = new Imagen("Zaragoza");
var lugar2 = new Imagen("Gijon");
var lugar3 = new Imagen("Oviedo");
var lugar4 = new Imagen("Valencia");
var lugar5 = new Imagen("Tokio");