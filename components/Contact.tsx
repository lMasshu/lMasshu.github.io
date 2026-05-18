"use client";

import { useState } from "react";

export default function Contact() {
  const [copied, setCopied] = useState<string | null>(null);

  const copyToClipboard = async (text: string, label: string) => {
    await navigator.clipboard.writeText(text);
    setCopied(label);
    setTimeout(() => setCopied(null), 2000);
  };

  const contactItems = [
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#E63946" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
          <polyline points="22,6 12,13 2,6"></polyline>
        </svg>
      ),
      label: "Email",
      value: "baptistedevsh@gmail.com",
      href: "mailto:baptistedevsh@gmail.com",
      copyValue: "baptistedevsh@gmail.com",
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#E63946" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
          <line x1="12" y1="18" x2="12.01" y2="18"></line>
        </svg>
      ),
      label: "Téléphone",
      value: "06 23 27 09 94",
      href: "tel:+33623270994",
      copyValue: "0623270994",
    },
  ];

  const socialLinks = [
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0A66C2" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
          <rect x="2" y="9" width="4" height="12"></rect>
          <circle cx="4" cy="4" r="2"></circle>
        </svg>
      ),
      label: "LinkedIn",
      handle: "Baptiste Devisscher",
      href: "https://www.linkedin.com/in/baptiste-devisscher-591367383/",
      color: "#0A66C2",
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1A1A2E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
        </svg>
      ),
      label: "GitHub",
      handle: "@lMasshu",
      href: "https://github.com/lMasshu",
      color: "#1A1A2E",
    },
  ];

  return (
    <section
      id="contact"
      style={{
        padding: "100px 24px",
        background: "#F9FAFB",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Header */}
        <div className="reveal" style={{ textAlign: "center", marginBottom: "72px" }}>
          <span className="section-tag">Contact</span>
          <h2
            style={{
              fontFamily: "var(--font-syne), Syne, sans-serif",
              fontSize: "clamp(2rem, 4vw, 3.2rem)",
              fontWeight: 800,
              color: "#1A1A2E",
              marginBottom: "16px",
            }}
          >
            Travaillons ensemble
          </h2>
          <div className="section-divider" style={{ margin: "0 auto 24px" }} />
          <p
            style={{
              fontFamily: "var(--font-inter), Inter, sans-serif",
              fontSize: "1.05rem",
              color: "#64748B",
              maxWidth: "500px",
              margin: "0 auto",
            }}
          >
            Une question, une opportunité ou juste envie d&apos;échanger ? Je suis disponible.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.2fr",
            gap: "40px",
            alignItems: "start",
          }}
          className="contact-grid"
        >
          {/* Left — info */}
          <div className="reveal reveal-left" style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            {/* Contact items */}
            {contactItems.map((item) => (
              <div
                key={item.label}
                className="card"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "16px",
                  padding: "22px 24px",
                }}
              >
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "12px",
                    background: "#FEF2F2",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  {item.icon}
                </div>
                <div style={{ flex: 1 }}>
                  <p
                    style={{
                      fontSize: "0.75rem",
                      fontWeight: 600,
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                      color: "#94A3B8",
                      marginBottom: "2px",
                      fontFamily: "var(--font-inter), Inter, sans-serif",
                    }}
                  >
                    {item.label}
                  </p>
                  <a
                    href={item.href}
                    style={{
                      fontFamily: "var(--font-syne), Syne, sans-serif",
                      fontWeight: 600,
                      fontSize: "0.95rem",
                      color: "#1A1A2E",
                      textDecoration: "none",
                      transition: "color 0.2s ease",
                    }}
                    onMouseEnter={(e) =>
                      ((e.target as HTMLElement).style.color = "#E63946")
                    }
                    onMouseLeave={(e) =>
                      ((e.target as HTMLElement).style.color = "#1A1A2E")
                    }
                  >
                    {item.value}
                  </a>
                </div>
                <button
                  onClick={() => copyToClipboard(item.copyValue, item.label)}
                  title="Copier"
                  style={{
                    background: copied === item.label ? "#E63946" : "#F1F5F9",
                    border: "none",
                    borderRadius: "8px",
                    width: "36px",
                    height: "36px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    transition: "all 0.2s ease",
                    flexShrink: 0,
                    color: copied === item.label ? "#FFFFFF" : "#64748B",
                  }}
                >
                  {copied === item.label ? (
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  ) : (
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg>
                  )}
                </button>
              </div>
            ))}

            {/* Social links */}
            <div style={{ display: "flex", gap: "12px" }}>
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    flex: 1,
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    padding: "16px 20px",
                    background: "#FFFFFF",
                    border: "1px solid #E2E8F0",
                    borderRadius: "12px",
                    textDecoration: "none",
                    transition: "all 0.2s ease",
                    opacity: s.placeholder ? 0.6 : 1,
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "#E63946";
                    (e.currentTarget as HTMLElement).style.transform =
                      "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "#E2E8F0";
                    (e.currentTarget as HTMLElement).style.transform = "none";
                  }}
                >
                  <span style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>{s.icon}</span>
                  <div>
                    <p
                      style={{
                        fontFamily: "var(--font-syne), Syne, sans-serif",
                        fontWeight: 700,
                        fontSize: "0.85rem",
                        color: "#1A1A2E",
                        lineHeight: 1.2,
                      }}
                    >
                      {s.label}
                    </p>
                    <p
                      style={{
                        fontSize: "0.75rem",
                        color: "#94A3B8",
                        fontFamily: "var(--font-inter), Inter, sans-serif",
                      }}
                    >
                      {s.placeholder ? "À renseigner" : s.handle}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Right — contact form */}
          <div
            className="card reveal reveal-right"
            style={{ padding: "36px" }}
          >
            <h3
              style={{
                fontFamily: "var(--font-syne), Syne, sans-serif",
                fontWeight: 700,
                fontSize: "1.3rem",
                color: "#1A1A2E",
                marginBottom: "8px",
              }}
            >
              Envoyer un message
            </h3>
            <p
              style={{
                fontSize: "0.875rem",
                color: "#94A3B8",
                marginBottom: "28px",
                fontFamily: "var(--font-inter), Inter, sans-serif",
              }}
            >
              Je réponds généralement sous 24h.
            </p>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                window.location.href = "mailto:baptistedevsh@gmail.com";
              }}
              style={{ display: "flex", flexDirection: "column", gap: "18px" }}
            >
              {[
                {
                  id: "contact-name",
                  label: "Votre nom",
                  type: "text",
                  placeholder: "Jean Dupont",
                },
                {
                  id: "contact-email",
                  label: "Votre email",
                  type: "email",
                  placeholder: "jean@exemple.fr",
                },
              ].map((field) => (
                <div key={field.id} style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                  <label
                    htmlFor={field.id}
                    style={{
                      fontSize: "0.8rem",
                      fontWeight: 600,
                      color: "#475569",
                      fontFamily: "var(--font-inter), Inter, sans-serif",
                    }}
                  >
                    {field.label}
                  </label>
                  <input
                    id={field.id}
                    type={field.type}
                    placeholder={field.placeholder}
                    required
                    style={{
                      padding: "12px 16px",
                      border: "1px solid #E2E8F0",
                      borderRadius: "10px",
                      fontSize: "0.9rem",
                      color: "#1A1A2E",
                      background: "#F8FAFC",
                      fontFamily: "var(--font-inter), Inter, sans-serif",
                      outline: "none",
                      transition: "border-color 0.2s ease",
                    }}
                    onFocus={(e) =>
                      ((e.target as HTMLElement).style.borderColor = "#E63946")
                    }
                    onBlur={(e) =>
                      ((e.target as HTMLElement).style.borderColor = "#E2E8F0")
                    }
                  />
                </div>
              ))}

              <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                <label
                  htmlFor="contact-message"
                  style={{
                    fontSize: "0.8rem",
                    fontWeight: 600,
                    color: "#475569",
                    fontFamily: "var(--font-inter), Inter, sans-serif",
                  }}
                >
                  Votre message
                </label>
                <textarea
                  id="contact-message"
                  placeholder="Bonjour Baptiste, je souhaitais..."
                  required
                  rows={5}
                  style={{
                    padding: "12px 16px",
                    border: "1px solid #E2E8F0",
                    borderRadius: "10px",
                    fontSize: "0.9rem",
                    color: "#1A1A2E",
                    background: "#F8FAFC",
                    fontFamily: "var(--font-inter), Inter, sans-serif",
                    outline: "none",
                    resize: "vertical",
                    transition: "border-color 0.2s ease",
                  }}
                  onFocus={(e) =>
                    ((e.target as HTMLElement).style.borderColor = "#E63946")
                  }
                  onBlur={(e) =>
                    ((e.target as HTMLElement).style.borderColor = "#E2E8F0")
                  }
                />
              </div>

              <button
                type="submit"
                id="contact-submit"
                className="btn-primary"
                style={{ justifyContent: "center" }}
              >
                Envoyer le message
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
                  <line x1="22" y1="2" x2="11" y2="13" />
                  <polygon points="22 2 15 22 11 13 2 9 22 2" />
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
