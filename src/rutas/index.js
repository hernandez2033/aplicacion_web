const { Router } = require("express")

const { Router } = require('express');
const router = new Router();

let alumnos = [];//creamos un arrays con el nombre alumnos

router.get('/', (req,res) =>{
        res.render('index', {alumnos});
    });

    //usamos el metodo get  de http
    router.get('/registro-form', (req, res) => {
        res.render('registro-form');
    });

    //metodo post o incertar 
    router.post('/registro-form', (req, res) => {
        let {nombre, documento} = req.body;
        let nuevoRegistro = {nombre, documento, fecha: new Date()};
        alumnos.push(nuevoRegistro);
        res.redirect('/');
    });
    module.exports = router;