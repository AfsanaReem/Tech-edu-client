import React from 'react';
import { Carousel, Container } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const courses = useLoaderData()
    return (
        <Container className='d-flex flex-column align-items-center'>
            <Carousel className='w-50' variant='dark'>
                <Carousel.Item interval={1000} >
                    <img
                        className="d-block w-100 opacity-50"
                        src={courses[0].img}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>{courses[0].title}</h3>
                        <p>{courses[0].details}</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 opacity-50"
                        src={courses[3].img}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3>{courses[3].title}</h3>
                        <p>{courses[3].details}</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 opacity-50"
                        src={courses[2].img}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>{courses[1].title}</h3>
                        <p>{courses[2].details}</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

        </Container>
    );
};

export default Home;