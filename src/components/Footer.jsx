"use client";

import { Link } from "react-router-dom";
import logo from "../assets/logoBranca.png";
import {
  Facebook,
  Instagram,
  MessageCircle,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

const Footer = () => {
  const linkStyle = {
    color: "#ffffff",
    textDecoration: "none",
    opacity: 0.85,
    transition: "all 0.3s ease",
  };

  const linkHover = (e) => (e.target.style.opacity = "1");
  const linkLeave = (e) => (e.target.style.opacity = "0.85");

  return (
    <footer
      style={{
        backgroundColor: "#003C85",
        color: "#ffffff",
        padding: "4rem 2rem 2rem",
        fontFamily: "'Segoe UI', sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          gap: "2rem",
        }}
      >
        {/* LOGO + SOBRE */}
        <div style={{ flex: "1 1 300px", minWidth: "250px" }}>
          <img
            src={logo}
            alt="Ibiza Veículos"
            style={{ width: "250px", marginBottom: "1.2rem" }}
          />
          <p style={{ lineHeight: "1.6", opacity: 0.9 }}>
            Desde 1992 realizando sonhos e oferecendo os melhores veículos com
            qualidade e confiança.
          </p>

          <div style={{ display: "flex", gap: "1rem", marginTop: "1rem" }}>
            <a
              href="https://www.facebook.com/ibizaveiculos"
              aria-label="Facebook"
              style={linkStyle}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Facebook size={22} />
            </a>
            <a
              href="https://www.instagram.com/ibizaveiculospatos/"
              aria-label="Instagram"
              style={linkStyle}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram size={22} />
            </a>
            <a
              href="https://wa.me/5534991610075"
              aria-label="WhatsApp"
              target="_blank"
              rel="noopener noreferrer"
              style={linkStyle}
            >
              <MessageCircle size={22} />
            </a>
          </div>
        </div>

        {/* LINKS RÁPIDOS */}
        <div style={{ flex: "1 1 200px", minWidth: "180px" }}>
          <h4 style={{ fontSize: "1.2rem", marginBottom: "1rem" }}>
            Links Rápidos
          </h4>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {[
              { path: "/", label: "Home" },
              { path: "/estoque", label: "Estoque" },
              { path: "/simulacao", label: "Financiamento" },
              { path: "/venda", label: "Venda seu Veículo" },
              { path: "/sobre", label: "Sobre Nós" },
            ].map((item) => (
              <li key={item.path} style={{ marginBottom: "0.5rem" }}>
                <Link
                  to={item.path}
                  style={linkStyle}
                  onMouseEnter={linkHover}
                  onMouseLeave={linkLeave}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* CONTATO */}
        <div style={{ flex: "1 1 260px", minWidth: "220px" }}>
          <h4 style={{ fontSize: "1.2rem", marginBottom: "1rem" }}>Contato</h4>
          <p
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.6rem",
              marginBottom: "0.8rem",
              opacity: 0.9,
            }}
          >
            <MapPin size={18} /> R. Maj. Gote - 1645 - Cônego Getúlio
          </p>
          <p
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.6rem",
              marginBottom: "0.8rem",
              opacity: 0.9,
            }}
          >
            <Phone size={18} /> (34) 3818-7777
          </p>
          <p
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.6rem",
              marginBottom: "0.8rem",
              opacity: 0.9,
            }}
          >
            <MessageCircle size={18} /> (34) 99161-0075
          </p>
          <p
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.6rem",
              opacity: 0.9,
            }}
          >
            <Mail size={18} /> luis.fernandes@ibizaveiculos.com.br
          </p>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div
        style={{
          borderTop: "1px solid rgba(255, 255, 255, 0.2)",
          textAlign: "center",
          marginTop: "3rem",
          paddingTop: "1.5rem",
          fontSize: "0.9rem",
          opacity: 0.7,
        }}
      >
        <p>
          &copy; {new Date().getFullYear()} Ibiza Veículos. Todos os direitos
          reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
