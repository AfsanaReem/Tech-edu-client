import React from 'react';
import { Button, Card, Col, Container, ListGroup, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import Pdf from "react-to-pdf";

const Details = () => {
    const single = useLoaderData();
    const { img, id, title, time, fee, name, details, obj, requirements } = single;
    const ref = React.createRef();
    return (
        <Container>
            <Card className="text-center">
                <Pdf targetRef={ref} filename="course_details.pdf">
                    {({ toPdf }) => <Button onClick={toPdf} variant='outline-primary'><Card.Link >Download PDF</Card.Link></Button>}
                </Pdf>
            </Card>
            <Card className='mt-5 mb-5' >
                <Row>
                    <Col>
                        <Card.Img variant="top" src={img} /></Col>
                    <Col><div ref={ref}>
                        <Card.Body >
                            <Card.Title>{title}</Card.Title>
                            <Card.Text>{name}
                            </Card.Text>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroup.Item>Course Credit: {time} credits</ListGroup.Item>
                            <ListGroup.Item>Prerequisites: {requirements}</ListGroup.Item>
                            <ListGroup.Item>Course Fee: ${fee}</ListGroup.Item>
                            <ListGroup.Item>{details}</ListGroup.Item>
                            <ListGroup.Item>{obj}</ListGroup.Item>
                        </ListGroup></div>
                        <Card.Body>
                            <Button variant='outline-primary'><Card.Link href={`/checkout/${id}`}>Get premium access</Card.Link></Button>

                        </Card.Body></Col>
                </Row>
            </Card>
        </Container >
    );
};

export default Details;