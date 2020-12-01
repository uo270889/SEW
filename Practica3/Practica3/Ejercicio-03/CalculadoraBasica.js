"use strict";
class CalculadoraBasica{
    constructor(){
        this.memory = 0;
    }
    cero(){
        var cnt = document.getElementById("resultado").value;
        document.getElementById("resultado").value = cnt + "0";
    }
    uno(){
        var cnt = document.getElementById("resultado").value;
        document.getElementById("resultado").value = cnt + "1";
    }
    dos(){
        var cnt = document.getElementById("resultado").value;
        document.getElementById("resultado").value = cnt + "2";
    }
    tres(){
        var cnt = document.getElementById("resultado").value;
        document.getElementById("resultado").value = cnt + "3";
    }
    cuatro(){
        var cnt = document.getElementById("resultado").value;
        document.getElementById("resultado").value = cnt + "4";
    }
    cinco(){
        var cnt = document.getElementById("resultado").value;
        document.getElementById("resultado").value = cnt + "5";
    }
    seis(){
        var cnt = document.getElementById("resultado").value;
        document.getElementById("resultado").value = cnt + "6";
    }
    siete(){
        var cnt = document.getElementById("resultado").value;
        document.getElementById("resultado").value = cnt + "7";
    }
    ocho(){
        var cnt = document.getElementById("resultado").value;
        document.getElementById("resultado").value = cnt + "8";
    }
    nueve(){
        var cnt = document.getElementById("resultado").value;
        document.getElementById("resultado").value = cnt + "9";
    }
    punto(){
        var cnt = document.getElementById("resultado").value;
        document.getElementById("resultado").value = cnt + ".";
    }
    suma(){
        var cnt = document.getElementById("resultado").value;
        document.getElementById("resultado").value = cnt + "+";
    }
    resta(){
        var cnt = document.getElementById("resultado").value;
        document.getElementById("resultado").value = cnt + "-";
    }
    producto(){
        var cnt = document.getElementById("resultado").value;
        document.getElementById("resultado").value = cnt + "*";
    }
    cociente(){
        var cnt = document.getElementById("resultado").value;
        document.getElementById("resultado").value = cnt + "/";
    }
    mrc(){
        document.getElementById("resultado").value = this.memory;
    }
    mm(){
        var cnt = document.getElementById("resultado").value;
        this.memory = parseInt(this.memory) - parseInt(cnt);
    }
    mM(){
        var cnt = document.getElementById("resultado").value;
        this.memory = parseInt(this.memory) + parseInt(cnt);
    }
    borrar(){
        document.getElementById("resultado").value = "";
    }
    calcular(){
        var res;
        res = document.getElementById("resultado").value;
        try{
            document.getElementById("resultado").value = eval(res);
        }catch(error){
            document.getElementById("resultado").value = "Error = "+ error;
        }
    }
    actualizaPantalla(){
        document.getElementById("pantalla").value = this.cnt;
    }
}
var calculadora = new CalculadoraBasica();