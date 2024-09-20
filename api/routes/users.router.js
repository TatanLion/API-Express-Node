const express = require('express')

const router = express.Router()

// Query Params
router.get('/', (req, res) => {
    const { limit, offset } = req.query // Estos parametros son opcionales
    if(limit && offset){
        res.json({
            limit, 
            offset
        })
    }else{
        res.send('No hay parametros por defecto')
    }
})

module.exports = router;