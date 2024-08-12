import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="teal lighten-1">
      <div className="nav-wrapper teal lighten-1">
        <Link to="/" className="brand-logo">
          Food Project
        </Link>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <Link to="/about">About</Link>
          </li>

          <li>
            <Link to="/contact">Contacts</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export { Header };
