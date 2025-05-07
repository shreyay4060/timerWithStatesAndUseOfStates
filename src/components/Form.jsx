import React, { useState } from "react";

export default function Form() {
  const [name, setName] = useState("");

  function updateName(event) {
    setName(event.target.value);
  }

  const [heading, setHeading] = useState("");

  function onClick(event) {
    setHeading(name);
    // event.preventDefault();
  }

  return (
    <>
      <div className="container">
        <form onSubmit={onClick}>
          <h1>Hello {heading}</h1>
          <input
            type="text"
            onChange={updateName}
            placeholder="What's your name ? "
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}
