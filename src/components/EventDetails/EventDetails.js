import React from 'react';

const EventDetails = ({ event }) => {
  return (
    <div>
      <h2>{event.title}</h2>
      <p>Date: {event.date}</p>
      <p>Location: {event.location}</p>
      <p>Description: {event.description}</p>
      <button>Register</button>
    </div>
  );
};

export default EventDetails;
