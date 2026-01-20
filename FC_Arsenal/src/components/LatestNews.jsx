export default function LatestNews() {
    const newsItems = [
        {
            id: 1,
            title: "Victory at the Emirates!",
            date: "Jan 18, 2026",
            summary: "A stunning performance secures 3 points against our rivals.",
            image: "/news-victory.png",
        },
        {
            id: 2,
            title: "Academy Star Signs Pro Contract",
            date: "Jan 16, 2026",
            summary: "Promising midfielder commits future to the Gunners.",
            image: "/news-academy.png",
        },
        {
            id: 3,
            title: "Fixture Update: FA Cup",
            date: "Jan 14, 2026",
            summary: "Next round draw confirmed. Check out who we face next.",
            image: "/news-fixture.png",
        },
    ];

    return (
        <section style={styles.section}>
            <h2 style={styles.header}>LATEST NEWS</h2>
            <div style={styles.grid}>
                {newsItems.map((item) => (
                    <div key={item.id} style={styles.card}>
                        <div style={styles.imageContainer}>
                            <img src={item.image} alt={item.title} style={styles.image} />
                        </div>
                        <div style={styles.content}>
                            <span style={styles.date}>{item.date}</span>
                            <h3 style={styles.title}>{item.title}</h3>
                            <p style={styles.summary}>{item.summary}</p>
                            <button onClick={() => window.location.href = "https://www.arsenal.com/news"} style={styles.link}>Read More &rarr;</button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

const styles = {
    section: {
        padding: "80px 60px",
        backgroundColor: "#ffffff",
        color: "#0f0f0f",
    },
    header: {
        fontSize: "2.5rem",
        marginBottom: "40px",
        color: "#0f0f0f",
        borderLeft: "5px solid #db0007",
        paddingLeft: "20px",
        textTransform: "uppercase",
    },
    grid: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        gap: "30px",
    },
    card: {
        backgroundColor: "#f4f4f4",
        borderRadius: "8px",
        overflow: "hidden",
        boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
        transition: "transform 0.3s ease",
        display: "flex",
        flexDirection: "column",
    },
    imageContainer: {
        height: "200px",
        width: "100%",
        backgroundColor: "#ddd", // Fallback
    },
    image: {
        width: "100%",
        height: "100%",
        objectFit: "cover",
    },
    content: {
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        flex: 1,
    },
    date: {
        fontSize: "0.85rem",
        color: "#666",
        fontWeight: "600",
    },
    title: {
        fontSize: "1.25rem",
        color: "#0f0f0f",
    },
    summary: {
        fontSize: "0.95rem",
        color: "#444",
        marginBottom: "10px",
    },
    link: {
        background: "none",
        border: "none",
        color: "#db0007",
        fontWeight: "700",
        cursor: "pointer",
        textAlign: "left",
        padding: 0,
        fontSize: "1rem",
        marginTop: "auto",
    },
};
