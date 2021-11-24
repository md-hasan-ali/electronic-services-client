import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    console.log(services)
    return (
        <div className='services-area' style={{ margin: '50px 0' }}>
            <Container>
                <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                    <h2>Our Main Services</h2>
                </div>
                <Row xs={1} md={3} className="g-4">
                    {
                        services.map(service =>
                            <Service
                                key={service._id}
                                service={service}
                            >
                            </Service>
                        )
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Services;