const   express    = require("express"),
        bodyParser = require("body-parser"),
        path       = require("path");

const   htmlRoutes = require("./app/routing/htmlRoutes"),
        apiRoutes  = require("./app/routing/apiRoutes");

const   app  = express();
let     PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended: true }));
app.use(bodyParser.json());

app.use(apiRoutes);
app.use(htmlRoutes);

app.listen(PORT, function() {
        console.log("App listening on PORT: ", PORT);
});