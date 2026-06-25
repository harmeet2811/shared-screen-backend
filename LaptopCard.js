// src/components/LaptopCard.js
import React from 'react';

export default function LaptopCard({ device, onClaim }) {
  const isAvailable = device.status === 'AVAILABLE';

  return (
    <div style={{ 
      backgroundColor: 'white',
      borderRadius: '16px', 
      padding: '24px',
      boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)',
      border: isAvailable ? '2px solid #bbf7d0' : '2px solid #fef08a',
      transition: 'transform 0.2s',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      height: '180px'
    }}>
      <div>
        {/* Top Tag showing device category */}
        <span style={{ 
          fontSize: '11px', 
          fontWeight: 'bold', 
          backgroundColor: '#f1f5f9', 
          color: '#475569', 
          padding: '4px 8px', 
          borderRadius: '6px',
          textTransform: 'uppercase'
        }}>
          {device.type}
        </span>

        {/* Device Title */}
        <h3 style={{ margin: '12px 0 6px 0', fontSize: '18px', color: '#0f172a', fontWeight: '700' }}>
          {device.name}
        </h3>
        
        {/* Status Text Indicator */}
        <p style={{ margin: 0, fontSize: '14px', color: '#64748b' }}>
          Status:{' '} 
          <span style={{ 
            fontWeight: 'bold', 
            color: isAvailable ? '#16a34a' : '#ca8a04' 
          }}>
            ● {device.status}
          </span>
        </p>
      </div>
      
      {/* Dynamic Action Button */}
      <div>
        {isAvailable ? (
          <button 
            onClick={() => onClaim(device.id)} 
            style={{ 
              width: '100%',
              padding: '10px', 
              backgroundColor: '#2563eb', 
              color: 'white', 
              border: 'none',
              borderRadius: '8px', 
              fontWeight: 'bold',
              cursor: 'pointer',
              fontSize: '14px'
            }}
          >
            Claim to Fix It!
          </button>
        ) : (
          <div style={{ 
            width: '100%',
            padding: '10px', 
            backgroundColor: '#fef9c3', 
            color: '#713f12', 
            textAlign: 'center',
            borderRadius: '8px', 
            fontWeight: '600',
            fontSize: '14px',
            boxSizing: 'border-box'
          }}>
            🔒 Assigned to Tech
          </div>
        )}
      </div>

    </div>
  );
}