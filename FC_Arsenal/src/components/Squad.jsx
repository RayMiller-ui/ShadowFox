
import { useState } from "react";
import { squad } from "../data/squad";
import { playerStats } from "../data/stats";

export default function Squad() {
  const [selectedPlayerId, setSelectedPlayerId] = useState(squad[0].id);

  const selectedPlayer = squad.find((p) => p.id === selectedPlayerId);
  const stats = playerStats[selectedPlayerId];

  const handleNext = () => {
    const currentIndex = squad.findIndex((p) => p.id === selectedPlayerId);
    const nextIndex = (currentIndex + 1) % squad.length;
    setSelectedPlayerId(squad[nextIndex].id);
  };

  const handlePrev = () => {
    const currentIndex = squad.findIndex((p) => p.id === selectedPlayerId);
    const prevIndex = (currentIndex - 1 + squad.length) % squad.length;
    setSelectedPlayerId(squad[prevIndex].id);
  };

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        {/* Left Column: Player Details */}
        <div style={styles.leftCol}>
          <div style={styles.header}>
            <span style={styles.label}>PLAYERS</span>
            <span style={styles.viewAll}>VIEW ALL</span>
          </div>

          <div style={styles.playerInfo}>
            <h1 style={styles.playerName}>
              {selectedPlayer.name.toUpperCase()}
              <span style={styles.captainBadge}>C</span>
            </h1>
            <span style={styles.positionBadge}>{selectedPlayer.position.toUpperCase()}</span>

            <div style={styles.statsGrid}>
              <div style={styles.statItem}>
                <span style={styles.statValue}>{stats?.matches || "-"}</span>
                <span style={styles.statLabel}>MATCHES</span>
              </div>
              <div style={styles.statItem}>
                <span style={styles.statValue}>{stats?.goals || "0"}</span>
                <span style={styles.statLabel}>GOALS</span>
              </div>
              <div style={styles.statItem}>
                <span style={styles.statValue}>{stats?.assists || "0"}</span>
                <span style={styles.statLabel}>ASSISTS</span>
              </div>
              <div style={styles.statItem}>
                <span style={styles.statValue}>{stats?.minutesPlayed || "-"}</span>
                <span style={styles.statLabel}>MINUTES</span>
              </div>
            </div>

            <p style={styles.bio}>{stats?.bio || "No biography available."}</p>

            <button style={styles.ctaButton}>VIEW PROFILE</button>
          </div>
        </div>

        {/* Center Column: Player Image */}
        <div style={styles.centerCol}>
          <button onClick={handlePrev} style={styles.navButton}>
            ←
          </button>
          <div style={styles.imageWrapper}>
            <div style={styles.circleBg}></div>
            <img
              src={stats?.image || "https://via.placeholder.com/400x600"}
              alt={selectedPlayer.name}
              style={styles.playerImage}
            />
          </div>
          <button onClick={handleNext} style={styles.navButton}>
            →
          </button>
        </div>

        {/* Right Column: Player List */}
        <div style={styles.rightCol}>
          <div style={styles.listContainer}>
            {squad.map((player) => (
              <div
                key={player.id}
                style={{
                  ...styles.listItem,
                  ...(selectedPlayerId === player.id ? styles.activeListItem : {}),
                }}
                onClick={() => setSelectedPlayerId(player.id)}
              >
                <div style={styles.listAvatar}>
                  <img
                    src={playerStats[player.id]?.image}
                    alt={player.name}
                    style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "50%" }}
                  />
                </div>
                <div style={styles.listInfo}>
                  <span style={styles.listName}>{player.name.toUpperCase()}</span>
                </div>
                {selectedPlayerId === player.id && <div style={styles.activeIndicator}></div>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: "40px",
    backgroundColor: "#ffffff",
    color: "#0f0f0f",
    minHeight: "80vh",
    display: "flex",
    alignItems: "center",
  },
  container: {
    display: "grid",
    gridTemplateColumns: "1.2fr 1.5fr 0.8fr",
    gap: "20px",
    width: "100%",
    maxWidth: "1400px",
    margin: "0 auto",
  },
  leftCol: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  header: {
    display: "flex",
    alignItems: "center",
    gap: "20px",
    marginBottom: "40px",
  },
  label: {
    fontSize: "24px",
    fontWeight: "800",
    color: "#2a0a38", // Using a dark purple/blue from ref image or similar
    // Actually, let's stick to arsenal:
    color: "var(--arsenal-dark)",
  },
  viewAll: {
    fontSize: "12px",
    fontWeight: "600",
    color: "#666",
    cursor: "pointer",
  },
  playerName: {
    fontSize: "48px",
    fontWeight: "800",
    lineHeight: "1",
    marginBottom: "10px",
    color: "var(--arsenal-dark)", // Dark blue/purple in ref, using arsenal dark
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
  captainBadge: {
    backgroundColor: "var(--arsenal-gold)",
    color: "#fff",
    fontSize: "14px",
    padding: "2px 8px",
    borderRadius: "50%",
    verticalAlign: "middle",
  },
  positionBadge: {
    display: "inline-block",
    backgroundColor: "#e0dbe6", // Light purple bg
    color: "#4b0082", // Dark purple text
    padding: "5px 10px",
    borderRadius: "4px",
    fontSize: "12px",
    fontWeight: "700",
    marginBottom: "30px",
  },
  statsGrid: {
    display: "flex",
    justifyContent: "space-between",
    borderTop: "1px solid #eee",
    borderBottom: "1px solid #eee",
    padding: "20px 0",
    marginBottom: "20px",
  },
  statItem: {
    textAlign: "center",
    padding: "0 10px",
    borderRight: "1px solid #eee",
    flex: 1,
  },
  statValue: {
    display: "block",
    fontSize: "24px",
    fontWeight: "800",
    color: "var(--arsenal-dark)",
  },
  statLabel: {
    fontSize: "10px",
    color: "#888",
    fontWeight: "600",
  },
  bio: {
    fontSize: "14px",
    color: "#666",
    lineHeight: "1.6",
    marginBottom: "30px",
  },
  ctaButton: {
    backgroundColor: "var(--arsenal-gold)",
    color: "var(--arsenal-dark)",
    border: "none",
    padding: "15px 30px",
    fontWeight: "800",
    fontSize: "14px",
    cursor: "pointer",
    transition: "background 0.3s",
  },
  centerCol: {
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  circleBg: {
    position: "absolute",
    width: "450px",
    height: "450px",
    borderRadius: "50%",
    border: "2px dashed #ccc", // Dotted circle
    zIndex: 0,
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
  playerImage: {
    zIndex: 1,
    height: "550px",
    objectFit: "contain",
    position: "relative",
    bottom: "-20px", // Align slightly downwards
  },
  navButton: {
    background: "#aa9cc2", // Light purple nav
    color: "#fff",
    border: "none",
    width: "40px",
    height: "40px",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "20px",
    zIndex: 2,
    margin: "0 20px",
  },
  rightCol: {
    borderLeft: "1px solid #eee",
    paddingLeft: "20px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  listContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  listItem: {
    display: "flex",
    alignItems: "center",
    gap: "15px",
    padding: "15px",
    cursor: "pointer",
    borderBottom: "1px solid #f5f5f5",
    transition: "all 0.2s",
    position: "relative",
  },
  activeListItem: {
    backgroundColor: "#fff", // Highlight logic? Ref image has a line pointer
  },
  activeIndicator: {
    position: "absolute",
    left: "-25px", // Pull it out to the line
    top: "50%",
    transform: "translateY(-50%)",
    width: "10px",
    height: "10px",
    backgroundColor: "var(--arsenal-gold)",
    borderRadius: "50%",
    boxShadow: "0 0 0 4px #fff, 0 0 0 6px var(--arsenal-gold)", // Dot with ring
  },
  listAvatar: {
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    backgroundColor: "#eee",
    overflow: "hidden",
  },
  listInfo: {
    display: "flex",
    flexDirection: "column",
  },
  listName: {
    fontSize: "12px",
    fontWeight: "700",
    color: "#333",
  },
};
