import { Button } from 'react-bootstrap';
import { getBrochureUrl } from './helpers';

const HomeNavbar = () => {
  return (
    <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Logo
      </a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <div className="mx-auto" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
            <a className="nav-link" href="#">
              Home
            </a>
          </li>
          <li className="nav-item active">
            <a className="nav-link" href="#">
              Contact us
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
      <a href={getBrochureUrl()}>
      <Button variant="primary" className='rounded-0'>
          <i className="bi bi-download"/>
          <span style={{paddingLeft:"10px"}}>Brochure</span>
      </Button>
      </a>
      </div>
    </nav>
  );
};
export default HomeNavbar;
