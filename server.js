const   express    = require("express"),
        bodyParser = require("body-parser"),
        path       = require("path"),
        htmlRoutes = require("./app/routing/htmlRoutes");

const   app  = express(),
        PORT = 3000;

// console.log(htmlRoutes.test);
// app.get(htmlRoutes.test);
// app.get("/", function(req, res) {
//         res.send("red wine, success!");
// })
// console.log(htmlRoutes.test);
// htmlRoutes.test;

// app.get(htmlRoutes.test);

// console.log(htmlRoutes.home);
// app.get(htmlRoutes.home);
// console.log(htmlRoutes.home);



// app.get("/*", htmlRoutes.home);
app.get("/", htmlRoutes.home);
// app.get(/survey/, htmlRoutes.survey);
app.get("/survey", htmlRoutes.survey);
app.get("*", htmlRoutes.home);



// for use with router
// test 1
// app.use("/",  htmlRoutes);
// test 2
// app.use(htmlRoutes);


app.listen(PORT, function() {
        console.log("App listening on PORT: ", PORT);
});