import React from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";

const pages = [
  { label: "Forma Parcelas", path: "/parcelas-forma" },
  { label: "Tabla Parcelas", path: "/parcelas-tabla" },
  { label: "Forma Semillas", path: "/semillas-forma" },
  { label: "Tabla Semillas", path: "/semillas-tabla" },
  { label: "Forma Seguimiento Cultivo", path: "/cultivo-forma" },
  { label: "Tabla Seguimiento Cultivo", path: "/cultivo-tabla" },

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
