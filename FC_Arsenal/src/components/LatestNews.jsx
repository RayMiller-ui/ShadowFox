import { useState } from "react";

const allNews = [
    { id: 1, 
    category: "men", 
    title: "Preview: Inter Milan v Arsenal", 
    date: "Jan 20, 2026", 
    summary: "We head to Milan looking to extend our superb 100% record and move a step closer to finishing top of the Champions League league phase table when we face Inter on Tuesday (8pm UK).", 
    image: "https://www.arsenal.com/sites/default/files/styles/large_16x9/public/images/Arsenal_CL_Fixture_16x9_Home__gr4fsl63.png?h=d1ca7a6f&auto=webp&itok=16QQgvmL", 
    link: "https://www.arsenal.com/news/preview-inter-milan-v-arsenal-0" },

    { id: 2, 
    category: "academy", 
    title: "Hamill insists under-18s season far from over", 
    date: "Jan 16, 2026", 
    summary: "Callan Hamill believes the FA Youth Cup fourth round against Manchester City ended in a loss due to a lapse in game control during the opening 45 of the affair.", 
    image: "https://www.arsenal.com/sites/default/files/styles/large_16x9/public/images/callan-u21-clap_ua25fr20.png?h=8b6ce4d6&auto=webp&itok=OT9goAEv", 
    link: "https://www.arsenal.com/news/hamill-insists-under-18s-season-far-over" },

    { id: 3, 
    category: "women", 
    title: "Renée: “Every trophy is important”", 
    date: "Jan 20, 2026", 
    summary: "Wednesday’s Subway Women’s League Cup semi-final against Manchester United represents an opportunity to reach a record 11th League Cup final.", 
    image: "https://www.arsenal.com/sites/default/files/styles/large_16x9/public/images/Renee-at-Crystal-Palace_rng3a6vf.jpg?h=a8f71d59&auto=webp&itok=u9ZlRbxU", 
    link: "https://www.arsenal.com/news/renee-every-trophy-important" },

    { id: 4, 
    category: "men", 
    title: "Team news: Seven changes made for San Siro visit", 
    date: "Jan 20, 2026", 
    summary: "Mikel Arteta has shuffled his pack for tonight’s Champions League game against Inter Milan, making seven changes and handing starts to Bukayo Saka, Cristian Mosquera and Ebere Eze.", 
    image: "https://www.arsenal.com/sites/default/files/styles/large_16x9/public/images/mosquera-saka_ger5ik4e.jpg?h=bef40d07&auto=webp&itok=38n3ClKd", 
    link: "https://www.arsenal.com/news/team-news-seven-changes-made-san-siro-visit" },

    { id: 5,
    category: "women", 
    title: "The best stats from Kim Little’s time at Arsenal", 
    date: "Jan 15, 2026", 
    summary: "With her goal in our 2-0 Women’s FA Cup win over Aston Villa on Sunday, Kim Little made it 15 different seasons she’s scored in across all competitions for us.", 
    image: "https://www.arsenal.com/sites/default/files/styles/large_16x9/public/images/Kim-Little-celebrates_mym0yp1v.jpg?h=f65ac6eb&auto=webp&itok=ahHymcqa", 
    link: "https://www.arsenal.com/news/best-stats-kim-littles-time-arsenal" },

    { id: 6, category: "academy", title: "U18s through to Youth Cup semi", date: "Jan 12, 2026", summary: "Young Gunners shine under lights.", image: "https://www.arsenal.com/sites/default/files/styles/large_16x9/public/gun__1648037385_FA_Youth_Cup_generic.jpg?itok=8aJ_K4_J", link: "https://www.arsenal.com/academy/news/u18s-youth-cup-semi" },
    { id: 7, category: "men", title: "Rice voted POTM", date: "Jan 10, 2026", summary: "Midfield dynamo takes award.", image: "https://i2-prod.mirror.co.uk/incoming/article30907000.ece/ALTERNATES/s1200c/0_Declan-Rice-Arsenal.jpg", link: "https://www.arsenal.com/men/news/rice-potm-january" },
    { id: 8, category: "men", title: "Saka injury update", date: "Jan 20, 2026", summary: "Manager provides latest news.", image: "https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt4e9b9c9f0f9b0f9b/651f49b9d3b0d4040a6b5b5b/Bukayo_Saka_Arsenal_2023-24.jpg", link: "https://www.arsenal.com/men/news/saka-injury-update" },
    // New Women's News Items
    { id: 9, category: "women", title: "Mead returns to training", date: "Jan 21, 2026", summary: "Beth Mead is back on the grass after injury layoff.", image: "https://i2-prod.mirror.co.uk/incoming/article28543885.ece/ALTERNATES/s1200c/0_Beth-Mead-Arsenal.jpg", link: "https://www.arsenal.com/women/news/mead-training-return" },
    { id: 10, category: "women", title: "WSL Fixture Changes", date: "Jan 20, 2026", summary: "Upcoming match against Chelsea moved to the Emirates.", image: "https://www.arsenal.com/sites/default/files/styles/large_16x9/public/images/Emirates%20Stadium%20Exterior%20General%20View.jpg?itok=y1f4a4_8", link: "https://www.arsenal.com/women/news/wsl-fixture-update" },
    { id: 11, category: "women", title: "Williamson: 'We are ready'", date: "Jan 19, 2026", summary: "Captain speaks ahead of big Champions League night.", image: "https://i2-prod.football.london/incoming/article26620000.ece/ALTERNATES/s1200c/0_Leah-Williamson-Arsenal.jpg", link: "https://www.arsenal.com/women/news/williamson-preview" },
];

