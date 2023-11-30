import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import { NavLink as RouterLink, matchPath, useLocation } from "react-router-dom";
import { Box, Toolbar, Hidden, IconButton, Fab, AppBar, Container, Zoom, Divider } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import { MAXWIDTH, PUBLIC_URL } from "../../../constants";

const useStyles = makeStyles((theme) => ({
  logoImage: {
    height: "auto",
    width: "100%",
    maxWidth: "120px",
  },
  menuItem: {
    textAlign: "center",
    fontSize: "14px",
    margin: "0px 16px",
    position: "relative",
    cursor: "pointer",
    textDecoration: "none",
  },
}));

const Topbar = ({ items, handleSidebar, handleDialog }) => {
  const classes = useStyles();
  const { pathname, hash } = useLocation();

  const trigger = useScrollTrigger({ disableHysteresis: true, threshold: 100 });

  const scrollTrigger = useScrollTrigger({ disableHysteresis: true, threshold: 300 });

  const match = (path) => (path ? !!matchPath(`${pathname}${hash}`, path) : false);

  const handleScrolltoTop = () => {
    const anchor = document.querySelector("#back-to-top-anchor");

    if (anchor) {
      anchor.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  };

  return (
    <>
      <Box>
        <AppBar elevation={trigger ? 1 : 0} position={trigger ? "fixed" : "static"} color="inherit" sx={{ transition: "top 0.5s ease", top: trigger ? 0 : -50, p: 1.5 }}>
          <Container maxWidth={false} disableGutters sx={{ maxWidth: MAXWIDTH }}>
            <Toolbar disableGutters sx={{ position: "relative", display: "flex", justifyContent: "space-between" }}>
              <Box py={1}>
                <a href="/" title="SCIMICS">
                  <img className={classes.logoImage} src={`${PUBLIC_URL}/static/icons/logo.svg`} alt="logo" />
                </a>
              </Box>

              <Hidden mdDown>
                <Box display="flex" alignItems="center">
                  {items.map((item, index) => (
                    <Box key={index} sx={{ display: "flex", alignItems: "center" }}>
                      <Box
                        className={classes.menuItem}
                        component={!item.isDialog ? RouterLink : item.target ? "a" : "div"}
                        {...(item.target && { href: item.link, target: "_blank" })}
                        to={item.link}
                        onClick={() => handleDialog(item)}
                        sx={{
                          color: match(item.link) ? "primary.main" : "text.primary",
                          "&:hover": {
                            color: "primary.main",
                          },
                        }}
                      >
                        {item.title}
                      </Box>
                    </Box>
                  ))}
                </Box>
              </Hidden>

              <Hidden mdUp>
                <IconButton onClick={handleSidebar} aria-label="Menu">
                  <MenuIcon />
                </IconButton>
              </Hidden>
            </Toolbar>

            {!trigger && <Divider />}
          </Container>
        </AppBar>
      </Box>

      <Box id="back-to-top-anchor" />

      <Zoom in={scrollTrigger}>
        <Box sx={{ position: "fixed", bottom: 20, right: 20, zIndex: "50" }}>
          <Fab size="medium" color="secondary" onClick={handleScrolltoTop} aria-label="scroll back to top">
            <KeyboardArrowUpIcon />
          </Fab>
        </Box>
      </Zoom>
    </>
  );
};

export default Topbar;
