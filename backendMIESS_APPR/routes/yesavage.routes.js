const express = require("express");
const router = express.Router();

const yesavage = require("../controllers/yesavage.controller");

router.get("/", yesavage.getYesavageTest);

router.post("/", yesavage.createYesavage);

router.get("/:id", yesavage.getYesavage);

module.exports = router;