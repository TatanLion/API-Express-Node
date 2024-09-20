const express = require('express');

const productsRouter = require('./products.router');
const usersRouter = require('./users.router');
const categoriesRouter = require('./categories.router');

function routerAPI(app){

    // Modularizar por versiones los endpoints
    const routerV1 = express.Router()
    // Pasamos este router de manera general
    app.use('/api/v1', routerV1)
    // Pasamos este versionamiento a cada una de las rutas que nosotros manejamos
    routerV1.use('/products', productsRouter)
    routerV1.use('/users', usersRouter)
    routerV1.use('/categories', categoriesRouter)
}

module.exports = routerAPI;