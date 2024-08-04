import Slider from "../Slider";
import "./HomePage.css";
import { Container } from 'react-bootstrap';
const HomePage=()=>{

    return(
    <Container className="container-fluid">
        <div> 
            <h1>Welcome to XY Branch,where</h1>
            <h1>children learn,grow, and</h1>
            <h1>thrive.</h1>
        </div>
        <br/>
        <div>
            <h6 style={{fontWeight:"normal"}}>We provide a healthy and friendly environment for primary school children to learn, study, and</h6>
            <h6 style={{fontWeight:"normal"}}>develop essential skills.</h6>
        </div>
        <br></br>
        <Slider/>
    </Container>
    )
}

export default HomePage;