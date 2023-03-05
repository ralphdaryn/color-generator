import React, { useState } from "react";
import SingleColor from "./SingleColor";

import Values from "values.js";

function App() {
  const [colour, setColour] = useState("");
  const [error, setError] = useState(false);
  const [list, setList] = useState(new Values("#234234").all(10));

  const handleSubmit = (event) => {
    event.preventDefault();
    try {
      let colours = new Values(colour).all(10);
      setList(colours);
      setError(false);
    } catch (error) {
      setError(true);
    }
  };

  return (
    <>
      <section className="container">
        <h3>Colour Generator</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={colour}
            onChange={(e) => setColour(e.target.value)}
            placeholder="Pick a colour"
            className={`${error ? "error" : null}`}
          />
          <button type="submit" className="btn">
            Submit
          </button>
        </form>
      </section>
      <section className="colors">
        {list.map((colour, index) => {
          return (
            <SingleColor
              key={index}
              {...colour}
              index={index}
              hexColour={colour.hex}
            />
          );
        })}
      </section>
    </>
  );
}

export default App;
