export default function ClubHistory() {
    return (
        <section style={styles.section}>
            <div style={styles.container}>
                <div style={styles.textContent}>
                    <h2 style={styles.header}>OUR LEGACY</h2>
                    <p style={styles.text}>
                        Born in 1886, Arsenal Football Club has a rich history of success and innovation.
                        From Highbury to the Emirates, we have forged a tradition of beautiful football
                        and winning with style.
                    </p>
                    <div style={styles.statsRow}>
                        <div style={styles.statItem}>
                            <span style={styles.statNumber}>13</span>
                            <span style={styles.statLabel}>League Titles</span>
                        </div>
                        <div style={styles.statItem}>
                            <span style={styles.statNumber}>14</span>
                            <span style={styles.statLabel}>FA Cups</span>
                        </div>
                        <div style={styles.statItem}>
                            <span style={styles.statNumber}>2</span>
                            <span style={styles.statLabel}>League Cups</span>
                        </div>
                    </div>
                </div>
                <div style={styles.visualContent}>
                    {/* Abstract graphic using CSS only */}
                    <div style={styles.circle}></div>
                    <div style={styles.line}></div>
                </div>
            </div>
        </section>
    );
}

const styles = {
    section: {
        padding: "100px 60px",
        backgroundColor: "#0f0f0f", // Dark background
        color: "#fff",
        position: "relative",
        overflow: "hidden",
    },
    container: {
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "50px",
        maxWidth: "1200px",
        margin: "0 auto",
    },
    textContent: {
        flex: "1 1 500px",
        zIndex: 2,
    },
    header: {
        fontSize: "3rem",
        marginBottom: "20px",
        color: "#fff",
        textTransform: "uppercase",
    },
    text: {
        fontSize: "1.1rem",
        lineHeight: "1.8",
        color: "#ccc",
        marginBottom: "40px",
        maxWidth: "600px",
    },
    statsRow: {
        display: "flex",
        gap: "40px",
    },
    statItem: {
        display: "flex",
        flexDirection: "column",
    },
    statNumber: {
        fontSize: "3.5rem",
        fontWeight: "800",
        color: "#db0007",
        lineHeight: 1,
    },
    statLabel: {
        fontSize: "0.9rem",
        fontWeight: "600",
        color: "#fff",
        marginTop: "5px",
        textTransform: "uppercase",
        letterSpacing: "1px",
    },
    visualContent: {
        position: "relative",
        width: "300px",
        height: "300px",
        display: "none", // Hidden on small screens if needed, or we can make it purely decorative
        "@media (min-width: 900px)": {
            display: "block",
        }
    },
    // Decorative elements
    circle: {
        position: "absolute",
        width: "400px",
        height: "400px",
        borderRadius: "50%",
        border: "2px solid rgba(219, 0, 7, 0.2)",
        right: "-150px",
        top: "-50px",
        zIndex: 1,
    },
    line: {
        position: "absolute",
        height: "2px",
        width: "200px",
        background: "#db0007",
        left: "0",
        bottom: "0",
    },
};
