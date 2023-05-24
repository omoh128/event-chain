import React from 'react';

function EventListing() {
  const events = [
    { id: 1, title: 'Conference', date: '2023-06-15' },
    { id: 2, title: 'Workshop', date: '2023-06-20' },
    { id: 3, title: 'Exhibition', date: '2023-06-25' },
  ];

  return (
    <div>
      <h1>Event Listing</h1>
      <ul>
        {events.map(event => (
          <li key={event.id}>
            <h2>{event.title}</h2>
            <p>Date: {event.date}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EventListing;
