import React, { useState } from "react";
import { useTheme, useMediaQuery } from "@mui/material";
import Topbar from "./Topbar";
import Sidebar from "./Sidebar";

const items = [
  {
    title: "Resources",
    link: "/home#",
  },
  {
    title: "Request Access",
    link: "/home#",
    color: "primary.main",
  },
];

const Header = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true,
  });
  const [openSidebar, setOpenSidebar] = useState(false);

  const handleSidebar = () => {
    setOpenSidebar(!openSidebar);
  };

  const open = isMd ? false : openSidebar;

  return (
    <div>
      <Topbar items={items} handleSidebar={handleSidebar} />

      <Sidebar open={open} items={items} handleSidebar={handleSidebar} />
    </div>
  );
};

export default Header;
