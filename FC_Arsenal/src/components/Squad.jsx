import { squad } from "../data/squad";

export default function Squad() {
  return (
    <section>
      <h2 style={styles.title}>First Team Squad</h2>

      <div style={styles.grid}>
        {squad.map((player) => (
          <div key={player.id} style={styles.card}>
            <span style={styles.number}>#{player.number}</span>

            <h3>{player.name}</h3>
            <p>{player.position}</p>

            <span style={styles.nation}>{player.nationality}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

const styles = {
  title: {
    marginBottom: "40px",
    fontSize: "32px",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "25px",
  },

  card: {
    backgroundColor: "#1a1a1a",
    padding: "30px 25px",
    borderLeft: "5px solid #db0007",
    transition: "transform 0.3s ease, background 0.3s ease",
  },

  number: {
    color: "#db0007",
    fontWeight: 800,
    fontSize: "18px",
  },

  nation: {
    display: "block",
    marginTop: "10px",
    fontSize: "14px",
    color: "#999",
  },
};
