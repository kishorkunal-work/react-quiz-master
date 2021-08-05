import React, { useState, useEffect } from 'react';

const Timer = ({ minutes, onTimeExpired }) => {
  const [seconds, setSeconds] = useState(minutes * 60);

  useEffect(() => {
    if (seconds > 0) {
      setTimeout(() => setSeconds(seconds - 1), 1000);
    } else {
      onTimeExpired(true);
    }
  });

  return (
    <> TIMER : {new Date(seconds * 1000).toISOString().substr(14, 5)} </>
  );
}

export default Timer;