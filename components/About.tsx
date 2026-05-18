export default function About() {
  const qualities = [
    "Curieux",
    "Créatif",
    "Collaboratif",
    "Analytique",
    "Autodidacte",
  ];

  const timeline = [
    {
      year: "2023",
      title: "Baccalauréat Général (Maths, Physique-Chimie, DNL)",
      desc: "Obtention du Baccalauréat avec spécialités scientifiques et option DNL. Un socle solide de logique, de rigueur et d'ouverture internationale.",
      color: "#E63946",
    },
    {
      year: "2023 - 2024",
      title: "BUT Informatique — 1ère année",
      desc: "Début de mon parcours en informatique : immersion dans l'algorithmique, le développement web, le C et l'architecture système.",
      color: "#E63946",
    },
    {
      year: "2024 - 2026",
      title: "BUT Informatique — 2ème année",
      desc: "Approfondissement technique : programmation orientée objet en Java, architecture MVC en PHP, gestion de bases de données et travail de projet en équipe.",
      color: "#E63946",
    },
    {
      year: "2026",
      title: "Stage — Collectif du Solaire",
      desc: "Stage de fin de deuxième année (4ème semestre). Première expérience professionnelle. Intégration en entreprise et application des connaissances sur un projet réel.",
      color: "#E63946",
    },
  ];

  const passions = [
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#E63946" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
          <path d="M2 12h20"></path>
        </svg>
      ),
      title: "Astronomie",
      desc: "Ce qui m'a amené vers les sciences. Observer l'univers me donne le goût de comprendre le monde.",
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#E63946" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 18H18V20H6V18Z"></path>
          <path d="M12 2V14M12 14L8 10M12 14L16 10" strokeLinejoin="bevel"></path>
          <path d="M4 14C4 10 6 6 12 6C18 6 20 10 20 14" strokeDasharray="3 3"></path>
        </svg>
      ),
      title: "Cuisine",
      desc: "Un art de la créativité et de la précision — deux qualités que j'applique aussi au code.",
    },
  ];

  return (
    <section
      id="about"
      style={{
        padding: "100px 24px",
        background: "#F9FAFB",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Header */}
        <div className="reveal" style={{ textAlign: "center", marginBottom: "72px" }}>
          <span className="section-tag">À propos de moi</span>
          <h2
            style={{
              fontFamily: "var(--font-syne), Syne, sans-serif",
              fontSize: "clamp(2rem, 4vw, 3.2rem)",
              fontWeight: 800,
              color: "#1A1A2E",
              marginBottom: "16px",
            }}
          >
            Qui suis-je ?
          </h2>
          <div className="section-divider" style={{ margin: "0 auto 24px" }} />
          <p
            style={{
              fontFamily: "var(--font-inter), Inter, sans-serif",
              fontSize: "1.05rem",
              color: "#64748B",
              maxWidth: "600px",
              margin: "0 auto",
              lineHeight: 1.7,
            }}
          >
            Étudiant passionné, je suis venu à l&apos;informatique par curiosité — et j&apos;y suis resté par passion.
          </p>
        </div>

        {/* Main grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "32px",
            marginBottom: "32px",
          }}
          className="about-grid"
        >
          {/* Ma personnalité */}
          <div className="card reveal reveal-left">
            <h3
              style={{
                fontFamily: "var(--font-syne), Syne, sans-serif",
                fontSize: "1.3rem",
                fontWeight: 700,
                color: "#1A1A2E",
                marginBottom: "20px",
              }}
            >
              Ma personnalité
            </h3>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginBottom: "24px" }}>
              {qualities.map((q) => (
                <span
                  key={q}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    padding: "8px 16px",
                    background: "#FEF2F2",
                    border: "1px solid rgba(230,57,70,0.2)",
                    borderRadius: "100px",
                    fontSize: "0.875rem",
                    fontWeight: 500,
                    color: "#C1121F",
                    fontFamily: "var(--font-inter), Inter, sans-serif",
                    transition: "all 0.2s ease",
                    cursor: "default",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "#E63946";
                    (e.currentTarget as HTMLElement).style.color = "#FFFFFF";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "#FEF2F2";
                    (e.currentTarget as HTMLElement).style.color = "#C1121F";
                  }}
                >
                  {q}
                </span>
              ))}
            </div>

            {/* Faiblesse */}
            <div
              style={{
                background: "#F8FAFC",
                borderRadius: "12px",
                padding: "16px",
                borderLeft: "3px solid #E63946",
              }}
            >
              <p
                style={{
                  fontSize: "0.8rem",
                  fontWeight: 600,
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  color: "#E63946",
                  marginBottom: "8px",
                  fontFamily: "var(--font-inter), Inter, sans-serif",
                }}
              >
                Ma faiblesse
              </p>
              <p
                style={{
                  fontSize: "0.9rem",
                  color: "#64748B",
                  lineHeight: 1.6,
                  fontFamily: "var(--font-inter), Inter, sans-serif",
                }}
              >
                Je tends à vouloir tout comprendre en profondeur avant d&apos;agir — ce qui me rend parfois lent à démarrer, mais toujours solide dans l&apos;exécution.
              </p>
            </div>
          </div>

          {/* Mes passions */}
          <div className="card reveal reveal-right">
            <h3
              style={{
                fontFamily: "var(--font-syne), Syne, sans-serif",
                fontSize: "1.3rem",
                fontWeight: 700,
                color: "#1A1A2E",
                marginBottom: "20px",
              }}
            >
              Mes passions
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {passions.map((p) => (
                <div
                  key={p.title}
                  style={{
                    display: "flex",
                    gap: "16px",
                    padding: "16px",
                    background: "#F8FAFC",
                    borderRadius: "12px",
                    border: "1px solid #E2E8F0",
                    transition: "all 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor =
                      "rgba(230,57,70,0.3)";
                    (e.currentTarget as HTMLElement).style.background = "#FEF2F2";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "#E2E8F0";
                    (e.currentTarget as HTMLElement).style.background = "#F8FAFC";
                  }}
                >
                  <span style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>{p.icon}</span>
                  <div>
                    <p
                      style={{
                        fontFamily: "var(--font-syne), Syne, sans-serif",
                        fontWeight: 700,
                        fontSize: "1rem",
                        color: "#1A1A2E",
                        marginBottom: "4px",
                      }}
                    >
                      {p.title}
                    </p>
                    <p
                      style={{
                        fontSize: "0.875rem",
                        color: "#64748B",
                        lineHeight: 1.5,
                        fontFamily: "var(--font-inter), Inter, sans-serif",
                      }}
                    >
                      {p.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Timeline — Mon parcours */}
        <div className="card reveal">
          <h3
            style={{
              fontFamily: "var(--font-syne), Syne, sans-serif",
              fontSize: "1.3rem",
              fontWeight: 700,
              color: "#1A1A2E",
              marginBottom: "32px",
            }}
          >
            Mon parcours
          </h3>
          <div>
            {timeline.map((item, i) => (
              <div key={i} className="timeline-item">
                <div className="timeline-dot" />
                <div style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
                  <span
                    style={{
                      fontFamily: "var(--font-syne), Syne, sans-serif",
                      fontWeight: 800,
                      fontSize: "0.85rem",
                      color: "#E63946",
                      minWidth: "90px",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {item.year}
                  </span>
                  <div>
                    <p
                      style={{
                        fontFamily: "var(--font-syne), Syne, sans-serif",
                        fontWeight: 700,
                        color: "#1A1A2E",
                        marginBottom: "4px",
                      }}
                    >
                      {item.title}
                    </p>
                    <p
                      style={{
                        fontSize: "0.875rem",
                        color: "#64748B",
                        lineHeight: 1.6,
                        fontFamily: "var(--font-inter), Inter, sans-serif",
                      }}
                    >
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Download CV CTA */}
          <div style={{ display: "flex", justifyContent: "center", marginTop: "32px" }}>
            <a
              href="/cv-baptiste-devisscher.pdf"
              download
              className="btn-secondary"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                fontSize: "0.9rem",
                padding: "12px 24px",
              }}
            >
              Télécharger mon CV complet (PDF)
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
