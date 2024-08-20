import React from "react";
import { Container } from "react-bootstrap";
import Header from "./Header";
import Learning from "./Learning";
import Environment from "./Environment";

const Highlight2: React.FC = () => {
  return (
    <Container className="container-fluid">
      <div className="row mt-5">
        <div className="col-lg-6">
          <Header />
          <div className="row">
            <Environment />
            <Learning />
          </div>
        </div>
        <div className="col-lg-6 justify-content-center">
          <img src="https://img.freepik.com/free-vector/group-young-children-cartoon-character_1308-52677.jpg?size=516&ext=jpg&ga=GA1.1.760781162.1723274336&semt=ais_hybrid" />
        </div>
      </div>
    </Container>
  );
};

export default Highlight2;
