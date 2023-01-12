import { useState } from "react";

function ExceptChar({ stateFunc }) {
  const [localStatae, setLocalState] = useState();

  return (
    <div className="input-interface">
      <input
        type="text"
        value={localStatae}
        onChange={(e) => {
          setLocalState(e.target.value);
          stateFunc(e.target.value);
        }}
        placeholder="All characters except"
      />
    </div>
  );
}

export default ExceptChar;
