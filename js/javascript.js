function sumar(){
	var num1 = parseFloat(document.getElementById("num1").value);
	var num2 = parseFloat(document.getElementById("num2").value);

	if (validar(num1,num2)){
		var res = num1 + num2;
		alert("La suma es:" + res);
	}else{
		alert("La suma es :"+ res);
	}
}

function restar(){
	var num1 = parseFloat(document.getElementById("num1").value);
	var num2 = parseFloat(document.getElementById("num2").value);

	if (validar(num1,num2)){
		var res = num1 - num2;
		alert("La resta es:" + res);
	}else{
		alert("Formato incorrecto de numero!!");
	}
}


function multiplicar(){
	var num1 = parseFloat(document.getElementById("num1").value);
	var num2 = parseFloat(document.getElementById("num2").value);

	if (validar(num1,num2)){
		var res = num1 * num2;
		alert("La multiplicar es:" + res);
	}else{
		alert("Formato incorrecto de numero!!");
	}
}

function dividir(){
	var num1 = parseFloat(document.getElementById("num1").value);
	var num2 = parseFloat(document.getElementById("num2").value);

	if (validar(num1,num2)){
		var res = num1 / num2;
		if (res ==Infinity){

			alert("Division entre 0!!");
			document.getElementById("res").value="";
		}else{
			alert("La multiplicar es:" + res);
		}
	}else{
		alert("Formato Incorrecto de numero!!");
	}
}


function validar(num1,num2){
	if(isNaN(num1) || isNaN(num2)){
		return false;
	}else{
		return true;
	}
}

function hacertabla(){
	var tabla = "";
	var num = parseFloat(document.getElementById("num").value);

	if(isNaN(num) == false){
		tabla += 'Tabla del ' + num + '<br>';
		for(var i= 0;i<=10;i++){
			tabla += num + ' x ' + i + ' = ' + num * i +'<br>';
		}
		document.getElementById("tabla").innerHTML=tabla;
	}else{
		alert("Formato incorrecto de numero");
	}

}