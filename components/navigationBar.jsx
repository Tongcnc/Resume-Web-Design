import "../src/App.css";

function NavigationBar() {
  return (
    <div className="nav-container">
      <li>Home</li>
      <li>About me</li>
      <li>
        <img
          src="https://iconmonstr.com/wp-content/g/gd/makefg.php?i=../releases/preview/2012/png/iconmonstr-user-19.png&r=255&g=38&b=248"
          alt="profile-icon"
          width="30px"
        />
      </li>
      <li>Work</li>
      <li>Contact</li>
    </div>
  );
}

export default NavigationBar;
