import "./HomePage.css";
import Button from  "../Button"
import { Container } from 'react-bootstrap';
import HomeNavbar from "../Navbar/homeNavbar";

const HomePage=()=>{

    return(
    <Container className="container-fluid">
        <HomeNavbar />
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
        <div className="d-inline-flex gap-1">
            <Button label='Learn More' variant="primary"/>
            <Button label='Sign Up' variant="secondary" />
        </div>
    </Container>
    )
}

export default HomePage;