import Link from "next/link";
import { Container, Navbar, Nav } from "react-bootstrap";

function NavigateHeader() {
  return (
    <Navbar key='sm' expand='sm' variant="tabs" className="nav-panel">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link href={"/"}>About</Link>
            <Link href={"/projects"}>Projects</Link>
            <Link href={"/certificates"}>Certificats</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigateHeader;
