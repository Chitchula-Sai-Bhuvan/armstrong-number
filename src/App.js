import React from "react";

function App() {
  // Create an array of numbers from 1 to 10
  const numbers = Array.from({ length: 10 }, (_, i) => i + 1);

  return (
    <div style={{ textAlign: "center", marginTop: "50px", fontFamily: "Arial" }}>
      <h1>Natural Numbers from 1 to 10</h1>
      <ul style={{ listStyleType: "none", padding: 0, fontSize: "20px" }}>
        {numbers.map((num) => (
          <li key={num} style={{ margin: "5px 0", color: "green" }}>
            {num}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
