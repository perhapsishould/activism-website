'use client';

import { useEffect, useState } from 'react';

export default function Countdown() {
  // Set vote date to exactly one year from now
  const voteDate = new Date();
  voteDate.setFullYear(voteDate.getFullYear() + 1);

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = voteDate.getTime() - new Date().getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-gray-dark border border-gray-medium rounded-lg p-8 text-center">
      <h3 className="text-xl font-bold mb-2">Time Until the Vote</h3>
      <p className="text-gray-light mb-6">Every second counts. Join the fight today.</p>

      <div className="grid grid-cols-4 gap-4">
        <div>
          <div className="text-4xl md:text-5xl font-bold text-accent">{timeLeft.days}</div>
          <div className="text-sm text-gray-light mt-2">DAYS</div>
        </div>
        <div>
          <div className="text-4xl md:text-5xl font-bold text-accent">{timeLeft.hours}</div>
          <div className="text-sm text-gray-light mt-2">HOURS</div>
        </div>
        <div>
          <div className="text-4xl md:text-5xl font-bold text-accent">{timeLeft.minutes}</div>
          <div className="text-sm text-gray-light mt-2">MINUTES</div>
        </div>
        <div>
          <div className="text-4xl md:text-5xl font-bold text-accent">{timeLeft.seconds}</div>
          <div className="text-sm text-gray-light mt-2">SECONDS</div>
        </div>
      </div>
    </div>
  );
}
