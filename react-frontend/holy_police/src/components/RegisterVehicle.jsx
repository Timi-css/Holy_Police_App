import React from "react";
import { Stack } from "@mui/system";
import "./RegisterVehicle.css";

const RegisterVehicle = () => {
  // const style = {
  //

  //   "@media screen and (maxWidth: 390px)": {
  //     width: "200px",
  //   },
  // };

  return (
    <Stack
      direction="column"
      mt={10}
      p={2}
      alignItems="center"
      justifyContent="center"
    >
      <h1>Register Your Vehicle</h1>
      <input
        id="registration-form"
        type="text"
        placeholder="Full Name"
        // style={style}
      />
      <input
        id="registration-form"
        type="text"
        placeholder="Phone Number"
        // style={style}
      />
      <input
        id="registration-form"
        type="text"
        placeholder="Number Plate"
        // style={style}
      />
      <a
        href="/successpage"
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
