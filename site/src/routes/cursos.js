var express = require("express");
var router = express.Router();

var cursosController = require("../controllers/cursosController");

router.post("/inserirCertificado/:idUsuario/", function (req, res) {
    cursosController.inserirCertificado(req, res);
});


module.exports = router;