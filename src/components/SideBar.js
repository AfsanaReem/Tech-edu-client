import React, { useEffect, useState } from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SideBar = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('https://tech-edu-server.vercel.app')
            .then(res => res.json())
            .then(data => setCourses(data));
    }, [])
    return (
        <div>
            <ListGroup>
                <ListGroupItem className='mt-5'>All Courses</ListGroupItem>
                {courses.map(course => <ListGroupItem key={course.id}>
                    <Link to={`/courses/${course.id}`}>{course.name}</Link>
                </ListGroupItem>)
                }
            </ListGroup>

        </div>
    );
};

export default SideBar;