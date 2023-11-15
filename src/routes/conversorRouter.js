const express = require("express");
const router = express.Router();


router.get("/conversor", (req, res) => {
    res.render("conversor"); 
    console.log("Estou no caminho do login")
});

module.exports = router;