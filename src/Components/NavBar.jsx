import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../Assets/Images/gabriel-high-resolution-logo-black-transparent.png';
import "../Assets/Styles/nav.css"

function BasicExample() {
  return (
    <Navbar expand="lg" className="fixed-top bg-white">
      <Container>
        <Navbar.Brand href="#home"><img className='logo' src={logo} alt="logo" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#service">Servces</Nav.Link>
            {/* <Nav.Link href="#portfolio">Portfolio</Nav.Link> */}
            <Nav.Link href="#timeline">Timeline</Nav.Link>
            <Nav.Link href="#testimonial">Testimonial</Nav.Link>
            <Nav.Link href="#blog">News</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;