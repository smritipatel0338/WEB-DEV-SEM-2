
import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">

      <div className="card">

        <h1>React Counter Application</h1>

        <h2 className="count">{count}</h2>

        <div className="button-container">

          <button className="button" onClick={() => setCount(count + 1)}>
            Increment (+)
          </button>

          <button className="button" onClick={() => setCount(count - 1)}>
            Decrement (-)
          </button>

        </div>

        <button
          className="button reset-btn"
          onClick={() => setCount(0)}
        >
          Reset
        </button>

      </div>

    </div>
  );
}

export default App;

