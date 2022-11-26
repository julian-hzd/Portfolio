import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Outlet, Link, NavLink } from "react-router-dom";

export default function Navigation() {
  return (
    <>
      <Navbar bg="dark" expand="lg" variant="dark">
        <Container>
          <Navbar.Brand href="/Portfolio">Hello World!</Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">

            <Nav className="justify-content-end">
              <NavLink to="/About">About Me</NavLink>
              <NavLink to="/Projects">Projects</NavLink>
            </Nav>
          </Navbar.Collapse>

        </Container>
      </Navbar>
      <Outlet />

    </>

  );
}
