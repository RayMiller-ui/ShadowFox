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
    </footer>
  );
}

const styles = {
  footer: {
    backgroundColor: "#050505",
    padding: "80px 40px 40px",
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
    paddingTop: "40px",
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
};
