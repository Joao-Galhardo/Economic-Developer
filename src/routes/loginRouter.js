const express = require("express");
const router = express.Router();


router.get("/login", (req, res) => {
    res.render("siteInstitucional/login"); 
    console.log("Estou no caminho do login")
});

router.post("/cadastrar", function (req, res) {
    loginController.cadastrar(req, res);
})

module.exports = router;