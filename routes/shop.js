// 66. Using Express Router(split middleware into a different files)

const express = require("express");
const router = express.Router();

const path = require("path");

router.get("/", (req, res, next) => {
    //console.log("middleware 2");

    // 70. Serving HTML Pages
    res.sendFile(path.join(__dirname, "../", "views", "shop.html"));
});

module.exports = router;