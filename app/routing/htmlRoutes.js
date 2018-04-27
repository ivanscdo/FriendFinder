// // // module.exports object
// module.exports = {
//     home : function(req, res) {
//         res.send("this is the homepage");
//     }, 
//     survey: function(req, res) {
//         res.send("this is the survey");
//     }
// }

// // // exports shorthand
// exports.home = function(req, res) {
//         res.send("this is the homepage");
//     };
// exports.survey = function(req, res) {
//         res.send("this is the survey");
//     };


// // express.Router();
var express = require("express");
var router = express.Router();
var path = require("path");

router.get("/", (req, res) => {
    // res.send("homepage");
    res.sendFile(path.join(__dirname, "../public/home.html"));
});

router.get("/survey", (req, res) => {
    // res.send("survey");
    res.sendFile(path.join(__dirname, "../public/survey.html"))
});

router.get("*", (req, res) => {
    // res.send("homepage");
    res.redirect("/");
});

module.exports = router;
