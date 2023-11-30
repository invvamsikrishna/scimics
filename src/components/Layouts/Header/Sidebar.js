import React from "react";
import { makeStyles } from "@mui/styles";
import { NavLink as RouterLink } from "react-router-dom";
import { List, ListItem, ListItemText, ListItemButton, Drawer, IconButton, ButtonBase } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: "100%",
    maxWidth: 350,
  },
}));

const Sidebar = ({ open, items, handleSidebar, handleDialog }) => {
  const classes = useStyles();

  const handleClick = (item) => {
    handleDialog(item);
    handleSidebar();
  };

  return (
    <Drawer anchor="left" classes={{ paper: classes.drawer }} onClose={handleSidebar} open={open} variant="temporary">
      <List sx={{ mt: 2 }}>
        <ListItem sx={{ display: "flex", justifyContent: "end" }}>
          <IconButton onClick={handleSidebar}>
            <CloseIcon />
          </IconButton>
        </ListItem>

        {items.map((item, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton component={!item.isDialog ? RouterLink : item.target ? "a" : "div"} {...(item.target && { href: item.link, target: "_blank" })} to={item.link} onClick={() => handleClick(item)}>
              <ListItemText
                primary={item.title}
                primaryTypographyProps={{
                  color: "white",
                  fontSize: 16,
                  fontWeight: 600,
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;
