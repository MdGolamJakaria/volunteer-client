import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Event = (props) => {
    return (
        <Link to={'register/' + props.event._id}>
            <Card style={{ width: '16rem', float: 'left', margin: '3px' }}>
                <Card.Img variant="top" src={props.event.image} />
                <Card.Body>
                    <Card.Title>{props.event.eventName}</Card.Title>
                </Card.Body>
            </Card>
        </Link >
    );
};

export default Event;