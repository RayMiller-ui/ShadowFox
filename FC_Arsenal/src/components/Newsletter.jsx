export default function Newsletter() {
    return (
        <section id="contact" style={styles.section}>
            <div style={styles.container}>
                <h2 style={styles.header}>JOIN THE GUNNERS</h2>
                <p style={styles.subtext}>
                    Get the latest news, ticket updates, and exclusive content delivered straight to your inbox.
                </p>
                <form style={styles.form} onSubmit={(e) => e.preventDefault()}>
                    <input
                        type="email"
                        placeholder="Enter your email address"
                        style={styles.input}
                    />
                    <button type="submit" style={styles.button}>SIGN UP</button>
                </form>
            </div>
        </section>
    );
}

const styles = {
    section: {
        padding: "80px 20px",
        backgroundColor: "#efefef",
        display: "flex",
        justifyContent: "center",
    },
    container: {
        textAlign: "center",
        maxWidth: "600px",
        width: "100%",
    },
    header: {
        fontSize: "2rem",
        color: "#0f0f0f",
        marginBottom: "15px",
        textTransform: "uppercase",
    },
    subtext: {
        fontSize: "1rem",
        color: "#555",
        marginBottom: "30px",
    },
    form: {
        display: "flex",
        gap: "10px",
        flexWrap: "wrap",
        justifyContent: "center",
    },
    input: {
        flex: "1 1 250px",
        padding: "15px",
        borderRadius: "4px",
        border: "1px solid #ccc",
        fontSize: "1rem",
        outline: "none",
    },
    button: {
        padding: "15px 30px",
        backgroundColor: "#db0007",
        color: "#fff",
        border: "none",
        borderRadius: "4px",
        fontSize: "1rem",
        fontWeight: "700",
        cursor: "pointer",
        textTransform: "uppercase",
        minWidth: "120px",
    },
};
