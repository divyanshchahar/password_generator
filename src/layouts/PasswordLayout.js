import { useState } from "react";
import ExceptChar from "../components/ExceptChar";
import NumberOfChar from "../components/NumberOfChar";

function PasswordLayout() {
  const [password, setPassword] = useState();
  const [charCount, setCharCount] = useState();
  const [exceptChar, setExceptChar] = useState();

  return (
    <div>
      <p>{password}</p>
      <NumberOfChar stateFunc={setCharCount} />
      <ExceptChar stateFunc={setExceptChar} />
    </div>
  );
}

export default PasswordLayout;
