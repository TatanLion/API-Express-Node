const express = require('express');

const ProductService = require('../services/product.service')
const validatorHandler = require('../middlewares/validator.handler')
const { createProductSchema, updateProductSchema, getProductSchema } = require('../schemas/product.schema')

const router = express.Router()
const service = new ProductService();


// NOTE GET
// Las rutas que sean especificas deben ir antes de las dinamicas
// Ruta productos
router.get('/', async (req, res) => {
    const products = await service.find();    
    res.json(products)
})
// Ruta productos
router.get('/filter', (req, res) => {
    res.send('Esto es un filtro')
})

// Recibir 1 parametro, este es un middleware porque tiene el next en los parametros y además de eso podemos seguir concatenando middlewares
router.get('/:id',
    validatorHandler(getProductSchema, 'params'), // Middleware para validar los parametros que le estoy enviando
    async (req, res, next) => {
    try{
        const { id } = req.params;
        const product = await service.findOne(id)
        res.json(product)
    }catch(err){
        next(err)
    }
})

// NOTE POST
router.post('/', 
    validatorHandler(createProductSchema, 'body'), // Validamos el arreglo que se envio para crearlo
    async (req, res) => {
    const body = req.body // Aqui podemos hacer { } pero necesitamos toda la información
    const product = await service.create(body)
    res.status(201).json(product)
})

// NOTE PATCH
router.patch('/:id', 
    validatorHandler(getProductSchema, 'params'), // Middleware para validar los parametros que le estoy enviando
    validatorHandler(updateProductSchema, 'body'), // Validamos el arreglo que se envio para crearlo
    async (req, res, next) => {
    try{
        const { id } = req.params
        const body = req.body
        const product = await service.update(id, body)
        res.json(product)
    }catch(err){
        next(err)
    }
})

// NOTE DELETE
router.delete('/:id', 
    validatorHandler(getProductSchema, 'params'), // Middleware para validar los parametros que le estoy enviando
    async (req, res) => {
    const { id } = req.params
    const products = await service.delete(id)
    res.json(products)
})

// Exportamos el router
module.exports = router;