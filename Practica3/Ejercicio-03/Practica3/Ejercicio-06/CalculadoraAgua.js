"use strict"
class CalculadoraAgua{

    constructor(){
        
    }
    cero(){
        var caracteres = document.getElementById("textZone").value;
        document.getElementById("textZone").value = caracteres + "0";
    }
    uno(){
        var caracteres = document.getElementById("textZone").value;
        document.getElementById("textZone").value = caracteres + "1";
    }
    dos(){
        var caracteres = document.getElementById("textZone").value;
        document.getElementById("textZone").value = caracteres + "2";
    }
    tres(){
        var caracteres = document.getElementById("textZone").value;
        document.getElementById("textZone").value = caracteres + "3";
    }
    cuatro(){
        var caracteres = document.getElementById("textZone").value;
        document.getElementById("textZone").value = caracteres + "4";
    }
    cinco(){
        var caracteres = document.getElementById("textZone").value;
        document.getElementById("textZone").value = caracteres + "5";
    }
    seis(){
        var caracteres = document.getElementById("textZone").value;
        document.getElementById("textZone").value = caracteres + "6";
    }
    siete(){
        var caracteres = document.getElementById("textZone").value;
        document.getElementById("textZone").value = caracteres + "7";
    }
    ocho(){
        var caracteres = document.getElementById("textZone").value;
        document.getElementById("textZone").value = caracteres + "8";
    }
    nueve(){
        var caracteres = document.getElementById("textZone").value;
        document.getElementById("textZone").value = caracteres + "9";
    }
    punto(){
        var caracteres = document.getElementById("textZone").value;
        document.getElementById("textZone").value = caracteres + ".";
    }
    ducha(){
        var tiempoDucha = document.getElementById("textZone").value;
        try{
            document.getElementById("textZone").value = ((tiempoDucha * 20)*7) + " L/semana";
        }catch(error){
            document.getElementById("textZone").value = "Error = "+ error;
        }
    }
    lavavajillas(){
        var vecesLava = document.getElementById("textZone").value;
        try{
            document.getElementById("textZone").value = (vecesLava * 54.2) + " L/semana";
        }catch(error){
            document.getElementById("textZone").value = "Error = "+ error;
        }
    }
    mano(){
        var vecesLava = document.getElementById("textZone").value;
        try{
            document.getElementById("textZone").value = (vecesLava * 88.8) + " L/semana";
        }catch(error){
            document.getElementById("textZone").value = "Error = "+ error;
        }
    }
    lavadora(){
        var vecesLava = document.getElementById("textZone").value;
        try{
            document.getElementById("textZone").value = (vecesLava * 62) + " L/semana";
        }catch(error){
            document.getElementById("textZone").value = "Error = "+ error;
        }
    }
    borrar(){
        document.getElementById("textZone").value = "";
    }
}
var calculadora = new CalculadoraAgua();