import {Navbar,Container,Nav} from 'react-bootstrap';
import './App.css';
import { MDBIcon} from 'mdbreact';

function NavbarHome() {
    return (
        <Navbar fixed="top" bg="dark" variant="dark">
        <Container>
        <MDBIcon fab icon="gripfire" style={{marginLeft:"-6em"}}/>
        <Nav style={{marginLeft:"0.5em", marginRight:"13em"}}>Recruito</Nav>
        <Nav className="me-auto">
          <Nav.Link style={{marginLeft:"6em",marginRight:"0.8em", textDecoration: "underline"}}  href="#Home">Home</Nav.Link>
          <Nav.Link style={{marginRight:"0.8em"}} href="#AboutUS">About Us</Nav.Link>
          <Nav.Link style={{marginRight:"0.9em"}} href="#Features">Features</Nav.Link>
          <Nav.Link style={{marginRight:"0.9em"}} href="#Product">Product</Nav.Link>
          <Nav.Link style={{marginRight:"0.9em"}} href="#Feedback">Feedback</Nav.Link>
          <Nav.Link style={{marginRight:"0.9em"}} href="#pricing">Pricing</Nav.Link>
        </Nav>
        </Container>
      </Navbar>
        );
  }

export default NavbarHome;
