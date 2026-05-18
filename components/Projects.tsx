"use client";
import Image from "next/image";
import { useState } from "react";

export default function Projects() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section
      id="projects"
      style={{
        padding: "100px 24px",
        background: "#FFFFFF",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Header */}
        <div className="reveal" style={{ textAlign: "center", marginBottom: "72px" }}>
          <span className="section-tag">Projets</span>
          <h2
            style={{
              fontFamily: "var(--font-syne), Syne, sans-serif",
              fontSize: "clamp(2rem, 4vw, 3.2rem)",
              fontWeight: 800,
              color: "#1A1A2E",
              marginBottom: "16px",
            }}
          >
            Mes Réalisations
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
            Mise en lumière de mon projet personnel le plus abouti.
          </p>
        </div>

        {/* Big Project Card */}
        <div
          className="reveal"
          style={{
            background: "#FFFFFF",
            borderRadius: "24px",
            border: "1px solid #E2E8F0",
            overflow: "hidden",
            boxShadow: "0 4px 24px -8px rgba(0,0,0,0.06)",
          }}
        >
          {/* Top banner */}
          <div
            style={{
              background: "linear-gradient(135deg, #1A1A2E 0%, #2D2D44 100%)",
              padding: "40px 48px",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Decorative elements */}
            <div
              aria-hidden="true"
              style={{
                position: "absolute",
                top: "-30px",
                right: "-30px",
                width: "200px",
                height: "200px",
                borderRadius: "50%",
                background: "rgba(230,57,70,0.12)",
              }}
            />
            <div
              aria-hidden="true"
              style={{
                position: "absolute",
                bottom: "-40px",
                left: "40%",
                width: "150px",
                height: "150px",
                borderRadius: "50%",
                background: "rgba(230,57,70,0.06)",
              }}
            />

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                flexWrap: "wrap",
                gap: "20px",
                position: "relative",
              }}
            >
              <div>
                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    fontSize: "0.75rem",
                    fontWeight: 600,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "#E63946",
                    background: "rgba(230,57,70,0.15)",
                    padding: "5px 12px",
                    borderRadius: "100px",
                    marginBottom: "14px",
                    fontFamily: "var(--font-inter), Inter, sans-serif",
                  }}
                >
                  Projet Personnel
                </span>
                <a
                  href="https://github.com/lMasshu/SimulationSystemeSol"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    textDecoration: "none",
                    transition: "opacity 0.2s ease",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
                  onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
                >
                  <h3
                    style={{
                      fontFamily: "var(--font-syne), Syne, sans-serif",
                      fontSize: "1.8rem",
                      fontWeight: 800,
                      color: "#FFFFFF",
                      marginBottom: "8px",
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                    }}
                  >
                    Simulateur du Système Solaire 3D
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#E63946"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                  </h3>
                </a>
                <p
                  style={{
                    fontFamily: "var(--font-inter), Inter, sans-serif",
                    fontSize: "0.95rem",
                    color: "rgba(255,255,255,0.6)",
                  }}
                >
                  Moteur physique interactif Java/JavaFX
                </p>
              </div>

              {/* Stats */}
              <div style={{ display: "flex", gap: "24px" }}>
                {[
                  { value: "60", label: "FPS Constants" },
                  { value: "8", label: "Planètes (Kepler)" },
                  { value: "3D", label: "PerspectiveCamera" },
                ].map((stat) => (
                  <div key={stat.label} style={{ textAlign: "center" }}>
                    <p
                      style={{
                        fontFamily: "var(--font-syne), Syne, sans-serif",
                        fontWeight: 800,
                        fontSize: "1.5rem",
                        color: "#E63946",
                        lineHeight: 1,
                        marginBottom: "4px",
                      }}
                    >
                      {stat.value}
                    </p>
                    <p
                      style={{
                        fontSize: "0.75rem",
                        color: "rgba(255,255,255,0.5)",
                        fontFamily: "var(--font-inter), Inter, sans-serif",
                      }}
                    >
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Body */}
          <div style={{ padding: "40px 48px" }} className="proj-body">
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "48px",
                alignItems: "start",
              }}
              className="proj-content-grid"
            >
              {/* Narrative */}
              <div>
                <h4
                  style={{
                    fontFamily: "var(--font-syne), Syne, sans-serif",
                    fontWeight: 700,
                    fontSize: "1.1rem",
                    color: "#1A1A2E",
                    marginBottom: "16px",
                  }}
                >
                  Description
                </h4>
                <div
                  style={{
                    fontFamily: "var(--font-inter), Inter, sans-serif",
                    fontSize: "0.95rem",
                    color: "#475569",
                    lineHeight: 1.8,
                  }}
                >
                  <p style={{ marginBottom: "16px", fontSize: "1rem", color: "#1A1A2E", fontWeight: 600 }}>
                    Moteur physique 3D fluide reproduisant fidèlement les orbites planétaires.
                  </p>
                  <ul style={{ paddingLeft: "20px", marginBottom: "20px", listStyleType: "none", display: "flex", flexDirection: "column", gap: "12px" }}>
                    <li style={{ position: "relative" }}>
                      <span style={{ position: "absolute", left: "-20px", color: "#E63946", fontWeight: "bold" }}>•</span>
                      <strong>Mathématiques Spatiales</strong> : Implémentation des <strong style={{ color: "#E63946" }}>lois de Kepler</strong>, avec calcul du périhélie, de l'aphélie, et des inclinaisons orbitales.
                    </li>
                    <li style={{ position: "relative" }}>
                      <span style={{ position: "absolute", left: "-20px", color: "#E63946", fontWeight: "bold" }}>•</span>
                      <strong>Résolution d'Équation</strong> : Résolution de l'équation de Kepler par méthode itérative pour des positions 3D ultra-précises.
                    </li>
                    <li style={{ position: "relative" }}>
                      <span style={{ position: "absolute", left: "-20px", color: "#E63946", fontWeight: "bold" }}>•</span>
                      <strong>Données Réelles</strong> : Intégration des véritables paramètres astronomiques pour garantir des échelles et proportions authentiques.
                    </li>
                  </ul>
                </div>

                {/* Tags */}
                <div style={{ marginTop: "24px" }}>
                  <p
                    style={{
                      fontSize: "0.8rem",
                      fontWeight: 600,
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                      color: "#94A3B8",
                      marginBottom: "10px",
                      fontFamily: "var(--font-inter), Inter, sans-serif",
                    }}
                  >
                    Outils & Langages
                  </p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                    {["Java 11", "JavaFX", "Lois de Kepler", "Algorithmique 3D", "AnimationTimer"].map(
                      (tag) => (
                        <span
                          key={tag}
                          style={{
                            padding: "5px 12px",
                            background: "#F1F5F9",
                            border: "1px solid #E2E8F0",
                            borderRadius: "100px",
                            fontSize: "0.78rem",
                            color: "#475569",
                            fontFamily: "var(--font-inter), Inter, sans-serif",
                          }}
                        >
                          {tag}
                        </span>
                      )
                    )}
                  </div>
                </div>
              </div>

              {/* Technical Challenges */}
              <div>
                <h4
                  style={{
                    fontFamily: "var(--font-syne), Syne, sans-serif",
                    fontWeight: 700,
                    fontSize: "1.1rem",
                    color: "#1A1A2E",
                    marginBottom: "16px",
                  }}
                >
                  Architecture & Défis Techniques
                </h4>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "12px",
                  }}
                >
                  {[
                    {
                      title: "Caméra 3D Interactive",
                      desc: "Système de caméra PerspectiveCamera avec transformations composées évitant le 'gimbal lock' lors de la navigation au clic/clavier.",
                      icon: (
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#E63946" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path>
                          <circle cx="12" cy="13" r="4"></circle>
                        </svg>
                      )
                    },
                    {
                      title: "Boucle de Rendu (60 FPS)",
                      desc: "Optimisation stricte via AnimationTimer avec gestion mémoire avancée et rendu conditionnel dynamique des trajectoires.",
                      icon: (
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#E63946" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                        </svg>
                      )
                    },
                    {
                      title: "Suivi Dynamique",
                      desc: "Algorithme de calcul vectoriel pour les déplacements relatifs permettant à la caméra de se positionner et suivre n'importe quelle planète à la volée.",
                      icon: (
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#E63946" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="12" cy="12" r="10"></circle>
                          <line x1="22" y1="12" x2="18" y2="12"></line>
                          <line x1="6" y1="12" x2="2" y2="12"></line>
                          <line x1="12" y1="6" x2="12" y2="2"></line>
                          <line x1="12" y1="22" x2="12" y2="18"></line>
                        </svg>
                      )
                    }
                  ].map((feat, idx) => (
                    <div
                      key={idx}
                      style={{
                        background: "#F8FAFC",
                        border: "1px solid #E2E8F0",
                        borderRadius: "12px",
                        padding: "20px 16px",
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "16px",
                        transition: "all 0.2s ease",
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.borderColor = "#E63946";
                        (e.currentTarget as HTMLElement).style.background = "#FEF2F2";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.borderColor = "#E2E8F0";
                        (e.currentTarget as HTMLElement).style.background = "#F8FAFC";
                      }}
                    >
                      <span style={{ display: "inline-flex", padding: "8px", background: "#FFFFFF", borderRadius: "8px", border: "1px solid #E2E8F0" }}>
                        {feat.icon}
                      </span>
                      <div>
                        <p
                          style={{
                            fontSize: "0.85rem",
                            fontWeight: 700,
                            color: "#1A1A2E",
                            marginBottom: "4px",
                            fontFamily: "var(--font-syne), Syne, sans-serif",
                          }}
                        >
                          {feat.title}
                        </p>
                        <p
                          style={{
                            fontSize: "0.75rem",
                            color: "#64748B",
                            lineHeight: 1.4,
                            fontFamily: "var(--font-inter), Inter, sans-serif",
                          }}
                        >
                          {feat.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Gallery */}
            <div style={{ marginTop: "64px" }}>
              <h4
                style={{
                  fontFamily: "var(--font-syne), Syne, sans-serif",
                  fontWeight: 700,
                  fontSize: "1.1rem",
                  color: "#1A1A2E",
                  marginBottom: "20px",
                }}
              >
                Aperçu du Simulateur
              </h4>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                  gap: "24px",
                }}
              >
                {[
                  { src: "/sysSolaire.png", alt: "Vue globale du système solaire" },
                  { src: "/earth-sun.png", alt: "Orbite Terre-Soleil" },
                  { src: "/earthfrontsun.png", alt: "Vue rapprochée avec éclairage" },
                ].map((img, idx) => (
                  <div
                    key={idx}
                    onClick={() => setSelectedImage(img.src)}
                    style={{
                      position: "relative",
                      width: "100%",
                      aspectRatio: "16/9",
                      borderRadius: "12px",
                      overflow: "hidden",
                      border: "1px solid #E2E8F0",
                      boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
                      cursor: "pointer",
                    }}
                  >
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      style={{ objectFit: "cover", transition: "transform 0.3s ease" }}
                      onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                      onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                      sizes="(max-width: 768px) 100vw, 33vw"
                      quality={90}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            background: "rgba(15, 23, 42, 0.9)",
            zIndex: 9999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "zoom-out",
            padding: "24px",
            backdropFilter: "blur(4px)",
          }}
        >
          <div
            style={{
              position: "relative",
              width: "100%",
              maxWidth: "1200px",
              aspectRatio: "16/9",
              borderRadius: "12px",
              overflow: "hidden",
              boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
            }}
          >
            <Image
              src={selectedImage}
              alt="Aperçu agrandi"
              fill
              style={{ objectFit: "contain" }}
              quality={100}
              unoptimized
            />
          </div>
          {/* Close button */}
          <button
            onClick={() => setSelectedImage(null)}
            style={{
              position: "absolute",
              top: "24px",
              right: "24px",
              background: "rgba(255,255,255,0.1)",
              border: "none",
              color: "#FFF",
              width: "48px",
              height: "48px",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              transition: "background 0.2s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.2)")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.1)")}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .proj-body { padding: 24px !important; }
          .proj-content-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
