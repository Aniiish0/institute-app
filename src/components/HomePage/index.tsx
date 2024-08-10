import Slider from "../Slider";
import "./HomePage.css";
import { Container } from "react-bootstrap";
const HomePage = () => {
  return (
    <Container className="container-fluid">
      <div>
        <h1 className="custom-h1">
          Welcome to XY Branch,
          <br />
          where children learn,
          <br />
          grow, and thrive.
        </h1>
      </div>
      <br />
      <div>
        We provide a healthy and friendly environment for primary school
        children to learn, study, and develop essential skills.
      </div>
      <br></br>
      <Slider />
    </Container>
  );
};

export default HomePage;
