import React from 'react';

function EventDetails({ event }) {
  return (
    <div>
      <h1>Event Details</h1>
      <h2>{event.title}</h2>
      <p>Date: {event.date}</p>
      <p>Location: {event.location}</p>
      <p>Description: {event.description}</p>
    </div>
  );
}

export default EventDetails;
