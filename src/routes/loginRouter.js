const express = require("express");
const router = express.Router();


router.get("/login", (req, res) => {
    res.render("siteInstitucional/login"); 
    console.log("Estou no caminho do login")
});

module.exports = router;