import React from "react";
import Button from "../../Button";

const Programs: React.FC = () => {
  return (
    <div className="col-xl-6 my-3">
      <div className="card border-0 m-0 p-0">
        <div className="card-body m-0 p-0">
          <h4 className="card-title">Programs</h4>
          <p className="card-text">
            Choose from our diverse range of skill development programs tailored
            to your child's interests.
          </p>
          <span>
            <Button label="Learn More" type="button" variant="secondary" />
          </span>
          <span className="mx-1">
            <Button label="Sign up" type="button" variant="link" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Programs;
