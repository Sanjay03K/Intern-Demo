import {Carousel} from 'react-bootstrap';

function Pageslide(){ 
    return(
<Carousel style={{marginTop:"1em",height:"12em",marginLeft:"2em"}}>
<Carousel.Item style={{marginTop:"10em"}}>
    <Carousel.Caption>
      <h3 style={{marginLeft:"1em"}}>I am happy to use this website as it helps our company to recruit people with good knowledge.<br/>
      It also saves a good amount of time in searching for talented peoples.
      </h3>
      <p style={{marginLeft:"-5em", marginTop:"1em", opacity:"0.5"}}>Aether Manager</p>
    </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item style={{marginTop:"10em"}}>
    <Carousel.Caption>
      <h3 style={{marginLeft:"-6em"}}>This website is very useful in recruiting talented engineers</h3>
      <p style={{marginLeft:"-6em",marginTop:"1em", opacity:"0.5"}}>Eula CEO</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item style={{marginTop:"10em"}}>
    <Carousel.Caption>
    <h3 style={{marginLeft:"-6em"}}>Thanks to this website we are able to recruit talented engineers.<br/>
    This website helps companies to recruit developers from all over the world.<br/>
    We received very much benefit by using this website.
    </h3>
      <p style={{marginLeft:"-6em",marginTop:"1em", opacity:"0.5"}}>Ei Manager</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    );
}
export default Pageslide;