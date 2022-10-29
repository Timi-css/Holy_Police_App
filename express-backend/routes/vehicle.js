const Vehicle = require("../model/Vehicle");
const router = require("express").Router();
const dotenv = require("dotenv").config();
const accountSid = process.env.ACCOUNT_SID;
const authToken = process.env.AUTH_TOKEN;
const client = require("twilio")(accountSid, authToken);

// REGISTER
router.post("/registers", async (req, res) => {
  const { FullName, Phone, NumberPlate } = req.body;

  try {
    const oldInfo = await Vehicle.findOne({ NumberPlate });

    if (oldInfo) {
      return res.json({ error: "Number Plate already exists" });
    }
    Vehicle.create({
      FullName,
      Phone,
      NumberPlate,
    });
    res.send({ status: "ok" });
  } catch (error) {
    res.send({ status: "Error registering vehicle, please try again" });
  }
});

router.post("/sms", (req, res) => {
  client.messages
    .create({
      body: "Hello",
      from: process.env.FROM_NUMBER,
      to: Phone,
    })
    .then((message) => {
      console.log(message.status);
      res.send(message.status);
    })
    .done();
});

module.exports = router;
