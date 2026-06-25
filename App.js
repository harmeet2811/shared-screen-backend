// src/App.js
import React, { useState } from 'react';
import LaptopCard from './components/LaptopCard';

function App() {
  // This is our main toy box holding ALL the devices at once!
  const [devices, setDevices] = useState([
    { id: 1, name: 'MacBook Air 2018', type: 'Laptop', status: 'AVAILABLE' },
    { id: 2, name: 'iPad Pro 2022', type: 'Tablet', status: 'AVAILABLE' },
    { id: 3, name: 'Dell XPS 13', type: 'Laptop', status: 'CLAIMED' },
    { id: 4, name: 'iMac 27-inch', type: 'Desktop', status: 'AVAILABLE' },
    { id: 5, name: 'Lenovo ThinkPad', type: 'Laptop', status: 'AVAILABLE' },
    { id: 6, name: 'iPad Mini', type: 'Tablet', status: 'CLAIMED' },
  ]);

  // The magic button clicker that updates the specific device you clicked!
  const handleClaimDevice = (id) => {
    setDevices(
      devices.map((device) =>
        device.id === id ? { ...device, status: 'CLAIMED' } : device
      )
    );
  };

  // Counting how many items are available and claimed for our scoreboard
  const availableCount = devices.filter((d) => d.status === 'AVAILABLE').length;
  const claimedCount = devices.filter((d) => d.status === 'CLAIMED').length;

  return (
    <div style={{ fontFamily: 'Segoe UI, sans-serif', backgroundColor: '#f8fafc', minHeight: '100vh', margin: 0 }}>
      
      {/* 1. THE TOP NAVIGATION BAR */}
      <nav style={{ backgroundColor: '#1e293b', padding: '15px 30px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: 'white' }}>
        <h2 style={{ margin: 0, fontSize: '20px', fontWeight: 'bold' }}>🖥️ ScreenShare Pro</h2>
        <span style={{ backgroundColor: '#334155', padding: '5px 12px', borderRadius: '20px', fontSize: '14px' }}>Admin Dashboard</span>
      </nav>

      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '40px 20px' }}>
        
        {/* 2. THE WELCOME HERO BANNER */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h1 style={{ color: '#0f172a', fontSize: '36px', marginBottom: '10px' }}>The Shared Screen Factory</h1>
          <p style={{ color: '#64748b', fontSize: '16px' }}>Manage, inspect, and claim community devices instantly.</p>
        </div>

        {/* 3. THE SCOREBOARD (Stats Bar) */}
        <div style={{ display: 'flex', gap: '20px', marginBottom: '40px', justifyContent: 'center' }}>
          <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '12px', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)', width: '200px', textAlign: 'center', borderLeft: '5px solid #3b82f6' }}>
            <span style={{ color: '#64748b', fontSize: '14px', fontWeight: '600' }}>Total Devices</span>
            <h2 style={{ fontSize: '32px', margin: '5px 0 0 0', color: '#1e293b' }}>{devices.length}</h2>
          </div>
          <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '12px', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)', width: '200px', textAlign: 'center', borderLeft: '5px solid #22c55e' }}>
            <span style={{ color: '#22c55e', fontSize: '14px', fontWeight: '600' }}>🟢 Available</span>
            <h2 style={{ fontSize: '32px', margin: '5px 0 0 0', color: '#1e293b' }}>{availableCount}</h2>
          </div>
          <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '12px', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)', width: '200px', textAlign: 'center', borderLeft: '5px solid #eab308' }}>
            <span style={{ color: '#eab308', fontSize: '14px', fontWeight: '600' }}>🟡 Claimed</span>
            <h2 style={{ fontSize: '32px', margin: '5px 0 0 0', color: '#1e293b' }}>{claimedCount}</h2>
          </div>
        </div>

        {/* 4. THE GRID OF DEVICE CARDS */}
        <h3 style={{ color: '#1e293b', marginBottom: '20px', borderBottom: '2px solid #e2e8f0', paddingBottom: '10px' }}>Device Inventory</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '25px' }}>
          {devices.map((device) => (
            <LaptopCard 
              key={device.id} 
              device={device} 
              onClaim={handleClaimDevice} 
            />
          ))}
        </div>

      </div>
    </div>
  );
}

export default App;