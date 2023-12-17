import React, { useState } from 'react';

function NameComponent({ _id, name }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <p className="text-sm text-blue-600">
        {name}
      </p>
      <div
        className={`gap-2 text-[10px] text-blue-600 ${isHovered ? 'flex' : 'hidden'}`}

      >
        <button className="border-r-2 pr-2">View</button>
        <button className="border-r-2 pr-2">Edit</button>
        <button className="text-red-500">Delete</button>
      </div>
    </div>
  );
}

export default NameComponent;
