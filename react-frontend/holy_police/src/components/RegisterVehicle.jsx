import React from "react";
import { Stack } from "@mui/system";
import { Box } from "@mui/material";

const RegisterVehicle = () => {
  const style = {
    height: "35px",
    marginBottom: "15px",
    width: "500px",
    display: "flex",
    padding: "5px",
    marginTop: "5px",
  };

  return (
    <Stack
      direction="column"
      mt={10}
      p={2}
      alignItems="center"
      justifyContent="center"
    >
      <h1>Register Your Vehicle</h1>
      <input type="text" placeholder="Full Name" style={style} />
      <input type="text" placeholder="Phone Number" style={style} />
      <input type="text" placeholder="Number Plate" style={style} />
      <a
        href="/success"
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
        SUBMIT
      </a>
    </Stack>
  );
};

export default RegisterVehicle;
