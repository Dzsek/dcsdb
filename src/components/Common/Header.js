
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
              <span>
                Aircraft
              </span>
            </Link>
            <Link className="app-header-link" to="/weapons">
              <span>
                Weapons
              </span>
            </Link>
          </div>
      </header>
  );
}

export default Header;
