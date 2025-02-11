import React, { useState, useEffect } from "react";

const LaunchCountdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 13,
    hours: 23,
    minutes: 59,
    seconds: 52,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        }
        if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        }
        if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        clearInterval(timer);
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const TimeBox = ({ value, label }) => (
    <div className="bg-[#1A1A1D] rounded-lg p-4 w-24 text-center shadow-md">
      <div className="text-3xl font-bold text-white">{value}</div>
      <div className="text-sm text-gray-400">{label}</div>
    </div>
  );

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-black to-[#0D1321] flex items-center">
      {/* Large curved shape */}
      <div className="absolute left-0 top-0 w-2/3 h-full bg-[#1E1E2E] rounded-r-full opacity-40" />

      <div className="relative z-10 text-left ml-16">
        <h1 className="text-4xl font-bold text-white mb-4">
          We are launching in
        </h1>
        <p className="text-gray-400 mb-8 max-w-xl">
          A social betting network where you can follow tipsters, share, and copy
          bets from our community & friends.
        </p>

        <div className="flex space-x-4">
          <TimeBox value={timeLeft.days} label="Days" />
          <TimeBox value={timeLeft.hours} label="Hours" />
          <TimeBox value={timeLeft.minutes} label="Minutes" />
          <TimeBox value={timeLeft.seconds} label="Seconds" />
        </div>
      </div>
      {/* svg */}
      
    </div>
  );
};

export default LaunchCountdown;
