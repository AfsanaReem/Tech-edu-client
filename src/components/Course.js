import React from 'react';
import { Card, Col, ListGroup, Row } from 'react-bootstrap';

const Course = ({ course }) => {
    const { name, img, title, fee, time, requirements } = course;
    return (
        <div>
            <Card className='mt-5 mb-5'>
                <Row>
                    <Col>
                        <Card.Img style={{ height: '25rem' }} variant="top" src={img} /></Col>
                    <Col>
                        <Card.Body>
                            <Card.Title>{title}</Card.Title>
                            <Card.Text>{name}
                            </Card.Text>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroup.Item>Course Credit: {time} credits</ListGroup.Item>
                            <ListGroup.Item>Prerequisites: {requirements}</ListGroup.Item>
                            <ListGroup.Item>Course Fee: ${fee}</ListGroup.Item>
                        </ListGroup>
                        <Card.Body>
                            <Card.Link href="#">Course Details</Card.Link>
                            <Card.Link href="#">Enroll</Card.Link>
                        </Card.Body></Col>
                </Row>
            </Card>
        </div>
    );
};

export default Course;