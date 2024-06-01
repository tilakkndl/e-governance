const express = require("express");

const {getNotifyingDate, createNotifyingDate, testSendingEmail} = require("./../controller/notifyController")

const {login, protect} = require("./../controller/authController")
const {addStartingDate} =require("./../controller/startingDateController")

const router = express.Router()

router.get("/notify", getNotifyingDate);
router.post("/notify", createNotifyingDate)
router.post("/notify/mail", testSendingEmail)

module.exports = router;
