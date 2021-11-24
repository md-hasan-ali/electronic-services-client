import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import './service.css'

const Service = ({ service }) => {
    const { name, img, price, desc } = service;
    return (
        <>
            <Col>
                <Card className='single-service'>
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Card.Title><strong>Name : </strong>{name}</Card.Title>
                        <Card.Text>
                            <strong>Description : </strong> {desc}
                        </Card.Text>
                        <Card.Text>
                            <strong>Price : </strong>  {price}
                        </Card.Text>
                        <Button variant="success">Order Repair</Button>
                    </Card.Body>
                </Card>
            </Col>
        </>
    );
};

export default Service;