export default function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.top}>
        <h3>ARSENAL FOOTBALL CLUB</h3>
        <p>Victoria Concordia Crescit</p>
      </div>

      <div style={styles.bottom}>
        <p>© {new Date().getFullYear()} Arsenal FC. All rights reserved.</p>
        <p>Unofficial fan-made academic project</p>
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    backgroundColor: "#0b0b0b",
    padding: "60px",
    marginTop: "80px",
  },

  top: {
    marginBottom: "30px",
  },

  bottom: {
    borderTop: "1px solid #222",
    paddingTop: "20px",
    fontSize: "14px",
    color: "#777",
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    gap: "10px",
  },
};
