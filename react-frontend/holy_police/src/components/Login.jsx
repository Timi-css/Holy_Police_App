import React from "react";
import { Stack } from "@mui/system";

const Login = () => {
  return (
    <Stack
      direction="column"
      mt={10}
      p={2}
      alignItems="center"
      justifyContent="center"
    >
      <h1>Admin Login</h1>
      <input id="registration-form" type="text" placeholder="Username" />
      <input id="registration-form" placeholder="Password" type="password" />
      <a
        href="/vehiclelist"
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
        LOGIN
      </a>
    </Stack>
  );
};

export default Login;
