var express = require("express");
var router = express.Router();

var dashboardController = require("../controllers/dashboardController");

router.post("/investir/:idUsuario", function (req, res) {
    dashboardController.investir(req, res);
})

router.get("/listar/:idUsuario", function(req, res) {
    dashboardController.listar(req, res);
})

router.delete("/deletar/:idUsuario", function (req, res) {
    dashboardController.deletar(req, res);
});

module.exports = router;