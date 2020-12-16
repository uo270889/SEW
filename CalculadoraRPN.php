<?php
session_start();
class PilaRPN{
    protected $pila;
    public function __construct(){
        $this->pila = array(); 
    }
    public function push($val){
        array_unshift($this->pila,$val);
    }
    public function size(){
        return count($this->pila);
    }
    public function pop(){
        return array_shift($this->pila);
    }
    public function getElem(){
        $num = $this->size();
        $lon = $this->size();
        $str = "";
        for($i=0;$i<$lon;$i++){
            $fin = $num-- . ": ". $this->pila[$i]."\n";
            $str = $str . $fin;
        }
        return $str;
    }
    public function vacio(){
        $long = $this->size();
        for($i=0;$i<$long;$i++){
            $this->pop();
        }
    }
}
class CalculadoraRPN{
    protected $msg;
    protected $pila;
    protected $cad;
    public function __construct(){
        $this->msg = "";
        $this->cad = "";
        $this->pila = new PilaRPN();
    }
    public function getMsg(){
        return $this->msg;
    }
    public function pulsar($boton){
        $this->cad = $boton;
        $this->msg .= $this->cad; 
    }
    public function borrar(){
        $this->pila->vacio();
        $this->msg = "";
        $this->cad = "";
    }
    public function getPila(){
        return $this->pila->getElem();
    }
    public function enter(){
        if($this->cad!=""){
            $this->pila->push(floatval($this->msg));
            $this->msg = "";
            $this->cad = "";
        }
    }
    public function retroceso(){
        $this->msg = substr($this->msg,0,-1);
    }
    public function tan(){
        if($this->pila->size() >= 1){
            $poped = $this->pila->pop();
            $resul = tan(floatval($poped));
            $this->pila->push($resul);
        }
    }
    public function cos(){
        if($this->pila->size() >= 1){
            $poped = $this->pila->pop();
            $resul = cos(floatval($poped));
            $this->pila->push($resul);
        }
    }
    public function sin(){
        if($this->pila->size() >= 1){
            $poped = $this->pila->pop();
            $resul = sin(floatval($poped));
            $this->pila->push($resul);
        }
    }
    public function logaritmo(){
        if($this->pila->size() >= 1){
            $poped = $this->pila->pop();
            $resul = log10(floatval($poped));
            $this->pila->push($resul);
        }
    }
    public function ln(){
        if($this->pila->size() >= 1){
            $poped = $this->pila->pop();
            $resul = log(floatval($poped));
            $this->pila->push($resul);
        }
    }
    public function xc(){
        if($this->pila->size() >= 1){
            $poped = $this->pila->pop();
            $resul = pow($poped,2);
            $this->pila->push($resul);
        }
    }
    public function raiz(){
        if($this->pila->size() >= 1){
            $poped = $this->pila->pop();
            $resul = sqrt($poped);
            $this->pila->push($resul);
        }
    }
    public function dividir(){
        if($this->pila->size() >= 2){
            $poped1 = $this->pila->pop();
            $poped2 = $this->pila->pop();
            $resul = floatval ($poped2) / floatval ($poped1);
            $this->pila->push($resul);
        }
    }
    public function sumar(){
        if($this->pila->size() >= 2){
            $poped1 = $this->pila->pop();
            $poped2 = $this->pila->pop();
            $resul = floatval ($poped2) + floatval ($poped1);
            $this->pila->push($resul);
        }
    }
    public function multiplicar(){
        if($this->pila->size() >= 2){
            $poped1 = $this->pila->pop();
            $poped2 = $this->pila->pop();
            $resul = floatval ($poped2) * floatval ($poped1);
            $this->pila->push($resul);
        }
    }
    public function restar(){
        if($this->pila->size() >= 2){
            $poped1 = $this->pila->pop();
            $poped2 = $this->pila->pop();
            $resul = floatval ($poped2) - floatval ($poped1);
            $this->pila->push($resul);
        }
    }
}

if(!isset($_SESSION['calculadora'])){
    $_SESSION['calculadora'] = new CalculadoraRPN();   
}
$mB = $_SESSION['calculadora'];

