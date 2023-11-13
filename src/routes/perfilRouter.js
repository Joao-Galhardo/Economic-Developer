const express = require("express");
const router = express.Router();

router.get("/perfil",(req,res) => {
    res.render("perfil")
});

module.exports = router