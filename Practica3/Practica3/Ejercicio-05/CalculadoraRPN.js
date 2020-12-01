"use strict"
class PilaRPN{
    constructor(){
        this.pila = new Array();
    }
    apilar(valor){
        this.pila.push(valor);
    }
    desapilar(){
        return(this.pila.pop());
    }
    vaciar(){
        var longitud = this.pila.length;
        for(var i=0; i<longitud; i++){
            this.pila.pop();
        }
    }
    ensenar(){
        var str = '<table>';
        var cnt = this.pila.length;
        for(var k in this.pila){
            str += "<tr><th>"+ cnt-- +":</th><td>"+ this.pila[k] + "</td></tr>";
        }
        str = str + "</table>"
        return str;
    }
    tamano(){
        return this.pila.length;
    }
}
class CalculadoraRPN {
    constructor(){
        this.caracteres = "";
        this.pila = new PilaRPN();
    }
    cero(){
        this.caracteres += "0";
        document.getElementById("textZone").textContent = this.caracteres;
    }
    uno(){
        this.caracteres += "1";
        document.getElementById("textZone").textContent = this.caracteres;
    }
    dos(){
        this.caracteres += "2";
        document.getElementById("textZone").textContent = this.caracteres;
    }
    tres(){
        this.caracteres += "3";
        document.getElementById("textZone").textContent = this.caracteres;
    }
    cuatro(){
        this.caracteres += "4";
        document.getElementById("textZone").textContent = this.caracteres;
    }
    cinco(){
        this.caracteres += "5";
        document.getElementById("textZone").textContent = this.caracteres;
    }
    seis(){
        this.caracteres += "6";
        document.getElementById("textZone").textContent = this.caracteres;
    }
    siete(){
        this.caracteres += "7";
        document.getElementById("textZone").textContent = this.caracteres;
    }
    ocho(){
        this.caracteres += "8";
        document.getElementById("textZone").textContent = this.caracteres;
    }
    nueve(){
        this.caracteres += "9";
        document.getElementById("textZone").textContent = this.caracteres;
    }
    punto(){
        this.caracteres += ".";
        document.getElementById("textZone").textContent = this.caracteres;
    }
    enter(){
        if(this.caracteres){
            this.pila.apilar(this.caracteres);
            document.getElementById("resultado").innerHTML = this.pila.ensenar();
            document.getElementById("textZone").textContent = "";
            this.caracteres = "";
        }
    }
    sumar(){
        if(this.pila.tamano() >= 2){
            var cnt1 = this.pila.desapilar(); 
            var cnt2 = this.pila.desapilar();
            var res = parseFloat(cnt1) + parseFloat(cnt2);
            this.pila.apilar(res);
            document.getElementById("resultado").innerHTML = this.pila.ensenar();
        }
    }
    restar(){
        if(this.pila.tamano() >= 2){
            var cnt1 = this.pila.desapilar(); 
            var cnt2 = this.pila.desapilar();
            var res = parseFloat(cnt2) - parseFloat(cnt1);
            this.pila.apilar(res);
            document.getElementById("resultado").innerHTML = this.pila.ensenar();
        }
    }
    producto(){
        if(this.pila.tamano() >= 2){
            var cnt1 = this.pila.desapilar(); 
            var cnt2 = this.pila.desapilar();
            var res = parseFloat(cnt1) * parseFloat(cnt2);
            this.pila.apilar(res);
            document.getElementById("resultado").innerHTML = this.pila.ensenar();
        }
    }
    cociente(){
        if(this.pila.tamano() >= 2){
            var cnt1 = this.pila.desapilar(); 
            var cnt2 = this.pila.desapilar();
            var res = parseFloat(cnt2) / parseFloat(cnt1);
            this.pila.apilar(res);
            document.getElementById("resultado").innerHTML = this.pila.ensenar();
        }
    }
    raiz(){
        if(this.pila.tamano() >= 1){
           var cnt = this.pila.desapilar(); 
           var res = Math.sqrt(cnt);
           this.pila.apilar(res);
           document.getElementById("resultado").innerHTML = this.pila.ensenar();
        }
    }
    e(){
        if(this.pila.tamano() >= 1){
            var cnt = this.pila.desapilar(); 
            var res = Math.pow(Math.E,cnt);
            this.pila.apilar(res);
            document.getElementById("resultado").innerHTML = this.pila.ensenar();
        }
    }
    xcuadrado(){
        if(this.pila.tamano() >= 1){
            var cnt = this.pila.desapilar(); 
            var res = Math.pow(cnt,2);
            this.pila.apilar(res);
            document.getElementById("resultado").innerHTML = this.pila.ensenar();
        }
    }
    sin(){
        if(this.pila.tamano() >= 1){
            var cnt = this.pila.desapilar(); 
            var res = Math.sin(cnt);
            this.pila.apilar(res);
            document.getElementById("resultado").innerHTML = this.pila.ensenar();
        }
    }
    cos(){
        if(this.pila.tamano() >= 1){
            var cnt = this.pila.desapilar(); 
            var res = Math.cos(cnt);
            this.pila.apilar(res);
            document.getElementById("resultado").innerHTML = this.pila.ensenar();
        }
    }
    tan(){
        if(this.pila.tamano() >= 1){
            var cnt = this.pila.desapilar(); 
            var res = Math.tan(cnt);
            this.pila.apilar(res);
            document.getElementById("resultado").innerHTML = this.pila.ensenar();
        }
    }
    asin(){
        if(this.pila.tamano() >= 1){
            var cnt = this.pila.desapilar(); 
            var res = Math.asin(cnt);
            this.pila.apilar(res);
            document.getElementById("resultado").innerHTML = this.pila.ensenar();
        }
    }
    acos(){
        if(this.pila.tamano() >= 1){
            var cnt = this.pila.desapilar(); 
            var res = Math.acos(cnt);
            this.pila.apilar(res);
            document.getElementById("resultado").innerHTML = this.pila.ensenar();
        }
    }
    atan(){
        if(this.pila.tamano() >= 1){
            var cnt = this.pila.desapilar(); 
            var res = Math.atan(cnt);
            this.pila.apilar(res);
            document.getElementById("resultado").innerHTML = this.pila.ensenar();
        }
    }
    log(){
        if(this.pila.tamano() >= 1){
            var cnt = this.pila.desapilar(); 
            var res = Math.log(cnt);
            this.pila.apilar(res);
            document.getElementById("resultado").innerHTML = this.pila.ensenar();
        }
    }
    xy(){
        if(this.pila.tamano() >= 2){
            var y = this.pila.desapilar(); 
            var x = this.pila.desapilar();
            var res = Math.pow(x,y);
            this.pila.apilar(res);
            document.getElementById("resultado").innerHTML = this.pila.ensenar();
        } 
    }
    borrar(){
        this.pila.vaciar();
        document.getElementById.length("resultado").innerHTML = this.pila.ensenar();
    }
    retroceder(){
        var string = this.caracteres.substring(0,this.caracteres.length-1);
        this.caracteres = string;
        document.getElementById("textZone").textContent = string;
    }
}
var calculadora = new CalculadoraRPN();