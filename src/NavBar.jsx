import React from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";

const pages = [
  { label: "Seguimiento cultivo", path: "/cultivo" },
  { label: "Parcelas", path: "/parcelas" },
  { label: "Semillas", path: "/semillas" },
];

const settings = ["Profile", "Account", "Dashboard", "Logout"];
function NavBar() {
  return (
    <>
      <AppBar position='static'>
        <Container maxWidth='xl'>
          <Toolbar disableGutters>
            {pages.map((page) => (
              <Button
                key={page.label}
                component={Link}
                to={page.path}
                sx={{ mx: 2, color: "white" }}
              >
                {page.label}
              </Button>
            ))}
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}

export default NavBar;
