const express = require("express");
const { createproduct } = require("../controllers/productcontroller");

const router = express.Router();

router.post('/', createproduct);

module.exports = router;