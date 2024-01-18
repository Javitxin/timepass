const express = require('express');
const router = express.Router();
const horaMiddlewares = require('../middlewares/horaMiddlewares');



router.get('/', (req, res) => {
    res.send(`
    <!DOCTYPE html>
    <html lang="es">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>TimePass</title>
        </head>
        <body>
            <h1>Bienvenidos</h1>
            <label>${req.dateType}</label>
            <a href="/finrouter"><button>Enviar</button></a>
            
    
        </body>
    </html>`);
});
module.exports = router;