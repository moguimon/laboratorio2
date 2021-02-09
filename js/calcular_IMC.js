// Calcular IMC, dado un peso y una altura, se calcula 
// índice de masa corporal IMC con un cálculo
var result;
function calcular_IMC(){
	//var miboton=document.getElementById("boton");
	var mipeso=document.getElementById("peso").value; // selecciono donde se encuentra el peso
	var mialtura=document.getElementById("altura").value; // selecciono donde se encuentra la altura
	var	result=mipeso*10000/(mialtura*mialtura);// calculo el IMC
	var imc=result.toFixed(2);
	var estado1="";
	var estado2="";
	if (imc<=18.49) {
		estado1=" Bajo Peso";
		if (imc<16){
			estado2=" Delgadez Severa";
		}else if(imc<=16.99){
			estado2=" Delgadez Moderada";
		}else{
			estado2=" Delgadez Leve";
		}
	}else if (imc<=24.99){
		estado1=" Normal";
		estado2=" Peso Ideal";
	}else if (imc<=29.99){
		estado1=" Pre-obeso";
		estado2=" Sobrepeso";

	}else{ 
		estado1=" Obesidad"
		if (imc<=34.99){
			estado2=" Tipo I";
		}else if(imc<=39.99){
			estado2=" Tipo II"
		}else{
			estado2=" Tipo III";
		}
	}
	if (mipeso==""){
		alert("Por favor, introduzca un peso válido")
	}else if (mialtura==""){
		alert("Por favor, introduzca una altura válida")
	} else if ((imc>0)&&(imc<=2000)){
		document.getElementById("resultado").innerHTML="<div> El IMC es "+imc+" su estado es"+estado1+" y "+estado2+"</div>";
	}else{
		alert("Valor no permitidos.");
	}
}







//	alert (" Entro");
	
	//miboton.addEventListener("click",enviar,false);
	
//	document.miform.addEventListener("invalid",validar,true);
//	document.getElementById("calc").addEventListener("click",enviar,false);

	
//	alert (" Que hay de nuevo");
/*
function validar(e){
	var elemento=e.target;
	elemento.style.background="#FFDDDD";//rojo
}
function enviar(){
	var correcto=document.miform.checkValidity();
	if correcto {
		document.miform.submit();
	}
}
*/