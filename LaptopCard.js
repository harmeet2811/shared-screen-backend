import React, { useState } from 'react';

export default function LaptopCard() {
  const [status, setStatus] = useState('AVAILABLE');

  const handleClaim = () => {
    setStatus('CLAIMED');
  };

  return (
    <div style={{ 
      border: '3px solid black', 
      padding: '25px', 
      maxWidth: '300px', 
      margin: '20px auto',
      borderRadius: '10px',
      backgroundColor: status === 'AVAILABLE' ? '#d4edda' : '#fff3cd'
    }}>
      <h3>MacBook Air 2018</h3>
      <p>Status: <strong>{status}</strong></p>
      
      {status === 'AVAILABLE' && (
        <button onClick={handleClaim} style={{ padding: '10px 20px', cursor: 'pointer' }}>
          Claim to Fix It!
        </button>
      )}
    </div>
  );
}