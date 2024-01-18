const validarHora = (req, res, next) => {
    let aviso;
    console.log(typeof(req.hora));
    if (req.hora < 12 || req.hora >= 24) {
        // no pudes entrar
        aviso = `No puedes entrar, espera hasta las 12:00`;
        res.locals.aviso = aviso;
        req.aviso = aviso
        next();
    } else {
        aviso = `¡Bienvenido a la ruta final!`;
        res.locals.aviso = aviso
        req.aviso = aviso
    };
    next();

};
module.exports = validarHora;