var express = require("express");
var router = express.Router();

var dashboardController = require("../controllers/dashboardController");

router.post("/investir", function (req, res) {
    dashboardController.investir(req, res);
})

router.get("/listar", function(req, res) {
    dashboardController.listar(req, res);
})

module.exports = router;