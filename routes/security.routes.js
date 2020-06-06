
module.exports = (app) => {
    /** Login customer */
    app.post("/api/customer/login", (req, res, next) => {
        res.send("Login...");
    });

    /** Logout customer */
    app.post("/api/customer/logout", (req, res, next) => {
        res.send("Logout...");
    });
}