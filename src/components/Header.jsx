"use client"

import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { Menu, X } from "lucide-react"
import logoBranca from "../assets/logoBranca.png"
import logoAzul from "../assets/logoAzul.png"

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()
  const isHomePage = location.pathname === "/"

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/estoque", label: "Estoque" },
    { path: "/simulacao", label: "Financiamento" },
    { path: "/venda", label: "Venda" },
    { path: "/contato", label: "Contato" },
    { path: "/sobre", label: "Sobre" },
  ]

  const headerStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    transition: "all 0.3s ease",
    backgroundColor: isHomePage
      ? isScrolled
        ? "rgba(255, 255, 255, 0.95)"
        : "transparent"
      : "rgba(255, 255, 255, 0.95)",
    backdropFilter: isHomePage && !isScrolled ? "none" : "blur(10px)",
    boxShadow: isHomePage && !isScrolled ? "none" : "var(--shadow-md)",
    borderBottom: isHomePage && !isScrolled ? "none" : "1px solid var(--gray-200)",
  }

  const textColor = isHomePage ? (isScrolled ? "var(--gray-800)" : "var(--white)") : "var(--gray-800)"

  // Determina qual logo usar
  const logoSrc = isHomePage && !isScrolled ? logoBranca : logoAzul

  return (
    <header style={headerStyle}>
      <div className="container">
        <nav
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "1rem 0",
            minHeight: "70px",
          }}
        >
          {/* Logo */}
          <Link to="/" style={{ display: "flex", alignItems: "center", gap: "0.5rem", textDecoration: "none" }}>
            <img src={logoSrc} alt="Logo Ibiza Veículos" style={{ height: "60px" }} />
          </Link>

          {/* Desktop Menu */}
          <ul
            style={{
              display: "flex",
              listStyle: "none",
              gap: "2rem",
              margin: 0,
              padding: 0,
            }}
            className="desktop-menu"
          >
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  style={{
                    color: textColor,
                    textDecoration: "none",
                    fontWeight: "500",
                    fontSize: "0.875rem",
                    transition: "all 0.2s ease",
                    borderBottom: location.pathname === item.path ? "2px solid currentColor" : "none",
                    paddingBottom: "0.25rem",
                  }}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="mobile-menu-btn"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            style={{
              display: "none",
              background: "none",
              border: "none",
              color: textColor,
              cursor: "pointer",
              padding: "0.5rem",
            }}
          >
            {isMobileMenuOpen ? <X className="icon" /> : <Menu className="icon" />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div
            className="mobile-menu"
            style={{
              position: "absolute",
              top: "100%",
              left: 0,
              right: 0,
              backgroundColor: "var(--white)",
              boxShadow: "var(--shadow-lg)",
              borderRadius: "0 0 0.75rem 0.75rem",
              padding: "1.5rem",
              border: "1px solid var(--gray-200)",
            }}
          >
            <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
              {navItems.map((item) => (
                <li key={item.path} style={{ marginBottom: "0.5rem" }}>
                  <Link
                    to={item.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    style={{
                      display: "block",
                      color: "var(--gray-800)",
                      textDecoration: "none",
                      padding: "0.75rem",
                      borderRadius: "0.5rem",
                      fontWeight: "500",
                      backgroundColor: location.pathname === item.path ? "var(--gray-100)" : "transparent",
                    }}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .desktop-menu {
            display: none !important;
          }
          .mobile-menu-btn {
            display: block !important;
          }
        }
      `}</style>
    </header>
  )
}

export default Header
