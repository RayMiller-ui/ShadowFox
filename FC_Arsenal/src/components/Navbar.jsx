export default function Navbar() {
  return (
    <header style={styles.header}>
      <div style={styles.logoContainer}>
        <img src="/arsenal.svg" alt="Arsenal Logo" style={styles.logoImage} />
        <div style={styles.logo}>ARSENAL FC</div>
      </div>

      <nav style={styles.nav}>
        <a href="#home" className="nav-link">HOME</a>
        <a href="#squad" className="nav-link">SQUAD</a>
        <a href="https://www.arsenal.com/fixtures" className="nav-link">FIXTURES</a>
        <a href="#about" className="nav-link">ABOUT</a>
        <a href="#contact" className="nav-link">CONTACT</a>
      </nav>
    </header>
  );
}

const styles = {
  header: {
    position: "sticky",
    top: 0,
    zIndex: 100,
    backgroundColor: "#db0007",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px 60px",
  },

  logoContainer: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
  logoImage: {
    height: "40px",
    width: "auto",
  },
  logo: {
    fontWeight: 800,
    fontSize: "20px",
    letterSpacing: "2px",
    color: "#fff",
  },

  nav: {
    display: "flex",
    gap: "30px",
    fontWeight: 600,
  },
};
