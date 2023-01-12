import lock from "../assets/lock_logo.svg";
import github from "../assets/github_logo.svg";

function Header() {
  return (
    <div className="header">
      <img className="header-image" src={lock} alt="" />

      <div>Password Generator</div>

      <a
        href="https://github.com/divyanshchahar/password_generator"
        target="_blank"
        rel="noreferrer"
      >
        <img className="header-image" src={github} alt="" />
      </a>

      {/* <img
        className="header-image"
        src={github}
        alt=""
        href="https://github.com/divyanshchahar/password_generator"
      /> */}
    </div>
  );
}

export default Header;
