// NodeJS Document
var express = require('express');
//var mongoose = require('mongoose');

var app = express();

//Hago referencia que el engine a utilizar sera Jade
app.set("view engine","jade");

//Asignacion de Carpeta para los asets
app.use(express.static("public"));

app.get("/",function(req,res){

	//Menciono la pagina que yo quiero renderizar
	res.render("index");
	//Comando para finalizar solicitud de el navegador y nos permite enviar solo una cadena
	//res.end("Hola Mundo");
});


app.listen(8080);