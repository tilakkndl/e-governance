const express = require('express');
const router = express.Router();

const {createSubsidy} = require("../controller/subsidyController")

router.route("/subsidy").post(createSubsidy)

module.exports = router;