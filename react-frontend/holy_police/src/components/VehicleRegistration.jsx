import React from "react";
import Button from "@mui/material/Button";
import { Stack } from "@mui/system";
import { Link } from "react-router-dom";
import logo from "../utils/Holy_Police_Logo.png";

const VehicleRegistration = () => {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Stack
        direction="column"
        alignItems="center"
        justifyContent="center"
        p={2}
        sx={{
          position: "sticky",

          top: 0,
          justifyContent: "space-between",
        }}
      >
        <Link style={{ padding: "45px" }}>
          <img src={logo} alt="logo" height={300} />
        </Link>

        <a
          href="/vehicles"
          style={{
            backgroundColor: "#A02064",
            color: "#fff",
            textDecoration: "none",
            padding: "15px",
            marginTop: "20px",
            fontWeight: "700",
            borderRadius: "5px",
          }}
        >
          REGISTER YOU VEHICLE
        </a>
      </Stack>
    </div>
  );
};

export default VehicleRegistration;
