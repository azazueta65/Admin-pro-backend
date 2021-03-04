require('dotenv').config();

const express = require('express');
const { dbConnection } = require('./database/config')
const cors = require('cors');

//Crear el servidor de express
const app = express();

//Configurar CORS
app.use(cors());

//Lectura y parseo del body
app.use( express.json() );

//Base de datos
dbConnection();

//mean_user
//Hxv6UJft8aPjqkhS

app.use( '/api/usuarios', require('./routes/usuarios') );
app.use( '/api/login', require('./routes/auth') );

//Rutas

app.listen( process.env.PORT, () => {
    console.log('Servidor corriendo en puerto ' + process.env.PORT);
});