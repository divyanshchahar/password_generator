import { useState } from "react";

function NumberOfChar({ stateFunc }) {
  const [localStatae, setLocalState] = useState();

  return (
    <div className="input-interface">
      <input
        type="number"
        value={localStatae}
        min="2"
        max="90"
        onChange={(e) => {
          setLocalState(e.target.value);
          stateFunc(e.target.value);
        }}
        placeholder="2-90"
      />
    </div>
  );
}

export default NumberOfChar;
