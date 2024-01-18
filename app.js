const express = require('express');
const app = express();
const horaMiddlewares = require('./middlewares/horaMiddlewares');
const endRoute = require('./routes/endRoute');
const index = require('./routes/index');

app.use(horaMiddlewares);

app.use('/', index);
app.use('/findrouter', endRoute);

app.use((req, res, next) => {
    res.status(404).send(`<h1>La pagina no existe</h1`)
});

app.listen(3000, () => {
    console.log('El servidor está escuchando en el puerto 3000');
});