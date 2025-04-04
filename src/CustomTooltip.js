import React from 'react';
import './CustomTooltip.css'; // We'll create this CSS file next

const CustomTooltip = ({ active, payload, label }) => {
  // active is true when hovering, payload has the data
  if (active && payload && payload.length) {
    const data = payload[0].payload; // Access the data object for the slice

    return (
      <div className="custom-tooltip">
        <p className="tooltip-label">{`${data.name} : ${data.value}%`}</p>
        <hr /> {/* Add a separator */}
        <p><strong>Age:</strong> {data.age}</p>
        <p><strong>Words:</strong> {data.words.join(', ')}</p>
        <p><strong>Introduced by:</strong> {data.origin}</p>
      </div>
    );
  }

  return null; // Render nothing if not active
};

export default CustomTooltip;
