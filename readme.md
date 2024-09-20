# STORE PRODUCTS API

Desarrollo de una API REST utilizando Express y Node.js, que simula la gestión de productos y categorías, permitiendo realizar operaciones como GET, POST, PATCH y DELETE. La API está desplegada en Vercel, ofreciendo un entorno escalable y de fácil acceso.

## Comenzando 🚀

_Estas instrucciones te permitirán obtener una copia del proyecto en funcionamiento en tu máquina local para propósitos de desarrollo y pruebas._

Mira **[Deployment](https://api-express-node.vercel.app/api//)** para conocer como desplegar el proyecto.


### Pre-requisitos 📋

_Realizar un git clone del proyecto_

_Para HTTPS_
```
https://github.com/TatanLion/API-Express-Node.git
```

### Instalación 🔧

_Se sugiere la instalación de [Git](https://git-scm.com/) y un editor de código de preferencia, en mi caso uso [VsCode](https://code.visualstudio.com/) para poder manipular y observar el proyecto_

## Construido con 🛠️


* Express [](https://expressjs.com/es/)
* Faker JS [](https://v9.fakerjs.dev/)
* Hapi Boom [](https://hapi.dev/module/boom/)
* Joi [](https://joi.dev/)

## Contribuyendo 🖇️

Por favor lee el [CONTRIBUTING.md](https://github.com/TatanLion/API-Express-Node) para detalles de nuestro código de conducta, y el proceso para enviarnos pull requests.

## Autores ✒️

* **Jonathan Amaya** - *Ing Sistemas - Desarrollador Web* - [TatanLion](https://github.com/TatanLion)

## Expresiones de Gratitud 🎁

* Comenta a otros sobre este proyecto 📢
* Invita una cerveza 🍺 o un café ☕ a alguien del equipo. 
* Da las gracias públicamente 🤓.
* etc.

---
⌨️ con ❤️ por [TatanLion](https://github.com/TatanLion) 😊

## Notas
## Middlewares

Un middleware es un bloque de código que se ejecuta entre la petición que hace el usuario (request) hasta que la petición llega al servidor.

Un ejemplo de código en donde se ve su aplicación.

Algunos casos de uso:

- Funcionar como pipes, es decir, conectar unos con otros al igual que una tubería donde la salida de uno, es la entrada de información del otro.
- Validar datos.
- Capturar errores.
- Validar permisos.
- Controlar accesos.

```
function (req, res, next){
    if(something){
        res.send('End')
    }else{
        next()
    }
}
```

Usamos como parametro el next() en caso si vamos a encadenar otros middlewares, y si no queremos encadenar otros middleware enviamos res con lo que deseemos.

## Middlewares de Error

Estos son first error, por ende, tenemos que pasar los 4 parametros para capturarlos.

```
function (err, req, res, next){
    if(err){
        res.status(500).json({error})
    }else{
        next()
    }
}
```

Este lo podemos usar de forma global buscando capturar todos los errores de la aplicación en caso de que ocurra un error y en caso de que no, usamos el next() para seguir con la ejecución del código.