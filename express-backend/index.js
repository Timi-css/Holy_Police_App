const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("./routes/user");
const vehicleRoute = require("./routes/vehicle");
const cors = require("cors");

app.use(cors());

dotenv.config();

mongoose
  .connect(process.env.MONGOURL)
  .then(() => {
    console.log("DB is connected");
  })
  .catch((err) => {
    console.log(err, "DB unreachable");
  });

app.get("/api/test", () => {
  console.log("Test is successful");
});

app.use(express.json());
app.use("/api/users", userRoute);
app.use("/api/vehicles", vehicleRoute);

app.get("/api", (req, res) => {
  res.json({ message: "Backend is now connected to react" });
});

app.listen(process.env.PORT || 5000, () => {
  console.log("Server is running...");
});
