const { echoRoute, httpRoute } = require("@knowdev/express");
const HTTP = require("@knowdev/http");

const express = require("express");

//
//
// Init
//

const app = express();

//
//
// Routing
//

// Return empty content for the site root
app.get("/", httpRoute(HTTP.CODE.NO_CONTENT));

// Echo routes
app.use("/echo", echoRoute);
app.use("/echo/*", echoRoute);

//
//
// Export
//

// API Gateway is listening and providing the request
// Express does not need to listen to a port
// app.listen(3000);
module.exports = app;
