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
exports.home = function(req, res) {
        res.send("this is the homepage");
    };
exports.survey = function(req, res) {
        res.send("this is the survey");
    };


// // // express.Router();
// var express = require("express");
// var router = express.Router();

// router.get("/", (req, res) => {
//     res.send("homepage");
// });

// router.get("/survey", (req, res) => {
//     res.send("survey");
// });

// router.get("*", (req, res) => {
//     // res.send("homepage");
//     res.redirect("/");
// });

// module.exports = router;
