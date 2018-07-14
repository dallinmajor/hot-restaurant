var express = require("express");
var bodyParser = require("body-parser");

var app = express();

var PORT = process.env.PORT || 3307;

app.use(bodyParser.urlencoded({ extended: true}));

require(".routes/apiRoutes")(app);
require(".routes.htmlRoutes")(app);

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});