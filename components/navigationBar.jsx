import { useState } from "react";
import "../src/App.css";
import { HashLink as Link } from "react-router-hash-link";

function NavigationBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const toggleDarkMode = () => {
    document.body.classList.toggle("dark-theme");
    setIsOpen(false);
  };

  return (
    <>
      {/* Menu icon for Mobile Version */}
      <div className="container-mobile-icon">
        <div>
          <Link smooth to="#top">
            <img
              src="https://iconmonstr.com/wp-content/g/gd/makefg.php?i=../releases/preview/2012/png/iconmonstr-user-19.png&r=255&g=38&b=248"
              alt="profile-icon"
              width="30px"
              id="profile-icon"
            />
          </Link>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="menu-icon"
          width="35px"
          onClick={toggleMenu}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>

        {/* <img
          src="https://iconmonstr.com/wp-content/g/gd/makefg.php?i=../releases/preview/7.3.0/png/iconmonstr-menu-lined.png&r=255&g=255&b=255"
          alt="menu-icon"
          width="35px"
          className="menu-icon"
          onClick={toggleMenu}
        /> */}
      </div>

      {isOpen && (
        <div className="nav-container-mobile">
          <li className="link">
            <Link
              smooth
              to="#top"
              onClick={closeMenu}
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              About me
            </Link>
          </li>
          <li className="link">
            <Link
              smooth
              to="#education"
              onClick={closeMenu}
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              experiences
            </Link>
          </li>
          <li className="link">
            <Link
              smooth
              to="#skill"
              onClick={closeMenu}
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              abilities
            </Link>
          </li>
          <li className="link">
            <Link
              smooth
              to="#projects"
              onClick={closeMenu}
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              Projects
            </Link>
          </li>
          <li className="link">
            <Link
              smooth
              to="#contact"
              onClick={closeMenu}
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              Contact
            </Link>
          </li>
        </div>
      )}

      {/* Menu Bar */}
      <div className="nav-main">
        <div className="nav-container">
          <li className="link">
            <Link smooth to="#top">
              About me
            </Link>
          </li>
          <li className="link">
            <Link smooth to="#skill">
              Abilities
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
              Projects
            </Link>
          </li>
          <li className="link">
            <Link smooth to="#contact">
              Contact
            </Link>
          </li>
        </div>

        {/* drak mode */}
        <button className="dark-mode" onClick={toggleDarkMode}>
          {document.body.classList.contains("dark-theme") ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="sun-icon"
              width="30px"
              id="icon"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="moon-icon"
              width="25px"
              id="icon"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
              />
            </svg>
          )}
        </button>
      </div>
    </>
  );
}

export default NavigationBar;
