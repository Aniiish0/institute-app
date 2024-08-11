import { Button } from "react-bootstrap";
import { getBrochureUrl } from "./helpers";
import { useEffect, useState } from "react";

const HomeNavbar = () => {
  const [activeLink, setActiveLink] = useState("home");

  const handleScroll = () => {
    const sections = document.querySelectorAll("section");
    const scrollPosition = window.scrollY + 250; // Adjust this value as needed

    sections.forEach((section) => {
      if (
        scrollPosition >= section.offsetTop &&
        scrollPosition < section.offsetTop + section.offsetHeight
      ) {
        const currentSectionId = section.getAttribute("id") ?? "none";
        setActiveLink(currentSectionId);
      }
    });
  };

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    targetSectionId: string,
  ) => {
    e.preventDefault();
    const section = document.getElementById(targetSectionId);
    if (!section) return;
    const offsetPosition = section.offsetTop - 75; // Adjust this value as needed
    window.scrollTo({
      top: offsetPosition,
    });
    setActiveLink(targetSectionId);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light px-3 py-2 shadow-sm">
      <h1 className="custom-h1">XY</h1>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <div className="mx-auto">
          <ul className="navbar-nav mr-auto">
            <li className={`nav-item ${activeLink === "home" ? "active" : ""}`}>
              <a
                className="nav-link"
                href="#"
                onClick={(e) => handleNavClick(e, "home")}
              >
                Home
              </a>
            </li>
            <li
              className={`nav-item ${activeLink === "contact-us" ? "active" : ""}`}
            >
              <a
                className="nav-link"
                href="#"
                onClick={(e) => handleNavClick(e, "contact-us")}
              >
                Contact us
              </a>
            </li>
            <li
              className={`nav-item ${activeLink === "events" ? "active" : ""}`}
            >
              <a
                className="nav-link"
                href="#"
                onClick={(e) => handleNavClick(e, "events")}
              >
                Events
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Class
              </a>
              <div
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <a className="dropdown-item" href="#">
                  LKG
                </a>
                <a className="dropdown-item" href="#">
                  UKG
                </a>
                <a className="dropdown-item" href="#">
                  class 1
                </a>
              </div>
            </li>
          </ul>
        </div>
        <a href={getBrochureUrl()} className="nav-item">
          <Button variant="primary" className="rounded-0">
            <i className="bi bi-download" />
            <span style={{ paddingLeft: "10px" }}>Brochure</span>
          </Button>
        </a>
      </div>
    </nav>
  );
};
export default HomeNavbar;
