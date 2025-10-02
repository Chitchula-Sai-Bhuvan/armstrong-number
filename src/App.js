import React, { useState } from "react";

export default function ArmstrongChecker() {
  const [number, setNumber] = useState("");
  const [result, setResult] = useState(null);

  // Function to check Armstrong number
  const isArmstrong = (num) => {
    const strNum = num.toString();
    const power = strNum.length;
    let sum = 0;

    for (let digit of strNum) {
      sum += Math.pow(parseInt(digit), power);
    }

    return sum === num;
  };

  const handleCheck = () => {
    const num = parseInt(number, 10);
    if (isNaN(num)) {
      setResult("Please enter a valid number");
    } else {
      setResult(isArmstrong(num) ? `${num} is an Armstrong number ✅` : `${num} is NOT an Armstrong number ❌`);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Armstrong Number Checker</h2>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        placeholder="Enter a number"
      />
      <button onClick={handleCheck} style={{ marginLeft: "10px" }}>
        Check
      </button>
      {result && <h3>{result}</h3>}
    </div>
  );
}
