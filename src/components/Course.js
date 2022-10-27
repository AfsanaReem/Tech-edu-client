import React from 'react';
import { Button, Card, Col, ListGroup, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Course = ({ course }) => {
    const { id, name, img, title, fee, time, requirements } = course;
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
                            <Button variant='outline-primary' className='mb-2'><Card.Link href={`/courses/${id}`}>Details</Card.Link></Button>
                            <br />
                            <Button variant='outline-primary'><Card.Link href={`/courses/${id}`}>Enroll Now</Card.Link></Button>
                        </Card.Body></Col>
                </Row>
            </Card>
        </div >
    );
};

export default Course;