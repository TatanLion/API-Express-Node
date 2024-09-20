const express = require('express');
const CategoriasService = require('../services/categories.service');

const validatorHandler = require('../middlewares/validator.handler')
const { getCategoriSchema, createCategorieSchema, updateCategorieSchema, deleteCategorieSchema } = require('../schemas/categories.schema')

const router = express.Router()

const service = new CategoriasService();

// Ruta principal
router.get('/', (req, res) => {
    const categories = service.find()
    res.json(categories)
})

// Recibir un elemento
router.get('/:id',
    validatorHandler(getCategoriSchema, 'params'),
    (req, res) => {
    const { id } = req.params
    const categories = service.findOne(id)
    res.json(categories)
})

router.post('/', 
    validatorHandler(createCategorieSchema, 'body'),
    (req, res) => {
    const body = req.body
    const categorie = service.create(body)
    res.json(categorie)
})

router.patch('/:id',
    validatorHandler(getCategoriSchema, 'params'),
    validatorHandler(updateCategorieSchema, 'body'),
    (req, res) => {
    const { id } = req.params
    const body = req.body
    const updateCategorie = service.update(id, body)
    res.json(updateCategorie)
})

router.delete('/:id', 
    validatorHandler(getCategoriSchema, 'params'),
    (req, res) => {
    const { id } = req.params
    const eliminatedCategorie = service.delete(id)
    res.json({
        message: 'Categorie Eliminated',
        id: eliminatedCategorie
    })
})

module.exports = router;