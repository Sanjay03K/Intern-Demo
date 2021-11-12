
import NavbarHome from './Navbar';
import NavbarEnd from './BottomNavbar';
import Cardbody from './Mainbody';
import Pageslide from './caurosel';
import {Button} from 'react-bootstrap';
import './App.css';

function App() {
  return (
    <div className="App-fullpage">
      <NavbarHome/>
    <h1 className="font" style={{fontSize:"80px", marginTop:"2em", alignSelf:"center"}}>Recruitment Startup</h1>
    <p className="font" style={{ marginTop:"1em", alignSelf:"center"}}>For Hiring Software Engineers, Product Managers and Data Scientists</p>
    <p className="font" style={{ fontSize:"40px", marginTop:"2em", alignSelf:"center"}}>Join the 1000+ companies relying on Recruito to find the best talent</p>
    <Button className="font" variant="outline-info" style={{marginTop:"1em",width:"15em",height:"3em",alignSelf:"center",fontSize:"0.8em"}}>
      Contact Us
      </Button>
      <Cardbody/>
      <p className="font" style={{fontSize:"40px", marginTop:"1em", alignSelf:"center"}}>Check What's Customer say about us</p>
      <Pageslide/>
    <NavbarEnd/>
  </div>
  );
}


export default App;
