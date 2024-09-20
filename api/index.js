const express = require('express'); // Importamos express
const routerAPI = require('./routes'); // Importamos las rutas que hemos definido
const cors = require('cors'); // Importamos los cors para manejar las peticiones
const apiInfoHTML = require('./apiInfo'); // Importa el HTML

// Los middlewares de error deben definirse o llamarse antes del routing de la app
const { logErrors, errorHandler, boomErrorHandler } = require('./middlewares/error.handler')

const app = express();
const port = process.env.PORT || 3000;

// Middleware para recibir información
app.use(express.json())

// Middleware para manejar los cors, en caso de no pasarle nada indicamos que vamos a permitir todas las conexiones a la api
// app.use(cors())

const whiteList = ['http://localhost:5500', 'http://localhost:8000', 'https://midominio.com']
const options = {
    origin: (origin, callback) => {
        if(whiteList.includes(origin) || !origin){
            callback(null, true)
        }else{
            callback(new Error('No esta permitido'))
        }
    }
}
app.use(cors(options))

routerAPI(app)

// Ruta principal
// app.get('/api', (req, res) => {
//     res.send('Hello World From Express')
// })

app.get('/api', (req, res) => {
    res.send(apiInfoHTML);
  });

// Es importante el orden en que se llamen, en este caso el errorHandler no tiene un next por ende el logErrors no se ejecutaria y deben colocarse justo después de definir el routing
app.use(logErrors)
app.use(boomErrorHandler)
app.use(errorHandler)

// Port
app.listen(port, () => {
    console.log(`Mi port: ${port}`);
})

module.exports = app;