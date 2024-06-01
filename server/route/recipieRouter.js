const express = require('express')
 
const {getRecipie, createRecipie} = require("./../controller/recipeController");

const router = express.Router()
router.post("/recipie/create", createRecipie)
router.post("/recipie/get", getRecipie);

module.exports = router;