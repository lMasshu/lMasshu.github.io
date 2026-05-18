"use client";

export default function Skills() {
  const skillCategories = [
    {
      title: "Backend & Systèmes",
      desc: "Architecture serveur et programmation",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#E63946" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6"></polyline>
          <polyline points="8 6 2 12 8 18"></polyline>
        </svg>
      ),
      skills: ["PHP 8", "Java 11", "C#", "C++", "Langage C", "Bash", "Windows", "Ubuntu"],
    },
    {
      title: "Frontend & Intégration",
      desc: "Interfaces web et logicielles dynamiques",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#E63946" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
          <line x1="8" y1="21" x2="16" y2="21"></line>
          <line x1="12" y1="17" x2="12" y2="21"></line>
        </svg>
      ),
      skills: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Next.js", "TailwindCSS", "JavaFX"],
    },
    {
      title: "Bases de Données",
      desc: "Modélisation et requêtage",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#E63946" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
          <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
          <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
        </svg>
      ),
      skills: ["SQL", "MySQL", "Modélisation Entité-Association"],
    },
    {
      title: "Intelligence Artificielle & Dev",
      desc: "IA, co-pilotes et agents autonomes",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#E63946" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
          <path d="M2 12h20"></path>
        </svg>
      ),
      skills: ["Gemini", "Claude"],
    },
    {
      title: "Outils & Méthodologies",
      desc: "Écosystème et gestion de projet",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#E63946" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
        </svg>
      ),
      skills: ["Git", "GitHub", "VS Code", "Antigravity", "Méthode R.E.S.E.A.U", "Méthodes Agiles"],
    }
  ];

  return (
    <section
      id="skills"
      style={{
        padding: "100px 24px",
        background: "#F8FAFC",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Header */}
        <div className="reveal" style={{ textAlign: "center", marginBottom: "72px" }}>
          <span className="section-tag">Compétences</span>
          <h2
            style={{
              fontFamily: "var(--font-syne), Syne, sans-serif",
              fontSize: "clamp(2rem, 4vw, 3.2rem)",
              fontWeight: 800,
              color: "#1A1A2E",
              marginBottom: "16px",
            }}
          >
            Mon Expertise
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
            Technologies, outils et langages maîtrisés.
          </p>
        </div>

        {/* Categories Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "24px",
          }}
        >
          {skillCategories.map((cat, idx) => (
            <div
              key={cat.title}
              className="reveal card"
              style={{
                background: "#FFFFFF",
                borderRadius: "20px",
                border: "1px solid #E2E8F0",
                padding: "32px",
                animationDelay: `${idx * 0.1}s`,
                boxShadow: "0 4px 12px rgba(0,0,0,0.03)",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "24px" }}>
                <span
                  style={{
                    width: "56px",
                    height: "56px",
                    background: "#FEF2F2",
                    borderRadius: "16px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    border: "1px solid rgba(230,57,70,0.1)",
                  }}
                >
                  {cat.icon}
                </span>
                <div>
                  <h3
                    style={{
                      fontFamily: "var(--font-syne), Syne, sans-serif",
                      fontWeight: 700,
                      fontSize: "1.2rem",
                      color: "#1A1A2E",
                      marginBottom: "4px",
                    }}
                  >
                    {cat.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "0.85rem",
                      color: "#64748B",
                      fontFamily: "var(--font-inter), Inter, sans-serif",
                    }}
                  >
                    {cat.desc}
                  </p>
                </div>
              </div>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    style={{
                      padding: "6px 14px",
                      background: "#F1F5F9",
                      border: "1px solid #E2E8F0",
                      borderRadius: "100px",
                      fontSize: "0.85rem",
                      color: "#334155",
                      fontWeight: 500,
                      fontFamily: "var(--font-inter), Inter, sans-serif",
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
