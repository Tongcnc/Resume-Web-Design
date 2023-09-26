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
        <img
          src="https://iconmonstr.com/wp-content/g/gd/makefg.php?i=../releases/preview/7.3.0/png/iconmonstr-menu-lined.png&r=255&g=255&b=255"
          alt="menu-icon"
          width="35px"
          className="menu-icon"
          onClick={toggleMenu}
        />
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
              skills
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
              Work
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
    </>
  );
}

export default NavigationBar;
