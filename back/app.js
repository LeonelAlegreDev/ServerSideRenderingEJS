const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const path = require('path');

//configuracion de la plantilla
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../front/views'));

//ruta Inicio
app.get('/', (req, res) => {
    res.render('index.ejs',{
       nombrePagina: 'Inicio' 
    });
});

//Ruta Servicios
app.get('/servicios', (req, res) => {
    res.render('servicios.ejs', {
        nombrePagina: 'Servicios'
    });
});

//levantar el servidor
app.listen(PORT, (req, res) => {
    console.log(`Servidor Activo en port: ${PORT}`);
});