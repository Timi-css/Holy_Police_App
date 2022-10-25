const Vehicle = require("../model/Vehicle");
const router = require("express").Router();

// REGISTER
router.post("/register", async (req, res) => {
  const { FullName, Phone, NumberPlate } = req.body;
  try {
    const oldInfo = await Vehicle.findOne({ NumberPlate });

    if (oldInfo) {
      return res.json({ error: "Number Plate already exists" });
    }
    await Vehicle.create({
      FullName,
      Phone,
      NumberPlate,
    });
    res.send({ status: "ok" });
  } catch (error) {
    res.send({ status: "User exits" });
  }
});

module.exports = router;
