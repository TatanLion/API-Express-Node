const booom = require('@hapi/boom')

// De esta forma creamos un middleware de forma dinamica y usando clousures
function validatorHandler(schema, property){
    return (req, res, next) => {
        // Aqui nosotros no vamos a saber de donde viene la información ya sea de req.params, req.query o req.body por ende le pasamos este valor dinamicamente
        const data = req[property];

        // Esto nos retornara si tenemos un error
        const { error } = schema.validate(data, {abortEarly: false}) // El abort hace que nos envie todos los errores de una vez

        if(error){
            // Enviamos el error al middleware
            next(booom.badRequest(error))
        }
        next()
    }
}

module.exports = validatorHandler