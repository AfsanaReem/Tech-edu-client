import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import SideBar from './SideBar';

const Courses = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col lg='8'>

                    </Col>
                    <Col lg='4'>
                        <SideBar></SideBar>
                    </Col>
                </Row>
            </Container>

        </div>
    );
};

export default Courses;