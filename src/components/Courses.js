import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import Course from './Course';
import SideBar from './SideBar';

const Courses = () => {
    const courses = useLoaderData();
    return (
        <div>
            <Container>
                <Row>
                    <Col lg='8'>
                        {
                            courses.map(course => <Course
                                key={course.id}
                                course={course}></Course>)
                        }
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