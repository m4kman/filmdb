import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  useMediaQuery,
  Avatar,
  Button,
  Drawer,
  Box,
} from "@mui/material";
import {
  Menu,
  Brightness4,
  Brightness7,
  AccountCircle,
} from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { Sidebar, Search } from "../index";
import { fetchToken, createSessionID, tmdbApi } from "../../utils";
import { setUser, userSelector } from "../../features/auth";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width: 600px)");
  const theme = useTheme();
  const drawerWidth = 240;
  const token = localStorage.getItem("request_token");
  const session_id = localStorage.getItem("session_id");
  const dispatch = useDispatch();
  const { isAuthenticated, user } = useSelector(userSelector);

  useEffect(() => {
    const logIn = async () => {
      if (token) {
        if (session_id) {
          const { data: userData } = await tmdbApi.get(
            `/account?session_id=${session_id}`
          );
          dispatch(setUser(userData));
        } else {
          const new_session_id = await createSessionID();
          const { data: userData } = await tmdbApi.get(
            `/account?session_id=${new_session_id}`
          );
          dispatch(setUser(userData));
        }
      }
    };
    logIn();
  }, [token]);

  function toggleDrawer() {
    setMobileOpen((prevState) => !prevState);
  }

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
              onClick={toggleDrawer}
            >
              <Menu />
            </IconButton>
          )}
          <IconButton color="inherit" sx={{ ml: 1 }}>
            {theme.palette.mode === "dark" ? <Brightness7 /> : <Brightness4 />}
          </IconButton>
          {!isMobile && <Search />}
          <div>
            {!isAuthenticated ? (
              <Button color="inherit" onClick={fetchToken}>
                Login &nbsp; <AccountCircle />
              </Button>
            ) : (
              <Button
                color="inherit"
                component={Link}
                to={`/profile/${user.id}`}
                sx={{
                  "&:hover": {
                    color: "white !important",
                    textDecoration: "none",
                  },
                }}
              >
                {!isMobile && <>My Movies &nbsp;</>}
                <Avatar
                  sx={{ width: 30, height: 30 }}
                  alt="Profile picture"
                  src="https://image.pngaaa.com/303/1721303-middle.png"
                />
              </Button>
            )}
          </div>
          {isMobile && <Search />}
        </Toolbar>
      </AppBar>
      <div>
        <Box
          component="nav"
          sx={{
            [theme.breakpoints.up("sm")]: {
              width: drawerWidth,
              flexShrink: 0,
            },
          }}
        >
          {isMobile ? (
            <Drawer
              variant="temporary"
              anchor="right"
              open={mobileOpen}
              sx={{
                width: drawerWidth,
                "& .MuiDrawer-paper": {
                  width: drawerWidth,
                },
              }}
              ModalProps={{ keepMounted: true }}
              onClose={toggleDrawer}
            >
              <Sidebar />
            </Drawer>
          ) : (
            <Drawer
              sx={{
                width: drawerWidth,
                "& .MuiDrawer-paper": {
                  width: drawerWidth,
                },
              }}
              variant="permanent"
              open
            >
              <Sidebar />
            </Drawer>
          )}
        </Box>
      </div>
    </>
  );
}
