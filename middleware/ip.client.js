module.exports = (req, res, next) => {
    console.log(`The ip cliente is: ${req.connection.remoteAddress}`);
    next();
}