var estudiantes =[
{
	"Codigo":"001","nombre":"Leo"
},{
	"Codigo":"002","nombre":"Pedro"
},{
	"Codigo":"003","nombre":"ana"
}
];

function mifuncion(json){
	var i;
	for(i=0;i<json.length;i++){
		alert("Codigo: "+json[i].Codigo+" - Nombre:" + json[i].nombre);
	}

} 

mifuncion(estudiantes);