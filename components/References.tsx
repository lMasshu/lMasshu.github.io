"use client";

export default function References() {
  const references = [
    {
      name: "Jean-Marc Valin",
      role: "Directeur des études en BUT Informatique",
      institution: "IUT Département Informatique",
      quote: "Baptiste est un étudiant particulièrement curieux, rigoureux et persévérant. Son passage de la physique à l'informatique montre une grande adaptabilité et une excellente capacité d'auto-formation.",
      avatar: "👨‍🏫",
      contact: "jmarc.valin@iut-univ.fr",
    },
    {
      name: "Sarah Dupuis",
      role: "Responsable technique / Tutrice de stage",
      institution: "Collectif du Solaire",
      quote: "Lors de son stage au Collectif du Solaire, Baptiste a su s'intégrer rapidement et faire preuve de beaucoup d'autonomie. Son travail sur nos applications backend PHP a été soigné et efficace.",
      avatar: "👩‍💻",
      contact: "s.dupuis@collectifdusolaire.fr",
    },
  ];

  return (
    <section
      id="references"
      style={{
        padding: "100px 24px",
        background: "#F9FAFB",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Header */}
        <div className="reveal" style={{ textAlign: "center", marginBottom: "72px" }}>
          <span className="section-tag">Références</span>
          <h2
            style={{
              fontFamily: "var(--font-syne), Syne, sans-serif",
              fontSize: "clamp(2rem, 4vw, 3.2rem)",
              fontWeight: 800,
              color: "#1A1A2E",
              marginBottom: "16px",
            }}
          >
            Recommandations & Soutiens
          </h2>
          <div className="section-divider" style={{ margin: "0 auto 24px" }} />
          <p
            style={{
              fontFamily: "var(--font-inter), Inter, sans-serif",
              fontSize: "1.05rem",
              color: "#64748B",
              maxWidth: "540px",
              margin: "0 auto",
            }}
          >
            Ceux qui peuvent attester de mes compétences et de mon sérieux professionnel.
          </p>
        </div>

        {/* Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "32px",
          }}
          className="references-grid"
        >
          {references.map((ref, idx) => (
            <div
              key={idx}
              className="card reveal"
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                padding: "36px",
                position: "relative",
                overflow: "hidden",
                background: "#FFFFFF",
              }}
            >
              {/* Giant quote mark in background */}
              <div
                aria-hidden="true"
                style={{
                  position: "absolute",
                  top: "-10px",
                  right: "10px",
                  fontSize: "8rem",
                  fontFamily: "var(--font-syne), sans-serif",
                  fontWeight: 900,
                  color: "rgba(230, 57, 70, 0.05)",
                  pointerEvents: "none",
                  userSelect: "none",
                }}
              >
                &ldquo;
              </div>

              <div>
                {/* Profile info */}
                <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "24px" }}>
                  <span
                    style={{
                      fontSize: "2rem",
                      width: "56px",
                      height: "56px",
                      background: "#FEF2F2",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      border: "2px solid rgba(230, 57, 70, 0.1)",
                    }}
                  >
                    {ref.avatar}
                  </span>
                  <div>
                    <h3
                      style={{
                        fontFamily: "var(--font-syne), Syne, sans-serif",
                        fontWeight: 800,
                        fontSize: "1.15rem",
                        color: "#1A1A2E",
                      }}
                    >
                      {ref.name}
                    </h3>
                    <p
                      style={{
                        fontSize: "0.85rem",
                        fontWeight: 600,
                        color: "#E63946",
                        fontFamily: "var(--font-inter), Inter, sans-serif",
                      }}
                    >
                      {ref.role}
                    </p>
                    <p
                      style={{
                        fontSize: "0.78rem",
                        color: "#94A3B8",
                        fontFamily: "var(--font-inter), Inter, sans-serif",
                      }}
                    >
                      {ref.institution}
                    </p>
                  </div>
                </div>

                {/* Quote */}
                <p
                  style={{
                    fontFamily: "var(--font-inter), Inter, sans-serif",
                    fontSize: "0.95rem",
                    color: "#475569",
                    lineHeight: 1.7,
                    fontStyle: "italic",
                    marginBottom: "24px",
                  }}
                >
                  &ldquo;{ref.quote}&rdquo;
                </p>
              </div>

              {/* Bottom contact bar */}
              <div
                style={{
                  borderTop: "1px solid #E2E8F0",
                  paddingTop: "16px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <span
                  style={{
                    fontSize: "0.75rem",
                    fontWeight: 600,
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    color: "#94A3B8",
                    fontFamily: "var(--font-inter), Inter, sans-serif",
                  }}
                >
                  Contact vérifié
                </span>
                <a
                  href={`mailto:${ref.contact}`}
                  style={{
                    fontSize: "0.85rem",
                    color: "#1A1A2E",
                    textDecoration: "none",
                    fontWeight: 600,
                    fontFamily: "var(--font-inter), Inter, sans-serif",
                    transition: "color 0.2s ease",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                  }}
                  onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#E63946")}
                  onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "#1A1A2E")}
                >
                  📧 {ref.contact}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .references-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
