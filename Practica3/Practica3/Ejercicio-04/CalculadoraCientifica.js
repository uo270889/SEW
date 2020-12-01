"use strict";
class ClaculadoraCientifica extends CalculadoraBasica{
    constructor(){
        super();
    }
    mc(){
        this.memory = "";
    }
    ms(){
        var cnt = document.getElementById("resultado").value;
        this.memory = parseInt(cnt);
    }
    pi(){
        var cnt = document.getElementById("resultado").value;
        document.getElementById("resultado").value = cnt + Math.PI;
    }
    exp(){
        var cnt = document.getElementById("resultado").value;
        if (cnt.includes("*")){
            document.getElementById("resultado").value = cnt + " 10^";

        } else {
            document.getElementById("resultado").value = cnt + " *10^";
        }
    }
    parentesisA(){
        var cnt = document.getElementById("resultado").value;
        document.getElementById("resultado").value = cnt + "(";
    }
    parentesisC(){
        var cnt = document.getElementById("resultado").value;
        document.getElementById("resultado").value = cnt + ")";
    }
    sin(){
        var cnt = document.getElementById("resultado").value;     
        try{
            document.getElementById("resultado").value = Math.sin(cnt);
        }catch(error){
            document.getElementById("resultado").value = "Error= "+ error;
        }
    }
    cos(){
        var cnt = document.getElementById("resultado").value;
        try{
            document.getElementById("resultado").value = Math.cos(cnt);
        }catch(error){
            document.getElementById("resultado").value = "Error= "+ error;
        }
    }
    tan(){
        var cnt = document.getElementById("resultado").value;
        try{
            document.getElementById("resultado").value = Math.tan(cnt);
        }catch(error){
            document.getElementById("resultado").value = "Error= "+ error;
        }
    }
    xc(){
        var cnt = document.getElementById("resultado").value;
        try{
            document.getElementById("resultado").value = Math.pow(cnt,2);
        }catch(error){
            document.getElementById("resultado").value = "Error= "+ error;
        }       
    }
    xy(){
        var cnt = document.getElementById("resultado").value;
        document.getElementById("resultado").value = cnt+"^"; 
    }
    diezx(){        
        var cnt = document.getElementById("resultado").value;
        try{
            document.getElementById("resultado").value = Math.pow(10,cnt);
        }catch(error){
            document.getElementById("resultado").value = "Error= "+ error;
        }  
    }
    raiz(){        
        var cnt = document.getElementById("resultado").value;
        try{
            document.getElementById("resultado").value = Math.sqrt(cnt);
        }catch(error){
            document.getElementById("resultado").value = "Error= "+ error;
        }    
    }
    log(){        
        var cnt = document.getElementById("resultado").value;
        try{
            document.getElementById("resultado").value = Math.log(cnt);
        }catch(error){
            document.getElementById("resultado").value = "Error= "+ error;
        }    
    }
    hyp(){
        var cnt = document.getElementById("resultado").value;
        document.getElementById("resultado").value = (Math.pow((Math.e),cnt)-Math.pow((Math.e),-cnt))/2;
    }
    factorial(){
        var cnt = document.getElementById("resultado").value;
        var sum = 1;
        if(cnt==0 || cnt==1){
            document.getElementById("resultado").value = sum; 
        }else{
            for(var i=1; i<=cnt; i++){
                sum *= i;
            }
            document.getElementById("resultado").value = sum;
        }
    }
    mod(){
        var cnt = document.getElementById("resultado").value;
        document.getElementById("resultado").value = cnt + "%";
    }
    masmenos(){
        if ("+" == document.getElementById("resultado").value.substring(0, 1)) {
            document.getElementById("resultado").value = "-" + document.getElementById("resultado").value.substring(1, document.getElementById("resultado").value.length);
        } else if ("-" == document.getElementById("resultado").value.substring(0, 1)) {
            document.getElementById("resultado").value = "+" + document.getElementById("resultado").value.substring(1, document.getElementById("resultado").value.length);
        } else {
            document.getElementById("resultado").value = "+" + document.getElementById("resultado").value.substring(0, document.getElementById("resultado").value.length);
        } 
    }
    quitar(){
        var cnt = document.getElementById("resultado").value;
        document.getElementById("resultado").value = cnt.substr(0,cnt.length-1);
    }
    flecha(){
        var cnt = document.getElementById("resultado").value;
        try{
            document.getElementById("resultado").value = eval(1/cnt);
        }catch(error){
            document.getElementById("resultado").value = "Error= error";
        }
    }
   
    
}
var calculadora = new ClaculadoraCientifica();