import { squad } from "../data/squad";

export default function Footer() {
  const goalkeepers = squad.filter((p) => p.position === "Goalkeeper");
  const defenders = squad.filter((p) => p.position === "Defender");
  const midfielders = squad.filter((p) => p.position === "Midfielder");
  const forwards = squad.filter((p) => p.position === "Forward" || p.position === "Winger");

  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        {/* Squad Columns */}
        <div style={styles.column}>
          <h4 style={styles.heading}>Goalkeepers</h4>
          <ul style={styles.list}>
            {goalkeepers.map((p) => (
              <li key={p.id} style={styles.listItem}>{p.name}</li>
            ))}
          </ul>
        </div>

        <div style={styles.column}>
          <h4 style={styles.heading}>Defenders</h4>
          <ul style={styles.list}>
            {defenders.map((p) => (
              <li key={p.id} style={styles.listItem}>{p.name}</li>
            ))}
          </ul>
        </div>

        <div style={styles.column}>
          <h4 style={styles.heading}>Midfielders</h4>
          <ul style={styles.list}>
            {midfielders.map((p) => (
              <li key={p.id} style={styles.listItem}>{p.name}</li>
            ))}
          </ul>
        </div>

        <div style={styles.column}>
          <h4 style={styles.heading}>Forwards</h4>
          <ul style={styles.list}>
            {forwards.map((p) => (
              <li key={p.id} style={styles.listItem}>{p.name}</li>
            ))}
          </ul>
        </div>

        {/* Link Columns */}
        <div style={styles.column}>
          <h4 style={styles.heading}>Arsenal Products</h4>
          <ul style={styles.list}>
            <li style={styles.listItem}><a href="#" style={styles.link}>Official Membership</a></li>
            <li style={styles.listItem}><a href="#" style={styles.link}>Arsenal Direct</a></li>
            <li style={styles.listItem}><a href="#" style={styles.link}>Tickets & Museum</a></li>
            <li style={styles.listItem}><a href="#" style={styles.link}>Arsenal App</a></li>
          </ul>
        </div>

        <div style={styles.column}>
          <h4 style={styles.heading}>Club</h4>
          <ul style={styles.list}>
            <li style={styles.listItem}><a href="#" style={styles.link}>Emirates Stadium</a></li>
            <li style={styles.listItem}><a href="#" style={styles.link}>Corporate</a></li>
            <li style={styles.listItem}><a href="#" style={styles.link}>Careers</a></li>
            <li style={styles.listItem}><a href="#" style={styles.link}>Accessibility</a></li>
          </ul>
        </div>

        <div style={styles.column}>
          <h4 style={styles.heading}>History</h4>
          <ul style={styles.list}>
            <li style={styles.listItem}><a href="#" style={styles.link}>Honours</a></li>
            <li style={styles.listItem}><a href="#" style={styles.link}>Legends</a></li>
            <li style={styles.listItem}><a href="#" style={styles.link}>The Invincibles</a></li>
            <li style={styles.listItem}><a href="#" style={styles.link}>Highbury</a></li>
          </ul>
        </div>
      </div>

      <div style={styles.bottomBar}>
        <div style={styles.branding}>
          <img src="/arsenal.svg" alt="Arsenal Logo" style={styles.logoImage} />
          <h3 style={styles.logo}>ARSENAL FC</h3>
          <p style={styles.copyright}>© {new Date().getFullYear()} The Arsenal Football Club PLC.</p>
        </div>
        <div style={styles.legal}>
          <a href="#" style={styles.legalLink}>Legal Terms</a> |
          <a href="#" style={styles.legalLink}>Privacy Policy</a> |
          <a href="#" style={styles.legalLink}>Cookies</a> |
          <a href="#" style={styles.legalLink}>Accessibility</a>
        </div>
      </div>

      <div style={styles.subFooter}>
        <p style={styles.designerText}>
          Designed by <span style={styles.name}>BABLU KUMAR</span>
        </p>
        <p style={styles.madeWithLove}>
          Made with Love
        </p>
        <div style={styles.socialLinks}>
          <a href="https://github.com/bablu-kumar" target="_blank" rel="noopener noreferrer" style={styles.iconLink} aria-label="GitHub">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
          </a>
          <a href="https://linkedin.com/in/bablu-kumar" target="_blank" rel="noopener noreferrer" style={styles.iconLink} aria-label="LinkedIn">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect x="2" y="9" width="4" height="12"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    backgroundColor: "#050505",
    padding: "80px 40px 0", // Ensure no bottom padding so sub-footer hits the edge if needed
    color: "#fff",
    fontFamily: "'Montserrat', sans-serif",
    borderTop: "1px solid #222",
  },
  container: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
    gap: "40px",
    maxWidth: "1400px",
    margin: "0 auto 80px",
  },
  column: {
    display: "flex",
    flexDirection: "column",
  },
  heading: {
    color: "#fff",
    fontSize: "16px",
    fontWeight: "800",
    marginBottom: "20px",
    textTransform: "uppercase",
  },
  list: {
    listStyle: "none",
    padding: 0,
    margin: 0,
  },
  listItem: {
    marginBottom: "10px",
    fontSize: "13px",
    color: "#999",
  },
  link: {
    color: "#999",
    textDecoration: "none",
    transition: "color 0.2s",
  },
  bottomBar: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "40px 0",
    borderTop: "1px solid #222",
    maxWidth: "1400px",
    margin: "0 auto",
    gap: "20px",
  },
  branding: {
    display: "flex",
    alignItems: "center",
    gap: "20px",
  },
  logoImage: {
    height: "30px",
    width: "auto",
  },
  logo: {
    fontSize: "20px",
    fontWeight: "800",
    color: "#db0007", // Arsenal Red
  },
  copyright: {
    fontSize: "12px",
    color: "#666",
  },
  legal: {
    fontSize: "12px",
    color: "#666",
  },
  legalLink: {
    color: "#666",
    textDecoration: "none",
    margin: "0 10px",
  },
  // Sub-Footer Styles
  subFooter: {
    backgroundColor: "#000",
    borderTop: "1px solid #111",
    padding: "20px 40px",
    marginTop: "0",
    marginLeft: "-40px",
    marginRight: "-40px",
    display: "flex",
    justifyContent: "space-between", // Horizontal layout: Left & Right
    alignItems: "center",
  },
  designerText: {
    fontSize: "14px",
    color: "#888",
    margin: 0,
    fontFamily: "var(--font-body)",
    letterSpacing: "1px",
    fontWeight: "500",
  },
  name: {
    color: "#db0007",
    fontWeight: "700",
    textTransform: "uppercase",
  },
  madeWithLove: {
    fontSize: "14px",
    color: "#666",
    margin: 0,
    fontWeight: "500",
    letterSpacing: "0.5px",
  },
  socialLinks: {
    display: "flex",
    gap: "15px",
    alignItems: "center",
  },
  iconLink: {
    color: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "color 0.3s ease, transform 0.2s ease",
  }
};
