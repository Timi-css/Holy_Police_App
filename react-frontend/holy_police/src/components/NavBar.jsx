import React from "react";
import { Stack } from "@mui/system";
import { Link } from "react-router-dom";
import logo from "../utils/Holy_Police_Logo.png";

const NavBar = () => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      p={2}
      sx={{
        position: "sticky",
        background: "#A02064",
        top: 0,
        justifyContent: "space-between",
      }}
    >
      <Link
        to="/"
        style={{
          display: "flex",
          alignItems: "center",
          color: "#fff",
          textDecoration: "none",
        }}
      >
        Home
      </Link>
      <Link
        to="/vehicles"
        style={{
          display: "flex",
          alignItems: "center",
          color: "#fff",
          textDecoration: "none",
        }}
      >
        Vehicles
      </Link>
    </Stack>
  );
};

export default NavBar;
