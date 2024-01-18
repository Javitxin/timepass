const express = require('express');
const router = express.Router();
const validarHora = require('../middlewares/validarHora');

router.get('/', validarHora, (req, res) => {
    res.send(`
    <!DOCTYPE html>
    <html lang="es">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>TimePass</title>
        </head>
        <body>
            <h1>Ruta Final</h1>
           <p>${aviso}</p> 
        </body>
    </html>
    `);
});
module.exports = router;