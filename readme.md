# Middlewares

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