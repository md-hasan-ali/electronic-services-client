import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './footer.css'

const Footer = () => {
    return (
        <div className='footer-area'>
            <Container>
                <Row>
                    <Col sm={12} md={4}>
                        <h2>Contact</h2>
                        <p>Phone: 01798946719</p>
                        <p>Email: hasanaliringku@gmail.com</p>
                        <address>Dhaka, House bulding 570</address>
                    </Col>
                    <Col sm={12} md={4}>
                        <h2>Footer Menu</h2>
                        <ul className='footer-menu'>
                            <li><a href="/">Home</a></li>
                            <li><a href="/">About</a></li>
                            <li><a href="/">All Services</a></li>
                            <li><a href="/">Contact</a></li>
                        </ul>
                    </Col>
                    <Col>
                        <h2>Social Icon</h2>

                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;