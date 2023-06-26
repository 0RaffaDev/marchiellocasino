window.onload=inicio; 
var credito=Math.floor(Math.random()*4)+9;
var imagenes= ["tigre_slot.png"];
var premios= [3,2,3,2,2,3,6];
var numeros_actuales=[];

function inicio(){
    document.getElementById("tirar").onclick=lanzar();
}
 
function escoger_numero(){

    var azar=Math.floor(Math.random()*imagenes.length);
    return azar;    
}

function lanzar(){
    numeros_actuales=[];
    for (let k=0; k<document.getElementsByClassName("boton").length;k++){
    numeros_actuales.push(escoger_numero());
    mostrar_imagen(k,numeros_actuales[k])
    
    }
    alert(numeros_actuales);

}
function mostrar_imagen(num,im){
document.getElementsByClassName("imagen")[num, im].getElementsByTagName("img")[0].src="tigre_slot.png";

}

function comparar(){

}   

function actualizar(){

}

function mostrar_mensaje(){

}

function cerrar(){

}

function sonar(){

}



