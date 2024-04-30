"use client";

import React, { useEffect, useState } from 'react';

interface IAnimatedCounter{
	max: number
	duration: number
}

const AnimatedCounter = ({ max, duration }: IAnimatedCounter) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = duration;
    const incrementTime = (end / max) / 100;

    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === max) clearInterval(timer);
    }, incrementTime);

    return () => clearInterval(timer);
  }, [max, duration]);

  return (
    <span className="font-semibold text-xl">
      {count}
    </span>
  );
};

export default AnimatedCounter;
