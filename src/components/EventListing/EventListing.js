import React from 'react';

const EventListing = () => {
  // Placeholder data for event listings
  const events = [
    {
      id: 1,
      title: 'Web3 Conference',
      date: '2023-06-15',
      location: 'Virtual',
      ticketAvailability: true,
    },
    {
      id: 2,
      title: 'Blockchain Workshop',
      date: '2023-07-10',
      location: 'Virtual',
      ticketAvailability: false,
    },
    // Add more event objects as needed
  ];

  return (
    <div>
      <h2>Upcoming Events</h2>
      {events.map((event) => (
        <div key={event.id}>
          <h3>{event.title}</h3>
          <p>Date: {event.date}</p>
          <p>Location: {event.location}</p>
          {event.ticketAvailability ? (
            <p>Tickets Available</p>
          ) : (
            <p>Tickets Sold Out</p>
          )}
          <button>Register</button>
        </div>
      ))}
    </div>
  );
};

export default EventListing;
