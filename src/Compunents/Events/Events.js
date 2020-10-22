import React, { useEffect, useState } from 'react';
import Event from '../Event/Event';

const Events = () => {
    const [events, setEvents] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/events')
            .then(res => res.json())
            .then(events => setEvents(events))
    }, [])
    return (
        <div className='container'>
            <div className="row">
                {
                    events.map(events => <Event event={events} key={events._id} ></Event>)
                }

            </div>
        </div>
    );
};

export default Events;