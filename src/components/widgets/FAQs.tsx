import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import CollapseCard from "../CollapseCard";

const faq: React.FC = () => {
  const faqData = [
    {
      question: "What is the timing?",
      answer:
        "The Branch of two seasonal timings : Summer and Winter\nSummer : 7 - 11\nWinter : 8 - 12",
    },
    {
      question: "What are total number of students?",
      answer:
        "The total number of students as of now are 91 would be updated accordingly",
    },
    // Add more FAQ items here
  ];

  return (
    <Container>
      <h1 className="custom-h1">FAQs</h1>
      <br />
      <p>Important Queries regarding the XY Branch</p>
      <div className="my-4">
        <Row xs={1} sm={1} md={1} lg={2} className="g-2">
          {faqData.map((faq, index) => (
            <Col key={index}>
              <CollapseCard title={faq.question} body={faq.answer} />
            </Col>
          ))}
        </Row>
      </div>
    </Container>
  );
};

export default faq;
