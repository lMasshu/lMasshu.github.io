export default function Reflection() {
  const competencies = [
    {
      title: "Réaliser un développement d'application",
      acquired: 70,
      desc: "Développement d'applications web et logicielles en PHP, Java et C.",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#E63946" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
          <line x1="2" y1="20" x2="22" y2="20"></line>
          <line x1="12" y1="17" x2="12" y2="20"></line>
        </svg>
      ),
    },
    {
      title: "Optimiser des applications",
      acquired: 55,
      desc: "Analyse de performances et amélioration des algorithmes.",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#E63946" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
        </svg>
      ),
    },
    {
      title: "Administrer des systèmes et réseaux",
      acquired: 50,
      desc: "Bases en administration système Linux et réseaux IP.",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#E63946" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
          <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
          <line x1="6" y1="6" x2="6" y2="6.01"></line>
          <line x1="6" y1="18" x2="6" y2="18.01"></line>
        </svg>
      ),
    },
    {
      title: "Gérer des données",
      acquired: 60,
      desc: "Conception de BDD relationnelles, SQL et modélisation.",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#E63946" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
          <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
          <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3"></path>
        </svg>
      ),
    },
    {
      title: "Conduire un projet",
      acquired: 65,
      desc: "Méthodes agiles, travail en équipe, gestion de version Git.",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#E63946" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
          <rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>
        </svg>
      ),
    },
    {
      title: "Collaborer au sein d'une équipe",
      acquired: 75,
      desc: "Communication, pair programming, retours constructifs.",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#E63946" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
      ),
    },
  ];

  const insights = [
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#E63946" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
          <line x1="12" y1="9" x2="12" y2="13"></line>
          <line x1="12" y1="17" x2="12.01" y2="17"></line>
        </svg>
      ),
      title: "De la théorie mathématique à l'exécution",
      desc: "Traduire les règles de calcul complexes d'Enedis en code m'a directement confronté au mur des performances. Traiter plus de 800 000 itérations m'a forcé à repenser mon architecture logicielle et à refactoriser mes boucles PHP pour diviser les temps de chargement par deux.",
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#E63946" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
          <polyline points="22 4 12 14.01 9 11.01"></polyline>
        </svg>
      ),
      title: "Le deuil de la perfection initiale",
      desc: "Mon profil scientifique me poussait à vouloir concevoir une architecture parfaite et irréprochable avant d'écrire la moindre ligne de code. L'expérience du terrain m'a enseigné la vraie ingénierie : accepter de prototyper, de faire des erreurs, pour ensuite itérer et consolider.",
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#E63946" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
      ),
      title: "L'autonomie au service du collectif",
      desc: "Gérer seul l'entièreté d'un backend m'a forcé à normaliser ma méthode de travail. L'application stricte du cadre R.E.S.E.A.U a été vitale pour documenter le code et assurer une synchronisation parfaite avec les autres stagiaires.",
    },
  ];

  return (
    <section
      id="reflection"
      style={{
        padding: "100px 24px",
        background: "#FFFFFF",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Header */}
        <div className="reveal" style={{ textAlign: "center", marginBottom: "72px" }}>
          <span className="section-tag">Réflexion</span>
          <h2
            style={{
              fontFamily: "var(--font-syne), Syne, sans-serif",
              fontSize: "clamp(2rem, 4vw, 3.2rem)",
              fontWeight: 800,
              color: "#1A1A2E",
              marginBottom: "16px",
            }}
          >
            Prise de recul sur mes acquis
          </h2>
          <div className="section-divider" style={{ margin: "0 auto 24px" }} />
          <p
            style={{
              fontFamily: "var(--font-inter), Inter, sans-serif",
              fontSize: "1.05rem",
              color: "#64748B",
              maxWidth: "600px",
              margin: "0 auto",
            }}
          >
            Où en suis-je par rapport aux compétences attendues du BUT Informatique ?
          </p>
        </div>

        {/* Competencies grid */}
        <div className="reveal" style={{ marginBottom: "64px" }}>
          <h3
            style={{
              fontFamily: "var(--font-syne), Syne, sans-serif",
              fontSize: "1.15rem",
              fontWeight: 700,
              color: "#1A1A2E",
              marginBottom: "24px",
            }}
          >
            Compétences acquises vs attendues (PN)
          </h3>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
              gap: "16px",
            }}
          >
            {competencies.map((c) => (
              <div
                key={c.title}
                className="card"
                style={{ padding: "22px 24px" }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "14px",
                    marginBottom: "14px",
                  }}
                >
                  <span
                    style={{
                      flexShrink: 0,
                      width: "40px",
                      height: "40px",
                      background: "#FEF2F2",
                      borderRadius: "10px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {c.icon}
                  </span>
                  <div>
                    <p
                      style={{
                        fontFamily: "var(--font-syne), Syne, sans-serif",
                        fontWeight: 700,
                        fontSize: "0.9rem",
                        color: "#1A1A2E",
                        marginBottom: "4px",
                        lineHeight: 1.3,
                      }}
                    >
                      {c.title}
                    </p>
                    <p
                      style={{
                        fontSize: "0.8rem",
                        color: "#94A3B8",
                        lineHeight: 1.5,
                        fontFamily: "var(--font-inter), Inter, sans-serif",
                      }}
                    >
                      {c.desc}
                    </p>
                  </div>
                </div>
                {/* Progress */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "8px",
                  }}
                >
                  <span
                    style={{
                      fontSize: "0.75rem",
                      color: "#94A3B8",
                      fontFamily: "var(--font-inter), Inter, sans-serif",
                    }}
                  >
                    Progression
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--font-syne), Syne, sans-serif",
                      fontWeight: 700,
                      fontSize: "0.85rem",
                      color: c.acquired >= 70 ? "#10B981" : c.acquired >= 50 ? "#E63946" : "#F59E0B",
                    }}
                  >
                    {c.acquired}%
                  </span>
                </div>
                <div
                  style={{
                    height: "6px",
                    background: "#F1F5F9",
                    borderRadius: "3px",
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      height: "100%",
                      width: `${c.acquired}%`,
                      background:
                        c.acquired >= 70
                          ? "linear-gradient(90deg, #10B981, #34D399)"
                          : c.acquired >= 50
                          ? "linear-gradient(90deg, #E63946, #FF6B6B)"
                          : "linear-gradient(90deg, #F59E0B, #FBBF24)",
                      borderRadius: "3px",
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Insights */}
        <div className="reveal">
          <h3
            style={{
              fontFamily: "var(--font-syne), Syne, sans-serif",
              fontSize: "1.15rem",
              fontWeight: 700,
              color: "#1A1A2E",
              marginBottom: "24px",
            }}
          >
            Défis surmontés & Solutions
          </h3>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "20px",
            }}
            className="insights-grid"
          >
            {insights.map((ins) => (
              <div
                key={ins.title}
                className="card"
                style={{
                  background: "linear-gradient(135deg, #FAFAFA 0%, #FFFFFF 100%)",
                  textAlign: "center",
                  padding: "32px 24px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <span style={{ display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "16px", width: "48px", height: "48px", background: "#FEF2F2", borderRadius: "50%" }}>
                  {ins.icon}
                </span>
                <h4
                  style={{
                    fontFamily: "var(--font-syne), Syne, sans-serif",
                    fontWeight: 700,
                    fontSize: "1rem",
                    color: "#1A1A2E",
                    marginBottom: "12px",
                  }}
                >
                  {ins.title}
                </h4>
                <p
                  style={{
                    fontFamily: "var(--font-inter), Inter, sans-serif",
                    fontSize: "0.875rem",
                    color: "#64748B",
                    lineHeight: 1.7,
                  }}
                >
                  {ins.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .insights-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 480px) {
          .insights-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
