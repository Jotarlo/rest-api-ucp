
const controller = require("../controllers/customer/customer.controller")
module.exports = (app) => {

    // POST
    app.post("/api/customer", (req, res, next) => {
        controller.createCustomer(req, res, next);
    });

    // GET
    app.get("/api/customer", (req, res, next) => {
        controller.getAllCustomers(req, res, next);
    });

    app.get("/api/customer/:document", (req, res, next) => {
        controller.getCustomerByDocument(req, res, next);
    });

    // UPDATE
    app.put("/api/customer", (req, res, next) => {
        controller.updateCustomer(req, res, next);
    });

    // DELETE
    app.delete("/api/customer", (req, res, next) => {
        controller.removeCustomer(req, res, next);
    });
};