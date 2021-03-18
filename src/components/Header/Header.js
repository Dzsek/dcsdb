
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
      <header className="app-header">
          <Link className="app-header-link" to="/">
            <p>
              DCSDB
            </p>
          </Link>
      </header>
  );
}

export default Header;
