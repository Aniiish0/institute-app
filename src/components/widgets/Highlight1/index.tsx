import React from "react";
import Header from "./Header";
import Programs from "./Programs";
import Activities from "./Activities";
import { Container } from "react-bootstrap";

const Highlight1: React.FC = () => {
  return (
    <Container className="container-fluid mt-5">
      <div className="row">
        <div className="col-lg-5 justify-content-center">
          <img src="https://png.pngtree.com/png-vector/20191121/ourmid/pngtree-blue-bird-vector-or-color-illustration-png-image_2013004.jpg" />
        </div>
        <div className="col-lg-7">
          <Header />
          <div className="row">
            <Programs />
            <Activities />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Highlight1;
