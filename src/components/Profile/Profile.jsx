import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { ExitToApp } from "@mui/icons-material";

export default function Profile() {
  function logout() {
    localStorage.clear();

    window.location.href = "/";
  }

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Typography variant="h4">My Profile</Typography>
      <Button color="inherit" onClick={logout}>
        Logout &nbsp; <ExitToApp />
      </Button>
    </Box>
  );
}
