var express = require("express");
var router = express.Router();

var dashboardController = require("../controllers/dashboardController");


router.get("/listar/:idUsuario", function(req, res) {
    dashboardController.listar(req, res);
})

router.delete("/deletar/:idUsuario/:idMeta", function (req, res) {
    dashboardController.deletar(req, res);
});

router.put("/editar/:idMeta", function (req, res) {
    dashboardController.atualizarValor(req, res);
});

router.post("/adicionarValor/:idUsuario/:idMeta", function (req, res) {
    dashboardController.adicionarValor(req, res);
});

module.exports = router;