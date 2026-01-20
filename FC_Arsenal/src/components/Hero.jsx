export default function Hero() {
  return (
    <section style={styles.hero}>
      <div style={styles.overlay}>
        <div style={styles.content}>
          <span style={styles.subtitle}>EST. 1886 • NORTH LONDON</span>
          <h1 style={styles.title}>VICTORY THROUGH HARMONY</h1>
          <p style={styles.description}>
            Experience the passion, the history, and the future of Arsenal Football Club.
          </p>
          <div style={styles.buttonGroup}>
            <button style={styles.primaryButton}>MATCH TICKETS</button>
            <button style={styles.secondaryButton}>VISIT THE STORE</button>
          </div>
        </div>
      </div>
    </section>
  );
}

const styles = {
  hero: {
    height: "95vh",
    backgroundImage: "url('/emirates.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    position: "relative",
  },
  overlay: {
    height: "100%",
    width: "100%",
    background: "linear-gradient(to right, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.1) 100%)",
    display: "flex",
    alignItems: "center",
    paddingLeft: "8%",
  },
  content: {
    maxWidth: "600px",
    color: "#fff",
  },
  subtitle: {
    display: "block",
    fontSize: "0.9rem",
    letterSpacing: "3px",
    fontWeight: "600",
    color: "#db0007",
    marginBottom: "15px",
    textTransform: "uppercase",
  },
  title: {
    fontSize: "4rem",
    lineHeight: "1.1",
    fontWeight: "800",
    marginBottom: "20px",
    textTransform: "uppercase",
    letterSpacing: "-1px",
  },
  description: {
    fontSize: "1.1rem",
    color: "#dcdcdc",
    marginBottom: "35px",
    lineHeight: "1.6",
  },
  buttonGroup: {
    display: "flex",
    gap: "20px",
  },
  primaryButton: {
    padding: "15px 35px",
    backgroundColor: "#db0007",
    color: "#fff",
    border: "2px solid #db0007",
    fontWeight: "700",
    textTransform: "uppercase",
    cursor: "pointer",
    letterSpacing: "1px",
    transition: "all 0.3s ease",
  },
  secondaryButton: {
    padding: "15px 35px",
    backgroundColor: "transparent",
    color: "#fff",
    border: "2px solid #fff",
    fontWeight: "700",
    textTransform: "uppercase",
    cursor: "pointer",
    letterSpacing: "1px",
    transition: "all 0.3s ease",
  },
};

