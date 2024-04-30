// 66. Using Express Router(split middleware into a different files)

const express = require("express");
const router = express.Router();

const path = require("path");

// admin/add-product => GET
router.get("/add-product", (req, res, next) => {
    //console.log("middleware 1");

    // 70. Serving HTML Pages
    res.sendFile(path.join(__dirname, "../", "views", "add-product.html"));
});

// admin/add-product => POST
router.post("/add-product", (req, res, next) => { 
    console.log(req.body);
    res.redirect("/");
});

module.exports = router;