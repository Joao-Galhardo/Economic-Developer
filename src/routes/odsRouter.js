const express = require("express");
const router = express.Router();

router.get("/ods",(req,res) => {
    res.render("siteInstitucional/ods")
})

module.exports = router