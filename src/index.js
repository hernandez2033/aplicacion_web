//importamos el framework express
const express = require('express');
const path = require('path');
//inicializacion 
const app = express();
//settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'vistas')); //redireccionas la carpeta views por defecto a vistas
app.set('view engine', 'ejs');
//middlewares
app.use(express.urlencoded({extended: false}));
app.use(express.json());
//routes o rutas
app.use(require('./rutas/index'));
//start the server
app.listen(app.get('port'), () =>{
    console.log("server on port ", app.get('port'))
});