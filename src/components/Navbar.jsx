import React, { useState } from "react";
import { Button, Stack } from "@mui/material";
import { Login } from "./Login";

export const Navbar = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <nav className="nav">
        <Button
          onClick={() => {
            setShow(!show);
          }}
          sx={{ m: 2 }}
          variant="contained"
        >
          Login
        </Button>
        <Button sx={{ m: 2 }} variant="outlined">
          Logout
        </Button>
      </nav>
      {show ? <Login /> : ""}
    </>
  );
};