if(count($_POST)>0){
    if(isset($_POST['cero'])){$mB->pulsar("0");} 
    if(isset($_POST['uno'])){$mB->pulsar("1");} 
    if(isset($_POST['dos'])){$mB->pulsar("2");} 
    if(isset($_POST['tres'])){$mB->pulsar("3");} 
    if(isset($_POST['cuatro'])){$mB->pulsar("4");} 
    if(isset($_POST['cinco'])){$mB->pulsar("5");} 
    if(isset($_POST['seis'])){$mB->pulsar("6");} 
    if(isset($_POST['siete'])){$mB->pulsar("7");} 
    if(isset($_POST['ocho'])){$mB->pulsar("8");} 
    if(isset($_POST['nueve'])){$mB->pulsar("9");} 
    if(isset($_POST['punto'])){$mB->pulsar(".");} 
    if(isset($_POST['mas'])){$mB->sumar();} 
    if(isset($_POST['menos'])){$mB->restar();} 
    if(isset($_POST['por'])){$mB->multiplicar();} 
    if(isset($_POST['entre'])){$mB->dividir();} 
    if(isset($_POST['borrar'])){$mB->borrar();} 
    if(isset($_POST['enter'])){$mB->enter();} 
    if(isset($_POST['sin'])){$mB->sin();} 
    if(isset($_POST['cos'])){$mB->cos();} 
    if(isset($_POST['tan'])){$mB->tan();} 
    if(isset($_POST['xc'])){$mB->xc();} 
    if(isset($_POST['raiz'])){$mB->raiz();} 
    if(isset($_POST['log'])){$mB->logaritmo();} 
    if(isset($_POST['quitar'])){$mB->quitar();} 
    if(isset($_POST['ln'])){$mB->ln();} 
    $_SESSION['calculadora'] = $mB;
    
}

echo"   <!DOCTYPE html>
        <html lang='es'>
            <head>
                <meta charset='UTF-8'>
                <meta name='author' content='Hugo Diaz Noriega UO270889'>
                <meta name='descripcion' content='Calculadora RPN'/>
                <meta name='viewport' content='width=device-width, initial-scale=1.0'>
                <title>Calculadora RPN</title>
                <link rel='stylesheet' type='text/css' href='CalculadoraRPN.css'/>             
            </head>
            <body>
                <h1>Calculadora RPN</h1>
                <form method='POST'>
                    <div>
                        <div id='res'>
                            <p disabled><textarea name='pila' class'pila' id='pila' readonly>".$mB->getPila()."</textarea></p>
                        </div>
                        <p disabled><input type='text' title='calculadora' id='calculadora' value='".$mB->getMsg()."' readonly></p>
                    </div>              
                    <p> 
                        <input type='submit' class='button' name='raiz' value='√'/>
                        <input type='submit' class='button' name='cos' value='Cos'/>
                        <input type='submit' class='button' name='tan' value='Tan'/>
                        <input type='submit' class='button' name='sin' value='Sin'/>
                        
                    </p>
                    <p> 
                        <input type='submit' class='button' name='log' value='Log'/>
                        <input type='submit' class='button' name='ln' value='Ln'/>
                        <input type='submit' class='button' name='quitar' value='Quitar'/>
                        <input type='submit' class='button' name='entre' value='/'/>
                    </p>
                    <p> 
                        <input type='submit' class='button' name='siete' value='7'/>
                        <input type='submit' class='button' name='ocho' value='8'/>
                        <input type='submit' class='button' name='nueve' value='9'/>
                        <input type='submit' class='button' name='por' value='*'/> 
                    </p>
                    <p> 
                        <input type='submit' class='button' name='cuatro' value='4'/>
                        <input type='submit' class='button' name='cinco' value='5'/>
                        <input type='submit' class='button' name='seis' value='6'/>
                        <input type='submit' class='button' name='menos' value='-'/>
                    </p>
                    <p> 
                        
                        <input type='submit' class='button' name='uno' value='1'/>
                        <input type='submit' class='button' name='dos' value='2'/>
                        <input type='submit' class='button' name='tres' value='3'/>
                        <input type='submit' class='button' name='mas' value='+'/>
                    </p>
                    <p>
                        <input type='submit' class='button' name='cero' value='0'/>
                        <input type='submit' class='button' name='punto' value='.'/>
                        <input type='submit' class='button' name='borrar' value='C'/>
                        <input type='submit' class='button' name='enter' value='Enter'/>
                    </p>
                </form>
            </body>
        </html>
    ";
?>