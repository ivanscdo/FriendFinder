const   express    = require("express"),
        bodyParser = require("body-parser"),
        path       = require("path"),
        htmlRoutes = require("./app/routing/htmlRoutes");

const   app  = express(),
        PORT = 3000;


// // // module.exports object
// // // exports shorthand
app.get("/", htmlRoutes.home);
app.get("/survey", htmlRoutes.survey);
app.get("*", htmlRoutes.home);

// // // express.Router();
// app.use(htmlRoutes);


app.listen(PORT, function() {
        console.log("App listening on PORT: ", PORT);
});