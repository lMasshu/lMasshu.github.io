"use client";

import Image from "next/image";

export default function Hero() {
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        padding: "100px 24px 60px",
        position: "relative",
        overflow: "hidden",
        background: "#FFFFFF",
      }}
    >
      {/* Decorative background elements */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "-200px",
          right: "-200px",
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(230,57,70,0.06) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          bottom: "-100px",
          left: "-100px",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(230,57,70,0.04) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          width: "100%",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "80px",
          alignItems: "center",
        }}
        className="hero-grid"
      >
        {/* Left — Text content */}
        <div>
          {/* Tag */}
          <div
            className="animate-fadeInUp"
            style={{ animationDelay: "0s", animationFillMode: "both" }}
          >
            <span className="section-tag">
              <span
                style={{
                  width: "6px",
                  height: "6px",
                  borderRadius: "50%",
                  background: "#E63946",
                  display: "inline-block",
                  animation: "pulseRing 2s ease-out infinite",
                }}
              />
              Disponible pour des opportunités
            </span>
          </div>

          {/* Name */}
          <h1
            className="animate-fadeInUp"
            style={{
              fontFamily: "var(--font-syne), Syne, sans-serif",
              fontSize: "clamp(3rem, 6vw, 5.5rem)",
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              color: "#1A1A2E",
              margin: "16px 0 8px",
              animationDelay: "0.1s",
              animationFillMode: "both",
            }}
          >
            Baptiste
            <br />
            <span
              style={{
                position: "relative",
                display: "inline-block",
              }}
            >
              Devisscher
              <span
                style={{
                  position: "absolute",
                  bottom: "4px",
                  left: 0,
                  right: 0,
                  height: "6px",
                  background:
                    "linear-gradient(90deg, #E63946 0%, #FF6B6B 100%)",
                  borderRadius: "3px",
                  opacity: 0.3,
                }}
              />
            </span>
            <span className="text-gradient">.</span>
          </h1>

          {/* Subtitle */}
          <p
            className="animate-fadeInUp"
            style={{
              fontFamily: "var(--font-inter), Inter, sans-serif",
              fontSize: "clamp(1rem, 2vw, 1.2rem)",
              fontWeight: 400,
              color: "#64748B",
              marginBottom: "32px",
              animationDelay: "0.2s",
              animationFillMode: "both",
            }}
          >
            Étudiant en 2ème année de{" "}
            <strong style={{ color: "#1A1A2E", fontWeight: 600 }}>
              BUT Informatique
            </strong>{" "}
            - Curieux, créatif, passionné.
          </p>

          {/* Quote */}
          <blockquote
            className="animate-fadeInUp"
            style={{
              fontFamily: "var(--font-inter), Inter, sans-serif",
              fontSize: "0.95rem",
              fontStyle: "italic",
              color: "#64748B",
              borderLeft: "3px solid #E63946",
              paddingLeft: "20px",
              marginBottom: "40px",
              lineHeight: 1.7,
              animationDelay: "0.3s",
              animationFillMode: "both",
            }}
          >
            &ldquo;Le progrès n&apos;est que l&apos;aboutissement des utopies.&rdquo;
            <br />
            <span style={{ fontSize: "0.8rem", fontWeight: 500, color: "#94A3B8", fontStyle: "normal", marginTop: "4px", display: "inline-block" }}>
              - Oscar Wilde (écrivain irlandais, XIXe siècle)
            </span>
          </blockquote>

          {/* CTAs */}
          <div
            className="animate-fadeInUp"
            style={{
              display: "flex",
              gap: "16px",
              flexWrap: "wrap",
              animationDelay: "0.4s",
              animationFillMode: "both",
            }}
          >
            <button onClick={scrollToAbout} className="btn-primary">
              Mon parcours
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
                <path d="M12 5v14M5 12l7 7 7-7" />
              </svg>
            </button>
            <a href="mailto:baptistedevsh@gmail.com" className="btn-secondary">
              Me contacter
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
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            </a>
          </div>

          {/* Quick info chips */}
          <div
            className="animate-fadeInUp"
            style={{
              display: "flex",
              gap: "12px",
              marginTop: "40px",
              flexWrap: "wrap",
              animationDelay: "0.5s",
              animationFillMode: "both",
            }}
          >
            {[
              { icon: "📍", text: "France" },
              { icon: "🎓", text: "BUT Info - Année 2" },
              { icon: "🔭", text: "Astronomie & Code" },
            ].map((chip) => (
              <span
                key={chip.text}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  fontSize: "0.8rem",
                  color: "#64748B",
                  background: "#F8FAFC",
                  padding: "6px 14px",
                  borderRadius: "100px",
                  border: "1px solid #E2E8F0",
                }}
              >
                {chip.icon} {chip.text}
              </span>
            ))}
          </div>
        </div>

        {/* Right — Illustration */}
        <div
          className="animate-fadeIn hero-illustration"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            animationDelay: "0.2s",
            animationFillMode: "both",
          }}
        >
          <div
            style={{
              position: "relative",
              width: "440px",
              height: "440px",
              maxWidth: "100%",
            }}
          >
            {/* Decorative ring */}
            <div
              aria-hidden="true"
              style={{
                position: "absolute",
                inset: "-20px",
                borderRadius: "50%",
                border: "2px dashed rgba(230,57,70,0.15)",
                animation: "spinSlow 30s linear infinite",
              }}
            />
            {/* Decorative ring 2 */}
            <div
              aria-hidden="true"
              style={{
                position: "absolute",
                inset: "20px",
                borderRadius: "50%",
                border: "1px solid rgba(230,57,70,0.08)",
              }}
            />

            {/* Main image container */}
            <div
              className="animate-float"
              style={{
                position: "absolute",
                inset: "30px",
                borderRadius: "50%",
                background:
                  "linear-gradient(135deg, #FEF2F2 0%, #FFF5F5 50%, #FEF2F2 100%)",
                overflow: "hidden",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "3px solid rgba(230,57,70,0.15)",
                boxShadow:
                  "0 30px 60px -15px rgba(230,57,70,0.2), 0 0 0 1px rgba(230,57,70,0.05)",
              }}
            >
              <Image
                src="/hero-illustration.png"
                alt="Illustration de Baptiste Devisscher"
                fill
                style={{ objectFit: "cover" }}
                priority
              />
            </div>

            {/* Floating badges */}
            <div
              style={{
                position: "absolute",
                top: "10%",
                right: "-10px",
                background: "#FFFFFF",
                border: "1px solid #E2E8F0",
                borderRadius: "12px",
                padding: "10px 14px",
                fontSize: "0.78rem",
                fontWeight: 600,
                color: "#1A1A2E",
                boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                fontFamily: "var(--font-inter), Inter, sans-serif",
                animation: "float 4s ease-in-out infinite",
                animationDelay: "0s",
              }}
            >
              💻 PHP · Java · C
            </div>
            <div
              style={{
                position: "absolute",
                bottom: "18%",
                left: "-15px",
                background: "#FFFFFF",
                border: "1px solid #E2E8F0",
                borderRadius: "12px",
                padding: "10px 14px",
                fontSize: "0.78rem",
                fontWeight: 600,
                color: "#1A1A2E",
                boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                fontFamily: "var(--font-inter), Inter, sans-serif",
                animation: "float 4s ease-in-out infinite",
                animationDelay: "1.5s",
              }}
            >
              🔭 Astronomie
            </div>
            <div
              style={{
                position: "absolute",
                bottom: "5%",
                right: "5%",
                background: "#E63946",
                borderRadius: "12px",
                padding: "10px 14px",
                fontSize: "0.78rem",
                fontWeight: 600,
                color: "#FFFFFF",
                boxShadow: "0 4px 12px rgba(230,57,70,0.35)",
                fontFamily: "var(--font-inter), Inter, sans-serif",
                animation: "float 4s ease-in-out infinite",
                animationDelay: "0.8s",
              }}
            >
              🍳 Cuisine
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        style={{
          position: "absolute",
          bottom: "40px",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "8px",
          opacity: 0.5,
        }}
      >
        <span
          style={{
            fontSize: "0.7rem",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "#64748B",
            fontFamily: "var(--font-inter), Inter, sans-serif",
          }}
        >
          Scroll
        </span>
        <div
          className="animate-bounce-slow"
          style={{
            width: "24px",
            height: "38px",
            borderRadius: "12px",
            border: "2px solid #CBD5E1",
            display: "flex",
            justifyContent: "center",
            padding: "5px",
          }}
        >
          <div
            style={{
              width: "4px",
              height: "8px",
              background: "#E63946",
              borderRadius: "2px",
            }}
          />
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
          }
          .hero-illustration {
            order: -1;
          }
          .hero-illustration > div {
            width: 280px !important;
            height: 280px !important;
          }
        }
      `}</style>
    </section>
  );
}
