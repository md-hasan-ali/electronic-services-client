import React from 'react';
import { Carousel } from 'react-bootstrap';
import bannerImg from '../../../images/banner1.jpg'

const Banner = () => {
    return (
        <div className='banner-area'>
            <Carousel>
                <Carousel.Item>
                    <img
                        style={{ height: '100vh' }}
                        className="d-block w-100"
                        src={bannerImg}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        style={{ height: '100vh' }}
                        className="d-block w-100"
                        src={bannerImg}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        style={{ height: '100vh' }}
                        className="d-block w-100"
                        src={bannerImg}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div >
    );
};

export default Banner;