import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  useMediaQuery,
  Avatar,
  Button,
} from "@mui/material";
import {
  Menu,
  Brightness4,
  Brightness7,
  AccountCircle,
} from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";
import { display } from "@mui/system";
import { Link } from "react-router-dom";

export default function Navbar() {
  const isMobile = useMediaQuery("(max-width: 600px)");
  const theme = useTheme();
  const isAuthenticated = true;
  return (
    <>
      <AppBar position="sticky">
        <Toolbar
          sx={{
            height: "80px",
            display: "flex",
            justifyContent: "space-between",
            marginLeft: "240px",
            [theme.breakpoints.down("sm")]: {
              marginLeft: 0,
              flexWrap: "wrap",
            },
          }}
        >
          {isMobile && (
            <IconButton
              color="inherit"
              edge="start"
              sx={{
                outline: "none",
                marginRight: theme.spacing(2),
                [theme.breakpoints.up("sm")]: { display: "none" },
              }}
            >
              <Menu />
            </IconButton>
          )}
          <IconButton color="inherit" sx={{ ml: 1 }}>
            {theme.palette.mode === "dark" ? <Brightness7 /> : <Brightness4 />}
          </IconButton>
          {!isMobile && "Search.."}
          <div>
            {!isAuthenticated ? (
              <Button color="inherit">
                Login &nbsp; <AccountCircle />
              </Button>
            ) : (
              <Button color="inherit" component={Link} to="/profile/:id">
                {!isMobile && <>My Movies &nbsp;</>}
                <Avatar
                  sx={{ width: 30, height: 30 }}
                  alt="Profile picture"
                  src="https://image.pngaaa.com/303/1721303-middle.png"
                />
              </Button>
            )}
          </div>
          {isMobile && "Search.."}
        </Toolbar>
      </AppBar>
    </>
  );
}
