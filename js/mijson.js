var mijson = [
  {
    "codigo": "001",
    "nombre": "calculo"
  },
  {
    "codigo": "002",
    "nombre": "fisica"
  },
  {
    "codigo": "003",
    "nombre": "algoritmo"
  }
];

console.table(mijson);

function leerjson(json){
	console.log("out");
	var out="";
	var i;
	for ( i = 0; i<json.length;i++) {
		alert("codigo: "+json[i].codigo+"-"+"Nombre: "+json[i].nombre);
	}
}

leerjson(mijson);