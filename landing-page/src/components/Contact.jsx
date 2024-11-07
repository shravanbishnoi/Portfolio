import React, {useState} from 'react';
import axios from 'axios';
import {Form, Button, Container, Row, Col} from 'react-bootstrap';
import '../styles/Contact.css';
import ContactImage from '../assets/contact.avif';

function Contact () {
  const [formData, setFormData] = useState ({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = e => {
    const {name, value} = e.target;
    setFormData ({...formData, [name]: value});
  };

  const handleSubmit = async e => {
    e.preventDefault ();
    try {
      const response = await axios.post (
        'http://localhost:5000/send',
        formData
      );
      if (response.status === 200) {
        alert ('Message sent successfully!');
      }
    } catch (error) {
      console.error ('Error sending message:', error);
      alert ('Failed to send message');
    }
  };

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
            <p className="contact-description">
              Feel free to reach out for collaborations or just a friendly chat.
            </p>
            <Form className="contact-form" onSubmit={handleSubmit}>
              <Form.Group controlId="formName">
                <Form.Label className="form-label">Your Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your name"
                  className="form-input"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group controlId="formEmail">
                <Form.Label className="form-label">Your Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter your email"
                  className="form-input"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group controlId="formMessage">
                <Form.Label className="form-label">Your Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={5}
                  placeholder="Enter your message"
                  className="form-input"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                />
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
