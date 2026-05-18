"use client";
import Image from "next/image";
import { useState } from "react";

export default function Experience() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const proofs = [
    {
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#E63946" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
          <line x1="2" y1="20" x2="22" y2="20"></line>
          <line x1="12" y1="17" x2="12" y2="20"></line>
        </svg>
      ),
      label: "Démonstrateur Web (PHP/MySQL)",
      desc: "Interface avec espaces Adhérent (graphiques Linky) et Admin (gestion des boucles).",
    },
    {
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#E63946" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
          <polyline points="14 2 14 8 20 8"></polyline>
          <line x1="16" y1="13" x2="8" y2="13"></line>
          <line x1="16" y1="17" x2="8" y2="17"></line>
        </svg>
      ),
      label: "Mandats PDF & Sécurité OTP",
      desc: "Génération automatique et signature certifiée à usage unique par e-mail.",
    },
    {
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#E63946" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
          <polyline points="2 17 12 22 22 17"></polyline>
          <polyline points="2 12 12 17 22 12"></polyline>
        </svg>
      ),
      label: "Moteur de calcul Enedis",
      desc: "Traitement ultra-rapide optimisé de plus de 800 000 itérations de données d'énergie.",
    },
  ];

  return (
    <section
      id="experience"
      style={{
        padding: "100px 24px",
        background: "#F9FAFB",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Header */}
        <div className="reveal" style={{ textAlign: "center", marginBottom: "72px" }}>
          <span className="section-tag">Expériences</span>
          <h2
            style={{
              fontFamily: "var(--font-syne), Syne, sans-serif",
              fontSize: "clamp(2rem, 4vw, 3.2rem)",
              fontWeight: 800,
              color: "#1A1A2E",
              marginBottom: "16px",
            }}
          >
            Ce que j&apos;ai vécu
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
            Mes expériences les plus marquantes, racontées avec les preuves à l&apos;appui.
          </p>
        </div>

        {/* Experience card */}
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
                  Stage en entreprise
                </span>
                <a
                  href="https://collectifsdusolaire.org"
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
                    Collectifs du Solaire
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
                  Développeur backend stagiaire · Janv. - Mars 2026 (8 semaines)
                </p>
              </div>

              {/* Stats */}
              <div style={{ display: "flex", gap: "24px" }}>
                {[
                  { value: "8 sem.", label: "Durée" },
                  { value: "3", label: "Stagiaires" },
                  { value: "800k+", label: "Itérations Linky" },
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
          <div style={{ padding: "40px 48px" }} className="exp-body">
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "48px",
                alignItems: "start",
              }}
              className="exp-content-grid"
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
                  Mon histoire
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
                    Mission : Concevoir de A à Z une plateforme web de gestion et de démonstration pour l&apos;autoconsommation d&apos;énergie locale.
                  </p>
                  <ul style={{ paddingLeft: "20px", marginBottom: "20px", listStyleType: "none", display: "flex", flexDirection: "column", gap: "12px" }}>
                    <li style={{ position: "relative" }}>
                      <span style={{ position: "absolute", left: "-20px", color: "#E63946", fontWeight: "bold" }}>•</span>
                      <strong>Moteur algorithmique (PHP)</strong> : Traduction des formules de répartition d&apos;Enedis pour traiter plus de <strong style={{ color: "#E63946" }}>800 000 données</strong> issues des compteurs Linky.
                    </li>
                    <li style={{ position: "relative" }}>
                      <span style={{ position: "absolute", left: "-20px", color: "#E63946", fontWeight: "bold" }}>•</span>
                      <strong>Optimisation Backend</strong> : Refactorisation des boucles de calcul pour diviser le temps de chargement par deux (de 10s à 5s).
                    </li>
                    <li style={{ position: "relative" }}>
                      <span style={{ position: "absolute", left: "-20px", color: "#E63946", fontWeight: "bold" }}>•</span>
                      <strong>Sécurité & Automatisation</strong> : Implémentation d'une vérification numérique par code OTP (e-mail) et génération dynamique des mandats PDF légaux.
                    </li>
                  </ul>
                  <p
                    style={{
                      background: "#F8FAFC",
                      borderLeft: "3px solid #E63946",
                      padding: "12px 16px",
                      borderRadius: "0 8px 8px 0",
                      color: "#475569",
                      fontSize: "0.9rem",
                    }}
                  >
                    <strong>Résultat :</strong> L&apos;application a totalement automatisé le traitement administratif de l&apos;association et lui sert aujourd&apos;hui de vitrine commerciale interactive.
                  </p>
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
                    Compétences mobilisées
                  </p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                    {["PHP 8.4", "MySQL 8", "TailwindCSS", "Git", "PHPUnit", "R.E.S.E.A.U", "RGPD", "Sécurité OTP"].map(
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

              {/* Proof / placeholder images */}
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
                  Preuves & Réalisations
                </h4>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "12px",
                  }}
                >
                  {proofs.map((proof, idx) => (
                    <div
                      key={idx}
                      style={{
                        background: "#F8FAFC",
                        border: "1px solid #E2E8F0",
                        borderRadius: "12px",
                        padding: "20px 16px",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        gap: "10px",
                        transition: "all 0.2s ease",
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.borderColor =
                          "#E63946";
                        (e.currentTarget as HTMLElement).style.background =
                          "#FEF2F2";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.borderColor =
                          "#E2E8F0";
                        (e.currentTarget as HTMLElement).style.background =
                          "#F8FAFC";
                      }}
                    >
                      <span style={{ display: "inline-flex", padding: "8px", background: "#FFFFFF", borderRadius: "8px", border: "1px solid #E2E8F0" }}>
                        {proof.icon}
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
                          {proof.label}
                        </p>
                        <p
                          style={{
                            fontSize: "0.75rem",
                            color: "#64748B",
                            lineHeight: 1.4,
                            fontFamily: "var(--font-inter), Inter, sans-serif",
                          }}
                        >
                          {proof.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Project Gallery */}
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
                Aperçu de la plateforme
              </h4>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                  gap: "24px",
                }}
              >
                {[
                  { src: "/collectifdusolaire-site.png", alt: "Vue globale de la plateforme" },
                  { src: "/exmple_dashboad_collectif.png", alt: "Tableau de bord de production/consommation" },
                  { src: "/exemple_graphiques_collectif.png", alt: "Détails des graphiques de répartition" },
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
          .exp-body { padding: 24px !important; }
          .exp-content-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
