var express = require("express");
var router = express.Router();

var metasController = require("../controllers/metasController");

router.post("/inserir/:idUsuario", function (req, res) {
    metasController.inserir(req, res);
})




module.exports = router;