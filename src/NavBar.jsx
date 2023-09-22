import React from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";

const pages = [
  { label: "Forma Parcelas", path: "/parcelas-form" },
  { label: "Tabla Parcelas", path: "/parcelas-table" },
  { label: "Forma Seguimiento Cultivo", path: "/cultivo-form" },
  { label: "Tabla Seguimiento Cultivo", path: "/cultivo-table" },
  { label: "Semillas", path: "/semillas" },
];
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
