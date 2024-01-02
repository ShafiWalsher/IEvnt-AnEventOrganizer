"use client";

import { IEvent } from "@/lib/database/models/event.model";
import React, { useEffect, useState } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const EventCountdown = ({ event }: { event: IEvent }) => {
  const calculateTimeLeft = () => {
    const now = new Date().getTime(); // Get current time in milliseconds
    const eventDate = new Date(event.startDateTime).getTime(); // Get event time in milliseconds

    const difference = eventDate - now;
    let timeLeft: TimeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        ),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    // Clear the timer when the component is unmounted
    return () => clearTimeout(timer);
  }, [timeLeft]);

  const countdownObj = [
    {
      title: "Days",
      value: timeLeft.days,
    },
    {
      title: "Hours",
      value: timeLeft.hours,
    },
    {
      title: "Minutes",
      value: timeLeft.minutes,
    },
    {
      title: "Seconds",
      value: timeLeft.seconds,
    },
  ];

  return (
    <>
      <p className="purple_gradient text-4xl font-semibold">Event Countdown</p>
      <div className="flex gap-4 justify-center mt-4">
        {countdownObj.map((item) => (
          <div key={item.title} className="flex flex-col items-center">
            <p className="h3-medium">{item.value}</p>
            <p className="p-medium-16">{item.title}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default EventCountdown;
