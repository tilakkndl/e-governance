const express = require("express")

const {createCrop, getAllCrops} = require("../controller/cropController")

const router = express.Router()
router.post("/crop", createCrop);
router.get("/crop", getAllCrops)

module.exports = router

