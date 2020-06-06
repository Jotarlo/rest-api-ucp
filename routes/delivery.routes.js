
module.exports = (app) => {

    // POST
    app.post("/api/delivery/create", (req, res, next) => {
        res.send("Creating...");
    });

    // GET
    app.get("/api/delivery/getAll", (req, res, next) => {
        res.send("Getting all...");
    });

    app.get("/api/delivery/getByDocument/:document", (req, res, next) => {
        res.send("Getting by document...");
    });

    // UPDATE
    app.put("/api/delivery/update", (req, res, next) => {
        res.send("Updating...");
    });

    // DELETE
    app.delete("/api/delivery/delete", (req, res, next) => {
        res.send("Removing...");
    });
}