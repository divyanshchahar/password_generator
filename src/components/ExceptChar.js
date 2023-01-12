import { useState } from "react";

function ExceptChar({ stateFunc }) {
  const [localStatae, setLocalState] = useState();

  return (
    <input
      type="text"
      value={localStatae}
      onChange={(e) => {
        setLocalState(e.target.value);
        stateFunc(e.target.value);
      }}
      placeholder="All characters except"
    />
  );
}

export default ExceptChar;
