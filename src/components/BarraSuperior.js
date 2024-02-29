import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, Outlet } from "react-router-dom";
import { LoginButton } from "./Login";
import { LogoutButton } from "./Logout";

function BarraSuperior() {
  return (
    <>
      <Navbar bg="danger" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/">
            Curriculum
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">
                Inicio
              </Nav.Link>
              <Nav.Link as={Link} to="cv/agregar">
                Agregar Nuevo CV
              </Nav.Link>
              <Nav.Link as={Link} to="cv/excel">
                Lista De Asistencia
              </Nav.Link>
            </Nav>
            <div>
              <LoginButton />
              <LogoutButton />
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div>
        <Outlet />
      </div>
    </>
  );
}

export default BarraSuperior;
