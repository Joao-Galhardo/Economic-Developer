const express = require("express");
const router = express.Router();

router.get("/",(req,res) => {
    res.render("/siteInstitucional/ods")
})

module.exports = router