import React from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import '../styles/Contact.css';
import ContactImage from '../assets/contact.avif';

function Contact() {
  return (
    <section className="contact-section">
      <Container>
        <Row>
          <Col md={6} className="contact-image-col">
            <img 
              src={ContactImage} 
              alt="Contact Us" 
              className="contact-image"
            />
          </Col>

          <Col md={6} className="contact-form-col">
            <h2 className="contact-title">Get In Touch</h2>
            <p className="contact-description">Feel free to reach out for collaborations or just a friendly chat.</p>
            <Form className="contact-form">
              <Form.Group controlId="formName">
                <Form.Label className="form-label">Your Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" className="form-input" />
              </Form.Group>

              <Form.Group controlId="formEmail">
                <Form.Label className="form-label">Your Email</Form.Label>
                <Form.Control type="email" placeholder="Enter your email" className="form-input" />
              </Form.Group>

              <Form.Group controlId="formMessage">
                <Form.Label className="form-label">Your Message</Form.Label>
                <Form.Control as="textarea" rows={5} placeholder="Enter your message" className="form-input" />
              </Form.Group>

              <Button variant="primary" type="submit" className="submit-btn">
                Send Message
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Contact;
