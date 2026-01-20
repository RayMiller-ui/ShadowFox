export default function Navbar() {
  return (
    <header style={styles.header}>
      <div style={styles.logo}>ARSENAL FC</div>

      <nav style={styles.nav}>
        <a href="#home" className="nav-link">Home</a>
        <a href="#squad" className="nav-link">Squad</a>
        {/* Fixtures section isn't explicitly built yet, mapping to Home or keeping empty for now */}
        <a href="https://www.arsenal.com/fixtures" className="nav-link">Fixtures</a>
        <a href="#about" className="nav-link">About</a>
        <a href="#contact" className="nav-link">Contact</a>
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

  logo: {
    fontWeight: 800,
    fontSize: "20px",
    letterSpacing: "2px",
  },

  nav: {
    display: "flex",
    gap: "30px",
    fontWeight: 500,
  },
};
