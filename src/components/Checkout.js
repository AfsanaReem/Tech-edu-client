import React from 'react';
import { Card, Container } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';

const Checkout = () => {
    const course = useLoaderData();
    const { name, title } = course;
    return (
        <Container>
            <Card className="text-center">
                <Card.Header>{title}</Card.Header>
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                </Card.Body>
            </Card>
        </Container >
    );
};

export default Checkout;