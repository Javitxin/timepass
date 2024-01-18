const horaMiddlewares = (req, res, next) => {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const formattedTime = `${hours}:${minutes}:${seconds}`;
    req.dateType = `la hora actual e:${formattedTime}`;
    req.hora = now.getHours();
    next();
};
module.exports = horaMiddlewares;