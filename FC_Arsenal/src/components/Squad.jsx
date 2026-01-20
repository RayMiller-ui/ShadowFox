
import { useState } from "react";
import { squad } from "../data/squad";
import { playerStats } from "../data/stats";

export default function Squad() {
  const [selectedPlayerId, setSelectedPlayerId] = useState(squad[0].id);
  const [viewMode, setViewMode] = useState("featured"); // 'featured' | 'all'

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
    <section id="squad" style={styles.section}>
      {viewMode === "featured" ? (
        <div style={styles.container}>
          {/* Left Column: Player Details */}
          <div style={styles.leftCol}>
            <div style={styles.header}>
              <span style={styles.label}>PLAYERS</span>
              <span
                style={styles.viewAll}
                onClick={() => setViewMode("all")}
              >
                VIEW ALL
              </span>
            </div>

            <div style={styles.playerInfo}>
              <h1 style={styles.playerName}>
                {selectedPlayer.name.toUpperCase()}
                <span style={styles.captainBadge}>C</span>
              </h1>
              <span style={styles.positionBadge}>
                {selectedPlayer.position.toUpperCase()}
              </span>

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
                  <span style={styles.statValue}>
                    {stats?.minutesPlayed || "-"}
                  </span>
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
                    ...(selectedPlayerId === player.id
                      ? styles.activeListItem
                      : {}),
                  }}
                  onClick={() => setSelectedPlayerId(player.id)}
                >
                  <div style={styles.listAvatar}>
                    <img
                      src={playerStats[player.id]?.image}
                      alt={player.name}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        borderRadius: "50%",
                      }}
                    />
                  </div>
                  <div style={styles.listInfo}>
                    <span style={styles.listName}>
                      {player.name.toUpperCase()}
                    </span>
                  </div>
                  {selectedPlayerId === player.id && (
                    <div style={styles.activeIndicator}></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        /* VIEW ALL GRID LAYOUT */
        <div style={styles.gridContainer}>
          <div style={styles.gridHeader}>
            <h2 style={styles.gridTitle}>ALL PLAYERS ({squad.length})</h2>
            <button onClick={() => setViewMode("featured")} style={styles.backButton}>
              CLOSE
            </button>
          </div>
          <div style={styles.gridView}>
            {squad.map((player) => (
              <div key={player.id} style={styles.gridCard}>
                <div style={styles.cardImageContainer}>
                  <img
                    src={playerStats[player.id]?.image || "https://via.placeholder.com/200"}
                    alt={player.name}
                    style={styles.cardImage}
                  />
                  <span style={styles.cardNumber}>#{player.number}</span>
                </div>
                <div style={styles.cardContent}>
                  <h3 style={styles.cardName}>{player.name}</h3>
                  <p style={styles.cardPosition}>{player.position}</p>
                  <button
                    style={styles.cardButton}
                    onClick={() => {
                      setSelectedPlayerId(player.id);
                      setViewMode("featured");
                    }}
                  >
                    VIEW PROFILE
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
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
    justifyContent: "center", // Centering for grid view too
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
    color: "var(--arsenal-dark)",
  },
  viewAll: {
    fontSize: "12px",
    fontWeight: "600",
    color: "#666",
    cursor: "pointer",
    textDecoration: "underline",
  },
  playerName: {
    fontSize: "48px",
    fontWeight: "800",
    lineHeight: "1",
    marginBottom: "10px",
    color: "var(--arsenal-dark)",
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
    backgroundColor: "#e0dbe6",
    color: "#4b0082",
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
    border: "2px dashed #ccc",
    zIndex: 0,
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
  imageWrapper: {
    position: "relative",
    display: "flex",
    justifyContent: "center",
  },
  playerImage: {
    zIndex: 1,
    height: "550px",
    objectFit: "contain",
    position: "relative",
    bottom: "-20px",
  },
  navButton: {
    background: "#aa9cc2",
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
    maxHeight: "600px",
    overflowY: "auto",
    paddingRight: "10px",
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
    backgroundColor: "#fff",
  },
  activeIndicator: {
    position: "absolute",
    left: "-25px",
    top: "50%",
    transform: "translateY(-50%)",
    width: "10px",
    height: "10px",
    backgroundColor: "var(--arsenal-gold)",
    borderRadius: "50%",
    boxShadow: "0 0 0 4px #fff, 0 0 0 6px var(--arsenal-gold)",
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

  // Grid View Styles
  gridContainer: {
    width: "100%",
    maxWidth: "1400px",
    display: "flex",
    flexDirection: "column",
    gap: "40px",
  },
  gridHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  gridTitle: {
    fontSize: "32px",
    color: "var(--arsenal-dark)",
  },
  backButton: {
    background: "transparent",
    border: "2px solid var(--arsenal-dark)",
    color: "var(--arsenal-dark)",
    padding: "10px 20px",
    fontWeight: "700",
    cursor: "pointer",
    textTransform: "uppercase",
  },
  gridView: {
    display: "flex",
    flexWrap: "wrap",
    gap: "30px",
    justifyContent: "center",
  },
  gridCard: {
    width: "250px",
    backgroundColor: "#f9f9f9",
    borderRadius: "8px",
    overflow: "hidden",
    boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
    transition: "transform 0.3s",
    cursor: "default",
  },
  cardImageContainer: {
    width: "100%",
    height: "250px",
    backgroundColor: "#e0e0e0",
    position: "relative",
  },
  cardImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    objectPosition: "top",
  },
  cardNumber: {
    position: "absolute",
    top: "10px",
    right: "10px",
    background: "var(--arsenal-red)",
    color: "#fff",
    padding: "5px 8px",
    fontSize: "12px",
    fontWeight: "800",
    borderRadius: "4px",
  },
  cardContent: {
    padding: "20px",
    textAlign: "center",
  },
  cardName: {
    fontSize: "18px",
    fontWeight: "700",
    color: "var(--arsenal-dark)",
    marginBottom: "5px",
  },
  cardPosition: {
    fontSize: "12px",
    color: "#666",
    marginBottom: "15px",
    textTransform: "uppercase",
    letterSpacing: "1px",
  },
  cardButton: {
    backgroundColor: "var(--arsenal-dark)",
    color: "#fff",
    border: "none",
    padding: "10px 20px",
    fontSize: "12px",
    fontWeight: "600",
    cursor: "pointer",
    width: "100%",
  }
};
