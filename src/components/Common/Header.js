
import { Link } from 'react-router-dom';
import './Header.scss';

function Header() {
  return (
      <header className="app-header">
          <span className="title">
            DCSDB
          </span>
          <div className="navigation">
            <Link className="app-header-link" to="/aircraft">
              <span className="link-text">
                Aircraft
              </span>
              <span className="material-icons link-icon">airplanemode_active</span>
            </Link>
            <Link className="app-header-link" to="/weapons">
              <span className="link-text">
                Weapons
              </span>
              <span className="material-icons link-icon">workspaces</span>
            </Link>
            <Link className="app-header-link" to="/about">
              <span className="link-text">
                About
              </span>
              <span className="material-icons link-icon">info</span>
            </Link>
          </div>
      </header>
  );
}

export default Header;
