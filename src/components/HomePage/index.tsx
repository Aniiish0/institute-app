import { Slider } from "@proto-xyz/ui-components";
import { Container } from "react-bootstrap";

const HomePage = () => {
  const images = [
    "https://plus.unsplash.com/premium_photo-1663106423058-c5242333348c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2Nob29sJTIwa2lkc3xlbnwwfHwwfHx8MA%3D%3D",
    "https://media.istockphoto.com/id/1401178460/photo/teacher-helping-a-young-student-with-her-homework-in-the-library-after-school-two-females-are.webp?b=1&s=170667a&w=0&k=20&c=aPY2PqE2XJtiRo-9WSdDR0DHTy3PgocUK0GVTwoYmcg=",
    "https://media.istockphoto.com/id/1409722748/photo/students-raising-hands-while-teacher-asking-them-questions-in-classroom.webp?b=1&s=170667a&w=0&k=20&c=wmjzzESyHcSDFXYI1qzngse-EIj7aBMfebEaqjT8cjM=",
  ];
  return (
    <Container className="container-fluid">
      <div>
        <h1 className="custom-h1">
          Welcome to XYZ Branch,
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
      <Slider images={images} />
    </Container>
  );
};

export default HomePage;
