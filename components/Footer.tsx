export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        background: "#1A1A2E",
        padding: "48px 24px",
        color: "rgba(255,255,255,0.5)",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "20px",
        }}
      >
        {/* Logo */}
        <div>
          <span
            style={{
              fontFamily: "var(--font-syne), Syne, sans-serif",
              fontWeight: 800,
              fontSize: "1.5rem",
              color: "#E63946",
            }}
          >
            BD.
          </span>
          <p
            style={{
              fontFamily: "var(--font-inter), Inter, sans-serif",
              fontSize: "0.8rem",
              marginTop: "4px",
            }}
          >
            Baptiste Devisscher · BUT Informatique
          </p>
        </div>

        {/* Center — credit */}
        <p
          style={{
            fontFamily: "var(--font-inter), Inter, sans-serif",
            fontSize: "0.8rem",
            textAlign: "center",
          }}
        >
          © {year} Baptiste Devisscher · Tous droits réservés
        </p>

        {/* Right — quick links */}
        <div style={{ display: "flex", gap: "20px" }}>
          {["Accueil", "Contact"].map((label) => (
            <button
              key={label}
              onClick={() => {
                const id =
                  label === "Accueil" ? "hero" : label.toLowerCase();
                document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
              }}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                fontFamily: "var(--font-inter), Inter, sans-serif",
                fontSize: "0.8rem",
                color: "rgba(255,255,255,0.4)",
                transition: "color 0.2s ease",
                padding: 0,
              }}
              onMouseEnter={(e) =>
                ((e.target as HTMLButtonElement).style.color = "#E63946")
              }
              onMouseLeave={(e) =>
                ((e.target as HTMLButtonElement).style.color =
                  "rgba(255,255,255,0.4)")
              }
            >
              {label}
            </button>
          ))}
        </div>
      </div>
    </footer>
  );
}
