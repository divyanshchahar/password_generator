import { useState } from "react";
import ExceptChar from "../components/ExceptChar";
import NumberOfChar from "../components/NumberOfChar";
import GeneratePassword from "../utils/GeneratePassword";

function PasswordLayout() {
  const [password, setPassword] = useState("No Password Generated");
  const [charCount, setCharCount] = useState();
  const [exceptChar, setExceptChar] = useState();

  return (
    <div className="password-container">
      <p className="password">{password}</p>
      <NumberOfChar stateFunc={setCharCount} />
      <ExceptChar stateFunc={setExceptChar} />
      <div
        className="generate-button"
        onClick={() => {
          if (charCount) {
            GeneratePassword(charCount, exceptChar, setPassword);
          } else {
            alert("please speify the number of chaharctes in the password");
          }
        }}
      >
        {" "}
        Generate Password
      </div>
    </div>
  );
}

export default PasswordLayout;
