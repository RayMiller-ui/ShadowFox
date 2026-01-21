import "./Navbar.css";

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="nav-logo-container">
        <img src="/arsenal.svg" alt="Arsenal Logo" className="nav-logo-image" />
        <div className="nav-logo-text">ARSENAL FC</div>
      </div>

      <nav className="nav-menu">
        <a href="#home" className="nav-link">HOME</a>
        <a href="#squad" className="nav-link">SQUAD</a>
        <a href="https://www.arsenal.com/fixtures" className="nav-link nav-link-optional">FIXTURES</a>
        <a href="#about" className="nav-link nav-link-optional">ABOUT</a>
        <a href="#contact" className="nav-link nav-link-optional">CONTACT</a>
      </nav>
    </header>
  );
}


