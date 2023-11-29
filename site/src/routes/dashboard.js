var express = require("express");
var router = express.Router();

var dashboardController = require("../controllers/dashboardController");


router.get("/listar/:idUsuario", function(req, res) {
    dashboardController.listar(req, res);
})

router.delete("/deletar/:idUsuario/:idMeta", function (req, res) {
    dashboardController.deletar(req, res);
});

router.put("/editar/:idUsuario/:idMeta", function (req, res) {
    dashboardController.atualizarValor(req, res);
});

router.post("/adicionarValor/:idUsuario/:idMeta", function (req, res) {
    dashboardController.adicionarValor(req, res);
});

router.get("/atualizarGrafico/:idUsuario", function (req,res) {
    dashboardController.atualizarGrafico(req,res);
});

router.get("/listarCertificado/:idUsuario", function(req, res) {
    dashboardController.listarCertificado(req,res);
});

module.exports = router;