import "../src/App.css";
import { useNavigate } from "react-router-dom";

function NavigationBar() {
  const navigate = useNavigate();

  return (
    <div className="nav-container">
      <li onClick={() => navigate("/")}>Home</li>
      <li onClick={() => navigate("/page/educationAndWork")}>About me</li>
      <li>
        <img
          src="https://iconmonstr.com/wp-content/g/gd/makefg.php?i=../releases/preview/2012/png/iconmonstr-user-19.png&r=255&g=38&b=248"
          alt="profile-icon"
          width="30px"
        />
      </li>
      <li onClick={() => navigate("/page/portfolio")}>Work</li>
      <li onClick={() => navigate("/page/contact")}>Contact</li>
    </div>
  );
}

export default NavigationBar;
