
import { useState, useEffect } from "react";

const iconicMoments = [
    {
        id: 1,
        image: "https://i.dailymail.co.uk/i/pix/2014/03/16/article-2582029-00D9F4521000044C-243_634x463.jpg",
        // Fallback/Generic if this fails: https://via.placeholder.com/800x400?text=The+Invincibles
        caption: "The Invincibles (2003/04) - 49 Games Unbeaten",
    },
    {
        id: 2,
        image: "https://i.dailymail.co.uk/1s/2020/01/20/13/23634598-7907825-image-a-16_1579525750023.jpg",
        // Placeholder for Highbury: https://via.placeholder.com/800x400?text=Highbury+Stadium
        caption: "Highbury - Our Home for 93 Years",
    },
    {
        id: 3,
        image: "https://wallpapercave.com/wp/wp2504187.jpg",
        caption: "Thierry Henry - The King",
    },
    {
        id: 4,
        image: "https://i.ytimg.com/vi/gRmNWa9qat0/maxresdefault.jpg",
        caption: "Emirates Stadium - A New Era",
    },
];

export default function ClubHistory() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % iconicMoments.length);
        }, 4000); // Change every 4 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <section id="about" style={styles.section}>
            <div style={styles.container}>
                {/* Left Side: Stats & Text */}
                <div style={styles.textContent}>
                    <h2 style={styles.header}>OUR LEGACY</h2>

                    <div style={styles.historyBlock}>
                        <h3 style={styles.subHeader}>1886 - The Beginning</h3>
                        <p style={styles.text}>
                            Born in Woolwich, Arsenal Football Club has a rich history of success and innovation.
                            We are known as "The Gunners", referencing our origins from the Royal Arsenal armaments factory.
                        </p>
                    </div>

                    <div style={styles.historyBlock}>
                        <h3 style={styles.subHeader}>The Chapman Era</h3>
                        <p style={styles.text}>
                            In the 1930s, Herbert Chapman revolutionized the game, introducing the WM formation,
                            numbered shirts, and floodlights. Under his guidance, we dominated English football.
                        </p>
                    </div>

                    <div style={styles.historyBlock}>
                        <h3 style={styles.subHeader}>The Invincibles</h3>
                        <p style={styles.text}>
                            In 2003/04, we did the impossible. Played 38 league games. Won 26. Drawn 12. Lost 0.
                            The only team in the modern era to go an entire Premier League season unbeaten.
                        </p>
                    </div>

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

                {/* Right Side: Iconic Moments Carousel */}
                <div style={styles.carouselContainer}>
                    <div style={styles.carouselFrame}>
                        {iconicMoments.map((moment, index) => (
                            <div
                                key={moment.id}
                                style={{
                                    ...styles.slide,
                                    opacity: index === currentImageIndex ? 1 : 0,
                                }}
                            >
                                <img src={moment.image} alt={moment.caption} style={styles.slideImage} />
                                <div style={styles.captionOverlay}>
                                    {moment.caption}
                                </div>
                            </div>
                        ))}
                    </div>
                    <div style={styles.indicators}>
                        {iconicMoments.map((_, index) => (
                            <div
                                key={index}
                                style={{
                                    ...styles.dot,
                                    backgroundColor: index === currentImageIndex ? "#db0007" : "#555",
                                }}
                                onClick={() => setCurrentImageIndex(index)}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

const styles = {
    section: {
        padding: "80px 60px",
        backgroundColor: "#0f0f0f",
        color: "#fff",
        minHeight: "800px",
    },
    container: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        alignItems: "flex-start",
        maxWidth: "1400px",
        margin: "0 auto",
        gap: "60px",
    },
    textContent: {
        flex: "1 1 500px",
    },
    header: {
        fontSize: "3.5rem",
        marginBottom: "40px",
        color: "#fff",
        textTransform: "uppercase",
        borderLeft: "6px solid #db0007",
        paddingLeft: "20px",
    },
    subHeader: {
        fontSize: "1.5rem",
        color: "#db0007",
        marginBottom: "10px",
    },
    historyBlock: {
        marginBottom: "30px",
    },
    text: {
        fontSize: "1.1rem",
        lineHeight: "1.8",
        color: "#ccc",
        marginBottom: "10px",
    },
    statsRow: {
        display: "flex",
        gap: "50px",
        marginTop: "40px",
        borderTop: "1px solid #333",
        paddingTop: "30px",
    },
    statItem: {
        display: "flex",
        flexDirection: "column",
    },
    statNumber: {
        fontSize: "4rem",
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

    // Carousel Styles
    carouselContainer: {
        flex: "1 1 500px",
        position: "relative",
        height: "500px",
        borderRadius: "12px",
        overflow: "hidden",
        boxShadow: "0 20px 50px rgba(0,0,0,0.5)",
    },
    carouselFrame: {
        position: "relative",
        width: "100%",
        height: "100%",
    },
    slide: {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        transition: "opacity 1s ease-in-out",
    },
    slideImage: {
        width: "100%",
        height: "100%",
        objectFit: "cover",
    },
    captionOverlay: {
        position: "absolute",
        bottom: 0,
        left: 0,
        width: "100%",
        padding: "20px",
        background: "linear-gradient(to top, rgba(0,0,0,0.9), transparent)",
        color: "#fff",
        fontSize: "1.2rem",
        fontWeight: "600",
        textAlign: "center",
    },
    indicators: {
        position: "absolute",
        bottom: "20px",
        left: "50%",
        transform: "translateX(-50%)",
        display: "flex",
        gap: "10px",
        zIndex: 10,
    },
    dot: {
        width: "12px",
        height: "12px",
        borderRadius: "50%",
        cursor: "pointer",
        transition: "background-color 0.3s",
    },
};
