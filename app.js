// NodeJS Document
// Declaración de Variables
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

//Variable que hago utilizar body-parser para poder capturar los datos
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//Variable que señala donde esta ubicada la base de datos (mongodb://ipdelservidor/basededatosausar)
mongoose.connect("mongodb://localhost/desarmaduria");

//Definir el schema de nuestros productos
var productSchema = {
	title:String,
	year:Number,
	klms:Number,
	price:Number,
	description:String
};

var Product = mongoose.model("Product", productSchema);

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

//Recibe y procesa la informacion que recibire del formulario
app.post("/product",function(req,res){
	console.log(req.body);

	var data = {
		title=req.body.title,
		year=req.body.year,
		klms=req.body.klms,
		price=req.body.price,
		description=req.body.description
	}

	var product = new Product(data);

	product.save(function(err){
		console.log(product);
		res.render("index");
	});

	res.render("product/new");
});

//Referencia a una nueva vista dentro de otra carpeta
app.get("/product/new",function(req,res){
	//Menciono la pagina que yo quiero renderizar
	res.render("product/new");
	//Comando para finalizar solicitud de el navegador y nos permite enviar solo una cadena
	//res.end("Agregar Nueva Funcion");
});

app.listen(8080);