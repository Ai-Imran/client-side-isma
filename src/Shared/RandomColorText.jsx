import React, { useState, useEffect } from 'react';

const RandomColorText = ({ text }) => {
  const [color, setColor] = useState('#000');

  useEffect(() => {
    const intervalId = setInterval(() => {
      const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
      setColor(randomColor);
    }, 1000); // Change color every second

    return () => clearInterval(intervalId); // Cleanup function to clear interval
  }, []); // Empty dependency array ensures effect runs only once

  return <span style={{ color }}>{text}</span>;
};

export default RandomColorText;
