import { Container } from "react-bootstrap";
import Button from  "../Button"

const HomeNavbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Logo
      </a>
      <div className="mx-auto" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#">
              About us
            </a>
          </li>
          <li className="nav-item active">
            <a className="nav-link" href="#">
              Programs
            </a>
          </li>
          <li className="nav-item active">
            <a className="nav-link" href="#">
              Events
            </a>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdownMenuLink"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              More
            </a>
            <div
              className="dropdown-menu"
              aria-labelledby="navbarDropdownMenuLink"
            >
              <a className="dropdown-item" href="#">
                Action
              </a>
              <a className="dropdown-item" href="#">
                Another action
              </a>
              <a className="dropdown-item" href="#">
                Something else here
              </a>
            </div>
          </li>
        </ul>
      </div>
      <Button label='Join' variant="primary"/>
    </nav>
  );
};
export default HomeNavbar;
