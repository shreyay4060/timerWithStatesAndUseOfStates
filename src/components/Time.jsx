import React, { useState } from "react";

export default function Time() {
  const currentTime = new Date().toLocaleTimeString();

  const [time, setTime] = useState(currentTime);

  function update() {
    setTime(new Date().toLocaleTimeString());
  }

  setInterval(update, 1000);

  return <h1>{time}</h1>;
}
