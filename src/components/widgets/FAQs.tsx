import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import CollapseCard from '../CollapseCard';

const faq: React.FC = () => {
  const faqData = [
    {
      question: 'Question text goes here',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.',
    },
    {
      question: 'Question text goes here',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.',
    },
    // Add more FAQ items here
  ];

  return (
    <Container>
      <h1 className='custom-h1'>FAQs</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
      <div className='my-4'>
        <Row xs={1} sm={1} md={1} lg={2} className="g-2">
          {faqData.map((faq, index) => (
            <Col key={index}><CollapseCard title={faq.question} body={faq.answer} /></Col>
          ))}
        </Row>
      </div>
    </Container>
  );
};

export default faq;