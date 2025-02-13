import React, { useState, useEffect } from "react";
import BackgroundBeams from "../BackgroundBeams/BackgroundBeams";

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
    <div className="bg-[#1A1A1D] rounded-lg p-4 w-20 my-2 md:w-24 text-center shadow-md">
      <div className="text-xl md:text-3xl font-bold text-white">{value}</div>
      <div className="text-sm text-gray-400">{label}</div>
    </div>
  );

  return (
    <div className="relative min-h-screen h-full bg-gradient-to-b z-[-2] from-black to-[#0D1321] flex items-center w-full">
      <div className="h-screen min-w-full w-full flex">
        <div className="relative text-left my-auto flex flex-col w-full items-center justify-center">
            <div className="max-w-2xl w-full text-center">
              {/* Enhanced gradient heading */}
              <h1 className="text-6xl font-bold mb-8 bg-gradient-to-r from-gray-500 via-gray-200 to-gray-400 text-transparent bg-clip-text animate-gradient">
              The Countdown Begins
              </h1>

              {/* Description with more metallic feel */}
              <p className="text-gray-400 mb-8 text-lg max-w-xl mx-auto bg-gradient-to-r from-gray-400 via-gray-300 to-gray-400 bg-clip-text">
              Tick. Tock. Time is slipping away. In:
              </p>

            </div>

            <div className="flex flex-wrap space-x-4 justify-center">
              <TimeBox value={timeLeft.days} label="Days" />
              <TimeBox value={timeLeft.hours} label="Hours" />
              <TimeBox value={timeLeft.minutes} label="Minutes" />
              <div className="hidden md:block">
              <TimeBox value={timeLeft.seconds} label="Seconds" />
              </div>
            </div>
            <p className="text-gray-400 mb-8 text-lg max-w-xl mx-auto bg-gradient-to-r from-gray-400 via-gray-300 to-gray-400 bg-clip-text text-center mt-10 px-3">
            The cycle begins again. Secrets will surface, and reality will twist before your eyes. Prepare for what lies beyond—once it starts, there’s no turning back.
            </p>
            <button></button>
          </div>
        </div>
        <BackgroundBeams className="absolute z-[-1]"/>
    </div>
  );
};

export default LaunchCountdown;
