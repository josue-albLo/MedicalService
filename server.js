const express = require('express');
const cors = require('cors');
const routerExpediente = require('./routes/routExpediente')
const viewsRoutes = require('./routes/viewRouts')
const bodyParser = require('body-parser');


const app = express();
const port = 3000;

// Configuracion de cors
app.use(cors());

// Configuracion de body-parser
app.use(bodyParser.json());

// Configuracion de archivos estaticos
app.use('/static', express.static(__dirname + '/public'));

// Configuracion de express
app.use(express.json());

// Motor de plantillas y mis vistas
app.set('views', './views')
app.set('view engine', 'pug')

// Ruta raiz
app.get('/', function (req, res) {
    res.render('index', { name: 'Hola hospital desde pug' })
});

// Configuracion de rutas para vistas
app.use('/app', viewsRoutes.viewsRoutes)

// Configuracion de rutas para expediente
app.use('/hospital', routerExpediente.routerExpediente);
app.listen(port, () => {
    console.log(`Servidor is running on http://localhost:${port}`)
    console.log('Visitar http://localhost:3000/hospital')
    console.log('Visitar http://localhost:3000/app')
})