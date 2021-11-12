import {Navbar,Container,Nav} from 'react-bootstrap';
import './App.css';
import { MDBIcon} from 'mdbreact';

function NavbarHome() {
    return (
        <Navbar fixed="top" bg="dark" variant="dark">
        <Container>
        <MDBIcon fab icon="gripfire"/>
        <Nav style={{marginRight:"13em"}}>Recruito</Nav>
        <Nav className="me-auto">
          <Nav.Link style={{marginRight:"0.8em", textDecoration: "underline"}}>Home</Nav.Link>
          <Nav.Link style={{marginRight:"0.8em"}} href="#features">About Us</Nav.Link>
          <Nav.Link style={{marginRight:"0.9em"}} href="#pricing">Features</Nav.Link>
          <Nav.Link style={{marginRight:"0.9em"}} href="#pricing">Product</Nav.Link>
          <Nav.Link style={{marginRight:"0.9em"}} href="#pricing">Feedback</Nav.Link>
          <Nav.Link style={{marginRight:"0.9em"}} href="#pricing">Pricing</Nav.Link>
        </Nav>
        </Container>
      </Navbar>
        );
  }

export default NavbarHome;
