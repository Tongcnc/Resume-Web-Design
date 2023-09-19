import "../src/App.css";
import { HashLink as Link } from "react-router-hash-link";

function NavigationBar() {
  return (
    <div className="nav-container">
      <li className="link">
        <Link smooth to="#top">
          About me
        </Link>
      </li>
      <li className="link">
        <Link smooth to="#skill">
          skills
        </Link>
      </li>
      <li>
        <Link smooth to="#top">
          <img
            src="https://iconmonstr.com/wp-content/g/gd/makefg.php?i=../releases/preview/2012/png/iconmonstr-user-19.png&r=255&g=38&b=248"
            alt="profile-icon"
            width="45px"
            id="profile-icon"
          />
        </Link>
      </li>
      <li className="link">
        <Link smooth to="#projects">
          Work
        </Link>
      </li>
      <li className="link">
        <Link smooth to="#contact">
          Contact
        </Link>
      </li>
    </div>
  );
}

export default NavigationBar;
