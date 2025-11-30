"use client"

import { useState, useEffect } from "react"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      style={{
        position: "fixed",
        width: "100%",
        zIndex: 50,
        transition: "all 0.3s ease",
        background: "#ffffffcc",
        backdropFilter: "blur(8px)",
        boxShadow: isScrolled ? "0 3px 10px rgba(0,0,0,0.05)" : "none",
      }}
    >
      <div style={{ padding: "20px 50px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        {/* Logo */}
        <div style={{ fontFamily: '"Playfair Display", serif', fontSize: "26px", fontWeight: 700, color: "#333" }}>
          AMOUR COOKIES
        </div>

        {/* Links */}
        <ul style={{ listStyle: "none", display: "flex", gap: "35px" }}>
          <li>
            <a
              href="#hero"
              style={{
                textDecoration: "none",
                color: "#444",
                fontWeight: 500,
                transition: "0.2s",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => (e.target.style.color = "#c76b82")}
              onMouseLeave={(e) => (e.target.style.color = "#444")}
            >
              Inicio
            </a>
          </li>
          <li>
            <a
              href="#productos"
              style={{
                textDecoration: "none",
                color: "#444",
                fontWeight: 500,
                transition: "0.2s",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => (e.target.style.color = "#c76b82")}
              onMouseLeave={(e) => (e.target.style.color = "#444")}
            >
              Productos
            </a>
          </li>
          <li>
            <a
              href="#nosotros"
              style={{
                textDecoration: "none",
                color: "#444",
                fontWeight: 500,
                transition: "0.2s",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => (e.target.style.color = "#c76b82")}
              onMouseLeave={(e) => (e.target.style.color = "#444")}
            >
              Sobre Nosotros
            </a>
          </li>
          <li>
            <a
              href="#contacto"
              style={{
                textDecoration: "none",
                color: "#444",
                fontWeight: 500,
                transition: "0.2s",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => (e.target.style.color = "#c76b82")}
              onMouseLeave={(e) => (e.target.style.color = "#444")}
            >
              Contacto
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
