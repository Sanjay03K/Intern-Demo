import {Card} from 'react-bootstrap';
import { MDBIcon} from 'mdbreact';
import './App.css';

function Cardbody() {
    return (
<Card className="font" bg="dark" style={{marginTop:"5em", height:"21em", width:"100%",color:"White"}}>
    <h1 style={{marginTop:"2%", marginLeft:"10%",fontSize:"40px"}}>We partner closely with you.</h1>
    <p style={{marginTop:"2%" ,marginLeft:"20%"}}><MDBIcon icon="lightbulb" size="1x" className="mr-3"/>Dedicated support over slack</p>
    <p style={{marginTop:"2%" ,marginLeft:"20%"}}><MDBIcon icon="bolt" size="1x" className="mr-3"/>Stratergy meetings to hone in the search</p>
    <p style={{marginTop:"2%" ,marginLeft:"20%"}}><MDBIcon icon="calendar-check" size="1x" className="mr-3"/>Scheduling management</p>
    <p style={{marginTop:"2%" ,marginLeft:"20%"}}><MDBIcon icon="chart-bar" size="1x" className="mr-3"/>Weekly performance reports</p>
    <p style={{marginTop:"1.5%" ,marginLeft:"20%"}}><MDBIcon fab icon="buffer"size="1x" className="mr-3"/>Consultation on job description and messaging</p>
</Card>
);
}

export default Cardbody;