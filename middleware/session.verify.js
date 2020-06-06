module.exports = (req, res, next) => {
    let token = req.headers['access-token'];
    if (token) {
        if (token == "12345") {
            next();
        }else{
            res.status(400).json({
                m: "This token is not correct."
            });
        }
    } else {
        res.status(401).json({
            m: "Unauthorized"
        });
    }
}