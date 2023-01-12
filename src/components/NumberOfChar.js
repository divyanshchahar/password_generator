import { useState } from "react";

function NumberOfChar(stateFunc) {
  const [charCount, setCharCount] = useState();

  return (
    <input
      type="number"
      value={charCount}
      min="2"
      max="90"
      onChange={(e) => {
        setCharCount(e.target.value);
      }}
      placeholder="2-90"
    />
  );
}

export default NumberOfChar;
