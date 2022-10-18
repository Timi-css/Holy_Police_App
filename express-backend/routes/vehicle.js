const Vehicle = require("../model/Vehicle");
const router = require("express").Router();

// CREATE
router.post("/", async (req, res) => {
  const newVehicle = new Vehicle({
    FullName: req.body.FullName,
    Phone: req.body.Phone,
    NumberPlate: req.body.NumberPlate,
  });

  try {
    const savedVehicle = await newVehicle.save();
    res.status(200).json(savedVehicle);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
