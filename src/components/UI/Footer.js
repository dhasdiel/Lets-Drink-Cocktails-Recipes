import React from "react";
import { Typography, Box, AppBar } from "@mui/material";

const Footer = () => {
  return (
    <AppBar
      position="fixed"
      color="primary"
      sx={{ top: "auto", bottom: 0, textAlign: "center" }}
    >
      <Box>
        <Typography
          variant="h6"
          component="a"
          color="text.primary"
          href="https://linktr.ee/Dhasdiel"
          sx={{ textDecoration: "none" }}
        >
          HDEV
        </Typography>
      </Box>
    </AppBar>
  );
};

export default Footer;
