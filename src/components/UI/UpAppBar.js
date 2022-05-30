import * as React from "react";
import { useNavigate } from "react-router-dom";
import { AppBar, Box, Toolbar, IconButton, Typography } from "@mui/material";
import LocalBarIcon from "@mui/icons-material/LocalBar";
import RandomBtn from "../Button/RandomBtn";
import SearchBtn from "../Button/SearchBtn";

const UpAppBar = () => {
  const nav = useNavigate();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <LocalBarIcon
              onClick={() => {
                nav("/");
              }}
            />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            Let's Drink
          </Typography>
          <RandomBtn />
          <SearchBtn />
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default UpAppBar;
