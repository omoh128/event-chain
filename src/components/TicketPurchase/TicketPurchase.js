import React, { useState } from 'react';

const TicketPurchase = () => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (e) => {
    setQuantity(parseInt(e.target.value));
  };

  const handlePurchase = () => {
    // Perform ticket purchase logic, such as interacting with a smart contract
    console.log('Purchasing', quantity, 'ticket(s)');
    // Reset quantity
    setQuantity(1);
  };

  return (
    <div>
      <h2>Ticket Purchase</h2>
      <label htmlFor="quantity">Quantity:</label>
      <input
        type="number"
        id="quantity"
        min="1"
        value={quantity}
        onChange={handleQuantityChange}
      />
      <button onClick={handlePurchase}>Purchase</button>
    </div>
  );
};

export default TicketPurchase;
