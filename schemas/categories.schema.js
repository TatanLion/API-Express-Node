const Joi = require('joi')


const id = Joi.string().uuid()
const categorie = Joi.string().min(4).max(15)
const name = Joi.string().min(3).max(15)

const getCategoriSchema = Joi.object({
    id: id.required()
})

const createCategorieSchema = Joi.object({
    categorie: categorie.required(),
    name: name.required()
})

const updateCategorieSchema = Joi.object({
    categorie: categorie.required(),
    name: name.required()
})

const deleteCategorieSchema = Joi.object({
    id: id.required()
})

module.exports = { getCategoriSchema, createCategorieSchema, updateCategorieSchema, deleteCategorieSchema }