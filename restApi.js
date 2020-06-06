/** import packages */
const express = require("express");
const config = require("config");
const bodyParser = require("body-parser");

/** server configuration */
let bodyParserJSON = bodyParser.json();
let bodyParserUrlEncoded = bodyParser.urlencoded({ extended: true });
let app = express();
app.use(bodyParserJSON);
app.use(bodyParserUrlEncoded);

const ipFn = require("./middleware/ip.client")
app.use("*", ipFn);

const sessionValidator = require("./middleware/session.verify");
app.use(sessionValidator);

/** REST api methods for customer */

// welcome message
app.get("/", (req, res) => {
    res.send("Welcome to my express server.");
});

const customerRoutes = require("./routes/customer.routes");
customerRoutes(app);

const deliveryRoutes = require("./routes/delivery.routes");
deliveryRoutes(app);

const securityRoutes = require("./routes/security.routes");
securityRoutes(app);

/** Run server */
const port = config.get("port");
app.listen(port, () => {
    console.log(`Express server is running in port ${port}`);
});