export default function LatestNews() {
    const [activeTab, setActiveTab] = useState("all");
    const [showAll, setShowAll] = useState(false);

    const filteredNews = activeTab === "all"
        ? allNews
        : allNews.filter(item => item.category === activeTab);

    const displayedNews = showAll ? filteredNews : filteredNews.slice(0, 3);

    return (
        <section style={styles.section}>
            <div style={styles.headerRow}>
                <h2 style={styles.header}>LATEST NEWS</h2>
                <div style={styles.tabs}>
                    {['all', 'men', 'women', 'academy'].map(tab => (
                        <button
                            key={tab}
                            onClick={() => {
                                setActiveTab(tab);
                                setShowAll(false);
                            }}
                            style={{
                                ...styles.tabButton,
                                ...(activeTab === tab ? styles.activeTab : {})
                            }}
                        >
                            {tab.toUpperCase()}
                        </button>
                    ))}
                </div>
            </div>

            <div style={styles.grid}>
                {displayedNews.map((item) => (
                    <div key={item.id} style={styles.card}>
                        <div style={styles.imageContainer}>
                            <img src={item.image} alt={item.title} style={styles.image} />
                        </div>
                        <div style={styles.content}>
                            <span style={styles.date}>{item.date}</span>
                            <h3 style={styles.title}>{item.title}</h3>
                            <p style={styles.summary}>{item.summary}</p>
                            <button onClick={() => window.location.href = item.link} style={styles.link}>Read More &rarr;</button>
                        </div>
                        {/* Tag for category visibility */}
                        <span style={styles.categoryTag}>{item.category.toUpperCase()}</span>
                    </div>
                ))}
            </div>

            {filteredNews.length > 3 && (
                <div style={styles.buttonContainer}>
                    <button
                        onClick={() => setShowAll(!showAll)}
                        style={styles.toggleButton}
                    >
                        {showAll ? "Show Less" : "View All News"}
                    </button>
                </div>
            )}
        </section>
    );
}

const styles = {
    section: {
        padding: "80px 60px",
        backgroundColor: "#ffffff",
        color: "#0f0f0f",
    },
    headerRow: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "40px",
        flexWrap: "wrap",
        gap: "20px",
    },
    header: {
        fontSize: "2.5rem",
        color: "#0f0f0f",
        borderLeft: "5px solid #db0007",
        paddingLeft: "20px",
        textTransform: "uppercase",
        margin: 0,
    },
    tabs: {
        display: "flex",
        gap: "10px",
    },
    tabButton: {
        padding: "10px 20px",
        border: "2px solid #ddd",
        backgroundColor: "transparent",
        color: "#333",
        cursor: "pointer",
        fontWeight: "700",
        fontFamily: "var(--font-primary)",
        fontSize: "0.9rem",
        transition: "all 0.3s ease",
        borderRadius: "30px", // Pill shape
    },
    activeTab: {
        borderColor: "#db0007",
        backgroundColor: "#db0007",
        color: "#fff",
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
        display: "flex",
        flexDirection: "column",
        position: "relative",
        transition: "transform 0.3s ease",
    },
    imageContainer: {
        height: "200px",
        width: "100%",
        backgroundColor: "#ddd",
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
        fontFamily: "var(--font-body)",
    },
    title: {
        fontSize: "1.25rem",
        color: "#0f0f0f",
        marginBottom: "5px",
    },
    summary: {
        fontSize: "0.95rem",
        color: "#444",
        marginBottom: "10px",
        fontFamily: "var(--font-body)",
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
        fontFamily: "var(--font-primary)",
    },
    categoryTag: {
        position: "absolute",
        top: "10px",
        right: "10px",
        backgroundColor: "rgba(0,0,0,0.7)",
        color: "#fff",
        padding: "4px 8px",
        fontSize: "0.7rem",
        fontWeight: "700",
        borderRadius: "4px",
        textTransform: "uppercase",
    },
    buttonContainer: {
        display: "flex",
        justifyContent: "center",
        marginTop: "40px",
    },
    toggleButton: {
        padding: "12px 30px",
        backgroundColor: "#db0007",
        color: "#fff",
        border: "none",
        cursor: "pointer",
        fontWeight: "700",
        fontFamily: "var(--font-primary)",
        fontSize: "1rem",
        textTransform: "uppercase",
        letterSpacing: "1px",
        transition: "background-color 0.3s ease",
        clipPath: "polygon(10% 0, 100% 0, 100% 80%, 90% 100%, 0 100%, 0 20%)",
    }
};
